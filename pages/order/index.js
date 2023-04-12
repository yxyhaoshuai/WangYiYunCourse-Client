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

export default function ProviderSearch() {
    const router = useRouter()

    const [showCoverLogin, setshowCoverLogin] = useState(false)

    //课程列表状态机
    const [courseList,setCourseList] = useState([])

    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)
    }

    //设置课程列表状态机
    useEffect(()=>{
        getSeriesCourses(router.query.id).then((result)=>{
            setCourseList(result.data)
        })

    },[router.query])

    return (
        <>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Orderlayout courseList={courseList}>
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