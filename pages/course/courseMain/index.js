import {getCourseDetailCrumbs, getCourseIntroduction, getCourseOutline} from "../../../api/courseIntroductionApi";
import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Leftminiad from "../../../components/leftminiad";
import Fixedfield from "../../../components/fixedfield";
import React, {useEffect, useState} from "react";
import Coursedetailschool from "../../../components/coursedetailschool";
import Coursedetailschoolconsult from "../../../components/coursedetailschoolconsult";
import Coursedetailbelongingseries from "../../../components/coursedetailbelongingseries";
import Coursedetailcomment from "../../../components/coursedetailcomment";
import Coursedetaillayout from "../../../components/coursedetaillayout";
import Commentcover from "../../../components/commentcover";
import Progressbar from "../../../components/progressbar";
import Coursedetailbreadmy from "../../../components/coursedetailbreadmy";
import {useRouter} from "next/router";
import {
    getCourseMainCommentListCount,
    getCourseMainCommentListLimit5,
    getCourseMainSeries
} from "../../../api/courseMainApi";
require("./index.less")


export default function ProviderSearch() {
    //路由信息
    const router = useRouter()
    //面包屑数据
    const [breadData, setBreadData] = useState({})
    //控制登陆面板的状态机
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    //介绍和目录状态机
    const [directoryIntro, setDirectoryIntro] = useState(1);
    //控制登陆面板
    const _loginShow = () => {
        setshowCoverLogin(!showCoverLogin)
    }
    // 评论蒙版状态机
    const [showcomment, setshowcomment] = useState(false)
    //控制评论蒙版显示状态
    const _commentShow = () => {
        setshowcomment(!showcomment)
    }

    //课程数据状态机
    const [courseData, setCourseData] = useState([])

    //获取课程详情信息
    useEffect(() => {
        if (router.query.id !== undefined) {
            getCourseIntroduction(router.query.id).then((result) => {
                setCourseData(result.data[0])
            })
        }
    }, [router.query])

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

    // useEffect(()=>{
    //     console.log(courseData)
    // },[courseData])


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
            {/*courseMain界面就传true，introduction就传false*/}
            <Coursedetailbreadmy setDirectoryIntro={setDirectoryIntro} directoryIntro={directoryIntro}
                                 courseData={courseData} breadData={breadData} ismystudy={true}/>
            <Progressbar courseOutline={courseOutline}/>
            <Coursedetaillayout courseOutline={courseOutline} directoryIntro={directoryIntro}>
                <Coursedetailschool/>
                {
                    seriesCourseInfo.id === null ? "" :
                        <Coursedetailbelongingseries seriesCourseInfo={seriesCourseInfo}/>
                }
                <Coursedetailcomment _commentShow={_commentShow}/>
            </Coursedetaillayout>
            {
                showcomment ? <Commentcover _commentShow={_commentShow}/> : ''
            }
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}