import Navibar from "../../components/naviBar";
import React, {useEffect, useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Leftminiad from "../../components/leftminiad";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import ProviderHome from "../../components/ProviderHome";
import ProviderCourse from "../../components/providerCourse";
import ProviderTeacher from "../../components/providerTeacher";
import ProviderAbout from "../../components/ProviderAbout";
import ProviderInfo from "../../components/providerInfo";
import ProviderBar from "../../components/providerBar";
import {useRouter} from "next/router";
import {
    getNetSchoolAd,
    getNetSchoolCourseListHome,
    getNetSchoolInformation,
    getNetSchoolTeacherList
} from "../../api/providerApi";

export default function ProviderSearch() {
    const router = useRouter()
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin);
    }

    //网校信息
    const [netSchoolInformation,setNetSchoolInformation] = useState({})

    //广告轮播图
    const [adLunbo,setAdLunbo] = useState([])

    //推荐讲师列表
    const [teacher,setTeacher] = useState([])

    //推荐课程列表
    const [course,setCourse] = useState([])

    //当前标签页状态
    const [tabsStatus,setTabsStatus] = useState("1")

    useEffect(()=>{
        if (router.query.id !==undefined){
            getNetSchoolInformation(router.query.id).then((result)=>{
                setNetSchoolInformation(result.data[0])
            })
        }

    },[router.query])

    //获取轮播图钩子
    useEffect(()=>{
        if (router.query.id !==undefined){
            getNetSchoolAd(router.query.id).then((result)=>{
                setAdLunbo(result.data)
            })
        }

    },[router.query])

    //获取推荐教师
    useEffect(()=>{
        if (router.query.id !==undefined){
            getNetSchoolTeacherList(router.query.id).then((result)=>{
                setTeacher(result.data)
            })
        }

    },[router.query])

    //获取推荐课程
    useEffect(()=>{
        if (router.query.id !==undefined){
            getNetSchoolCourseListHome(router.query.id).then((result)=>{
                setCourse(result.data)
            })
        }

    },[router.query])


    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <ProviderInfo netSchoolInformation={netSchoolInformation}/>
            <ProviderBar setTabsStatus={setTabsStatus}/>
            {tabsStatus === "1" ? <ProviderHome course={course} teacher={teacher} adLunbo={adLunbo}/> : null}
            {tabsStatus === "2" ? <ProviderCourse/> : null}
            {tabsStatus === "3" ? <ProviderTeacher/> : null}
            {tabsStatus === "4" ? <ProviderAbout netSchoolInformation={netSchoolInformation}/> : null}
            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>

        </>
    )
}
