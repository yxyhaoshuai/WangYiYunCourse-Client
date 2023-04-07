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
import {getSeriesCourse, getSeriesCourseList} from "../../api/seriesCourseDetailApi";

export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }
    const router = useRouter()


    //系列课程详情
    const [seriesCourseData,setSeriesCourseData] = useState([])
    useEffect(()=>{
        getSeriesCourse(router.query.id).then((result)=>{
            if (result.data !== null){
                setSeriesCourseData(result.data[0])
            }

        })

    },[router.query]);


    //获取系列课程中的课程列表
    const [seriesCourseListData,setSeriesCourseListData] = useState([])
    useEffect(()=>{
        getSeriesCourseList(router.query.id).then((result)=>{
            if (result.data !== null){
                setSeriesCourseListData(result.data)
            }

        })

    },[router.query]);






    return (
        <>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Seriesimg seriesCourseData={seriesCourseData} seriesCourseListData={seriesCourseListData}/>
            <Seriesbar seriesCourseListData={seriesCourseListData}/>

            {
                seriesCourseListData.map((item)=>{
                    return <Seriescourseitem data={item} key={item.id}/>
                })
            }

            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}