import SeriesListTop from "../../components/serieslisttop";
import React, {useEffect, useState} from "react";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Fixedfield from "../../components/fixedfield";
import Leftminiad from "../../components/leftminiad";
import SeriesList from "../../components/Serieslist";
import {getSeriesCourseCardList, getSeriesCourseTotal} from "../../api/seriesCourseListApi";
import Head from "next/head";


export default function ProviderSearch() {
    //登录是否展示状态机
    const [showCoverLogin, setshowCoverLogin] = useState(false)

    //控制是否展示
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)
    }

    //系列课程列表卡片数组
    const [seriesCardList,setSeriesCardList] = useState([])

    //系列课程列表总数
    const [seriesCardTotal,setSeriesCardTotal] = useState(0)

    //pages是当前页数
    const [pages,setPages] = useState(1)

    //页面加载完毕！
    useEffect(()=>{
        getSeriesCourseCardList().then((result)=>{
            setSeriesCardList(result.data)
        })

        getSeriesCourseTotal().then((result)=>{
            setSeriesCardTotal(result.data[0].seriesTotal)
        })
    },[])

    //页面数发生改变
    const PaginationOnChange = (page_num)=>{
        getSeriesCourseCardList(page_num,9).then((result)=>{
            setSeriesCardList(result.data)
        })
        setPages(page_num)
    }

    return (
        <>
            <Head>
                <title>全部系列课程</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <SeriesListTop/>
            <SeriesList pages={pages} seriesCardTotal={seriesCardTotal} PaginationOnChange={PaginationOnChange} seriesCardList={seriesCardList}/>
            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>
        </>
    )
}