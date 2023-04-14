import Seriesimg from "../../components/seriesimg";
import React, {useEffect, useState} from "react";
import Seriesbar from "../../components/seriesbar";
import Seriescourseitem from "../../components/seriescourseitem";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Leftminiad from "../../components/leftminiad";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import {useRouter} from "next/router";
import {addUserFavorite, getSeriesCourse, getSeriesCourseList} from "../../api/seriesCourseDetailApi";
import {getUser, isLogin} from "../../api/userApi";
import {message} from "antd";

export default function ProviderSearch() {
    //获取路由信息
    const router = useRouter();

    //控制登陆面板的显示
    const [showCoverLogin, setshowCoverLogin] = useState(false)

    //获取系列课程中的课程列表
    const [seriesCourseListData, setSeriesCourseListData] = useState([])

    //获取用户id
    const [userData, setUserData] = useState(0)

    //系列课程详情
    const [seriesCourseData, setSeriesCourseData] = useState([])


    const _loginShow = () => {
        setshowCoverLogin(!showCoverLogin)
    }


    //全局消息
    const success = () => {
        message.success({
            content: '收藏课程成功！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //点击收藏系列课程下所有课程的按钮后执行的函数
    const addFavorite =  () => {
        isLogin().then((result)=>{
            if (result){
                let newSeriesCourseListData = seriesCourseListData.map((item)=>{
                    return item.id
                })
                addUserFavorite(newSeriesCourseListData,userData.id).then((result)=>{
                    if ( result.code === 0 ){
                        success()
                    }
                })
            }else{
                _loginShow()
            }

        })



    }

    //从本地获取用户id
    useEffect(() => {
        getUser().then((result) => {
            if (result.id === undefined) {
                console.log("请先登录")
            } else {
                setUserData(result)
            }
        })
    }, [router.query])


    //获取系列课程信息
    useEffect(() => {
        getSeriesCourse(router.query.id).then((result) => {
            if (result.data !== null) {
                setSeriesCourseData(result.data[0])
            }

        })

    }, [router, router.query]);


    //获取该系列课程的课程列表
    useEffect(() => {
        getSeriesCourseList(router.query.id).then((result) => {
            if (result.data !== null) {
                setSeriesCourseListData(result.data)
            }

        })

    }, [router, router.query]);

    const AttendAllCourses = (event,id)=>{
        event.preventDefault();
        isLogin().then((result)=>{
            if (result){
                router.push("/order?id="+id)
                console.log(window.history)
            }else {
                _loginShow()
            }
        })

    }



    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Seriesimg AttendAllCourses={AttendAllCourses} addFavorite={addFavorite} seriesCourseData={seriesCourseData}
                       seriesCourseListData={seriesCourseListData}/>
            <Seriesbar seriesCourseListData={seriesCourseListData}/>

            {
                seriesCourseListData.map((item) => {
                    return <Seriescourseitem data={item} key={item.id}/>
                })
            }
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}