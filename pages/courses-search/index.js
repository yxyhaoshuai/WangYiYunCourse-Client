require("./index.less")
import FlexLayout from "../../layout/flexLayout";
import Crumb from "../../components/crumb";
import Navibar from "../../components/naviBar";
import React, {useEffect, useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Searchresultcard from "../../components/card/seriescard";
import {Tabs} from "antd";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Leftminiad from "../../components/leftminiad";
import {useRouter} from "next/router";
import {getSearchCourses, getSeriesCourses} from "../../api/searchApi";
import Searchcoursecard from "../../components/card/searchcoursecard";
import Head from "next/head";


export default function ProviderSearch() {
    //获取路由信息
    const router = useRouter()

    //登陆状态
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)
    }

    //搜索结果个数
    const  [coourseCount,setcoourseCount] = useState(0)

    //系列课程结果数据
    const [data,setData] = useState([])

    //课程结果数据
    const [SearchCourses,setSearchCourses] = useState([])

    //CSR网络请求获取数据
    useEffect(()=>{
        const {kw} = router.query;
        getSeriesCourses(kw).then((result)=>{
            setData(result.data)
            setcoourseCount(result.data.length)
        })
        getSearchCourses(kw).then((result)=>{
                setSearchCourses(result.data)
        })
    },[router.query.category,router.query.kw])

    return (
        <>
            <Head>
                <title>搜索结果</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
                <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }

            <Crumb/>
            <div className={"search-result-big"}>
                <div className={"search-result-middle bx"}>
                    <div className={"search-result-text"}>
                        <span>共有</span>
                        <span>{coourseCount}</span>
                        <span>门包含“</span>
                        <span>{router.query.kw}</span>
                        <span>”的课程</span>
                    </div>
                </div>
            </div>
            <div className={"series-result-big"}>
                <div className={"series-result-middle bx"}>
                    <div className={"series-result-text"}>
                        <span>微专业／系列课程</span>
                        <span>{`（${coourseCount}）`}</span>
                    </div>
                </div>
            </div>
            <div className={"series-result-card-big"}>
                <div className={"series-result-card-middle bx"}>
                    <FlexLayout>
                        {
                            data.map(item => <Searchresultcard data={item} key={item.id} count="column5"/>)
                        }
                    </FlexLayout>
                </div>
            </div>
            <div className={"series-result-tabs-bar bx"}>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="推荐" key="1">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="畅销" key="2">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="全部" key="3">
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="会员专享" key="4">
                    </Tabs.TabPane>
                </Tabs>

            </div>
            <div className={"series-result-tabs-card"}>
                <div className={"series-result-card-middle bx"}>
                    <FlexLayout>
                        {
                            SearchCourses.map(item=><Searchcoursecard data={item} key={item.id} count="column5" is_score/>)
                        }
                    </FlexLayout>
                </div>
            </div>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}
