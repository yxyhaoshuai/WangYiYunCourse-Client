import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import React, {useEffect, useState} from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Fixedfield from "../../components/fixedfield";
import Orderlayout from "../../components/orderlayout";
import Orderitem from "../../components/orderitem";
import Orderprice from "../../components/orderprice";
import {useRouter} from "next/router";
import {getSeriesCourses} from "../../api/orderApi";
import {getUser} from "../../api/userApi";

export default function ProviderSearch() {
    const router = useRouter()
    const [showCoverLogin, setshowCoverLogin] = useState(false);
    //课程列表状态机
    const [courseList,setCourseList] = useState([]);

    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)
    }
    //用户名状态机
    const [nickName,setNickName] = useState("")

    //设置课程列表状态机
    useEffect(()=>{
        getSeriesCourses(router.query.id).then((result)=>{
            setCourseList(result.data)
        })

    },[router.query])

    //获取用户信息
    useEffect(()=>{
        getUser().then((result)=>{
            setNickName(result.nick_name)
        })
    },[])

    return (
        <>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Orderlayout _loginShow={_loginShow} nickName={nickName} courseList={courseList}>
                {
                    courseList.map((item)=>{
                        return <Orderitem key={item.id} item={item}/>
                    })
                }
            </Orderlayout>
            <Orderprice courseList={courseList}/>
            <Wangyiyunfooter/>
            <Fixedfield/>
        </>
    )
}