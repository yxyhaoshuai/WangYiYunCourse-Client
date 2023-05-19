import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import React, {useEffect, useState} from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Fixedfield from "../../components/fixedfield";
import Orderlayout from "../../components/orderlayout";
import Orderitem from "../../components/orderitem";
import Orderprice from "../../components/orderprice";
import {useRouter} from "next/router";
import {getOrderCourses, getSeriesCourses} from "../../api/orderApi";
import {getUser} from "../../api/userApi";
import Head from "next/head";

export default function ProviderSearch() {
    const router = useRouter()
    const [showCoverLogin, setshowCoverLogin] = useState(false);
    //课程列表状态机
    const [courseList,setCourseList] = useState([]);

    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)
    }
    //用户名状态机
    const [userData,setUserData] = useState({})

    //设置课程列表状态机，当从系列课程详情页跳转过来时
    useEffect(()=>{
        if (router.query.id !==undefined){
            getSeriesCourses(router.query.id).then((result)=>{
                setCourseList(result.data)
            })
        }
    },[router.query])

    //设置课程列表状态机，当从课程详情页跳转过来时
    useEffect(()=>{
        if (router.query.courseId !==undefined){
            getOrderCourses(router.query.courseId).then((result)=>{
                setCourseList(result.data)
            })
        }
    },[router.query])

    //获取用户信息
    useEffect(()=>{
        getUser().then((result)=>{
            setUserData(result)
        })
    },[])




    return (
        <>
            <Head>
                <title>提交订单</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Orderlayout _loginShow={_loginShow} userData={userData} courseList={courseList}>
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