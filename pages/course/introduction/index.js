import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Fixedfield from "../../../components/fixedfield";
import React, {useEffect, useState} from "react";
import Coursedetailbread from "../../../components/coursedetailbread";
import Coursedetaillayout from "../../../components/coursedetaillayout";
import Coursedetailschool from "../../../components/coursedetailschool";
import Coursedetailschoolconsult from "../../../components/coursedetailschoolconsult";
import Coursedetailbelongingseries from "../../../components/coursedetailbelongingseries";
import Coursedetailcomment from "../../../components/coursedetailcomment";
import Commentcover from "../../../components/commentcover";
import {useRouter} from "next/router";
import {getCourseDetailCrumbs, getCourseIntroduction, getCourseOutline} from "../../../api/courseIntroductionApi";
import {getCourseMainSeries} from "../../../api/courseMainApi";


export default function ProviderSearch() {
    //介绍和目录状态机
    const [directoryIntro, setDirectoryIntro] = useState(1);
    //获取路由信息
    const router = useRouter()
    const [courseData, setCourseData] = useState({})

    //登陆表单
    const [showCoverLogin, setshowCoverLogin] = useState(false)

    //面包屑数据
    const [breadData, setBreadData] = useState({})
    // 评论蒙版
    const [showcomment, setshowcomment] = useState(false)
    const _commentShow = () => {
        setshowcomment(!showcomment)
    }

    const _loginShow = () => {
        setshowCoverLogin(!showCoverLogin)
    }

    //获取课程详情信息
    useEffect(() => {
        if (router.query.id !== undefined) {
            getCourseIntroduction(router.query.id).then((result) => {
                setCourseData(result.data[0])
            })
        }
    }, [router.query])


    // 课程详情页数据
    // useEffect(()=>{
    //     console.log(courseData)
    // },[courseData])

    //获取课程详情页面包屑
    useEffect(() => {
        if (router.query.id !== undefined) {
            getCourseDetailCrumbs(router.query.id).then((result) => {
                setBreadData(result.data[0])
            })
        }
    }, [router.query])


    const [courseOutline, setCourseOutline] = useState([])

    useEffect(() => {
        if (router.query.id !== undefined) {
            getCourseOutline(router.query.id).then((result) => {
                setCourseOutline(result.data)
            })
        }

    }, [router.query])

    //courseMain页面的系列课程信息状态机
    const [seriesCourseInfo, setSeriesCourseInfo] = useState({})

    //获取courseMain页面的系列课程信息
    useEffect(() => {
        if (router.query.id !== undefined) {
            getCourseMainSeries(router.query.id).then((result) => {
                setSeriesCourseInfo(result.data[0])
            })
        }

    }, [router.query.id])


    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Fixedfield/>
            {/*下面是一个组件到时候封装*/}
            <Coursedetailbread setDirectoryIntro={setDirectoryIntro} directoryIntro={directoryIntro}
                               _loginShow={_loginShow} breadData={breadData} courseData={courseData}/>
            {/*下面是一个组件到时候封装*/}
            <Coursedetaillayout courseOutline={courseOutline} directoryIntro={directoryIntro}>
                <Coursedetailschool/>
                {
                    seriesCourseInfo.id === null ? "" :
                        <Coursedetailbelongingseries seriesCourseInfo={seriesCourseInfo}/>
                }
                <Coursedetailcomment _commentShow={_commentShow}/>
            </Coursedetaillayout>
            <Wangyiyunfooter/>
            {
                showcomment ? <Commentcover _commentShow={_commentShow}/> : ''
            }

        </>
    )
}
