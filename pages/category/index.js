import Categoryfreecard from "../../components/card/categoryfreecard";
import Leftminiad from "../../components/leftminiad";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import React, {useEffect, useState} from "react";
import Categorycardlayout from "../../components/categorycardlayout";
import Categorycard from "../../components/card/categorycard";
import Categorybread from "../../components/categorybread";
import Categorycarousel from "../../components/categorycarousel";
import {
    getCategoryAd,
    getCategoryNav, getClassTwoCourses,
    getOpenCourseAll,
    getOpenCoursePart,
    getSonAndCourse, getSonAndCourse_son
} from "../../api/categoryApi";
import {useRouter} from "next/router";
import Categorytabs from "../../components/categorytabs";
import Head from "next/head";


export default function ProviderSearch() {
    const router = useRouter()
    const {classOneId,categoryId} = router.query;

    const [showCoverLogin, setshowCoverLogin] = useState(false)

    const [nav , setNav] = useState([])

    //轮播图数据
    const [ad,setAd] = useState([])

    //直播公开课
    const [openCourse,setOpenCourse] = useState([])

    //页面子分类和课程状态机
    const [sonAndCourse,setSonAndCourse] =useState([])
    const [classTwoCourse,setClassTwoCourse] = useState([])

    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin);
    }



    useEffect(()=>{
        if (classOneId !== undefined){
            getCategoryNav(classOneId).then((result)=>{
                if (categoryId === ''+0){
                    setNav([{classtwoid:0,classtwoname:"精选",current: +categoryId},...result.data])
                }else {
                    let newResult =result.data.map((item)=>{
                        if (+categoryId === item.classtwoid){
                            item.current = +categoryId
                            return item
                        }
                        return item
                    })
                    setNav([{classtwoid:0,classtwoname:"精选"},...newResult])
                }
            })
        }
    },[router.query])


    //获取广告轮播图数据
    useEffect(()=>{
        if (classOneId !== undefined){
            if (+categoryId === 0) {
                getCategoryAd(classOneId).then((result)=>{
                    setAd(result.data)
                })
            } else {
                setAd([])
            }
        }
    },[router.query])



    //获取直播公开课数据
    useEffect(()=>{
        if (classOneId !== undefined){
            if (+categoryId === 0) {
                getOpenCourseAll(classOneId).then((result)=>{
                    setOpenCourse(result.data)
                })
            } else {
                getOpenCoursePart(categoryId).then((result)=>{
                    setOpenCourse(result.data)
                })
            }
        }
    },[router.query])

    //获取子分类和子分类里的课程列表
    useEffect(()=>{
        if (classOneId !== undefined){
            if (+categoryId === 0) {
                getSonAndCourse(classOneId).then((result)=>{
                    setSonAndCourse(result.data)
                })
            } else {
                getSonAndCourse_son(+categoryId).then((result)=>{
                    setSonAndCourse(result.data)
                })
            }
        }
    },[router.query.categoryId])

    //获取二级分类下所有课程
    useEffect(()=>{
        if (classOneId !== undefined){
            if (+categoryId === 0) {
                setClassTwoCourse([])
            } else {
                getClassTwoCourses(categoryId,"studyCount").then((result)=>{
                    setClassTwoCourse(result.data)
                })
            }
        }
    },[router.query.categoryId])




    return (
        <>
            <Head>
                <title>{nav.length > 0 ? nav[1].classonename : "加载中"}</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
                <meta name="keywords" content="有道英语，有道英语视频，有道英语教程，有道英语网站,云课堂"/>
                <meta name="description" content="在网易云课堂有道英语频道，发现好课！云课堂是网易公司(163.com)旗下实用技能学习平台。与顶级机构、院校和优秀讲师合作，为您提供海量优质课程，以及创新的在线学习体验。涉及IT互联网、设计、职场提升、经管、法律、语言、留学、考试、亲子育儿、兴趣生活等多个领域。帮助您获得全新的个人发展和能力提升。"/>
            </Head>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Categorybread categoryId={categoryId} nav={nav}/>
            <Categorycarousel ad={ad}/>
            {
                openCourse.length > 0 ? <Categorycardlayout layoutTitle={"直播公开课"}>
                        {
                            openCourse.map((item)=>{
                                return <Categorycard key={item.courseId} data={item}/>
                            })
                        }
                    </Categorycardlayout> : ""
            }
            {/*下面的score必传，传一个数值或者null*/}

            {
                sonAndCourse.map((item,index)=>{
                    if (item.courses.length > 0){
                        return <Categorycardlayout key={index} layoutTitle={item.sonName}>
                            {
                                item.courses.map((item2)=>{
                                    return <Categoryfreecard data={item2} key={item2.courseId} score={item2.score}/>
                                })
                            }
                        </Categorycardlayout>
                    }else {
                        return ""
                    }
                })
            }
            <Categorytabs categoryId={categoryId} setClassTwoCourse={setClassTwoCourse} classTwoCourse={classTwoCourse}/>
            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>
        </>
    )
}
