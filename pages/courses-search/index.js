import FlexLayout from "../../layout/flexLayout";

require("./index.less")
import Crumb from "../../components/crumb";
import Navibar from "../../components/naviBar";
import React, {useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Searchresultcard from "../../components/card/seriescard";
import {Tabs} from "antd";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Leftminiad from "../../components/leftminiad";


export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }
    return (
        <>
                <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }

            <Crumb/>
            <div className={"search-result-big"}>
                <div className={"search-result-middle bx"}>
                    <div className={"search-result-text"}>
                        <span>共有</span>
                        <span>14</span>
                        <span>门包含“</span>
                        <span>撩</span>
                        <span>”的课程</span>
                    </div>
                </div>
            </div>
            <div className={"series-result-big"}>
                <div className={"series-result-middle bx"}>
                    <div className={"series-result-text"}>
                        <span>微专业／系列课程</span>
                        <span>（60）</span>
                    </div>
                </div>
            </div>
            <div className={"series-result-card-big"}>
                <div className={"series-result-card-middle bx"}>
                    <FlexLayout>
                        <Searchresultcard count="column5"/>
                        <Searchresultcard count="column5"/>
                        <Searchresultcard count="column5"/>
                        <Searchresultcard count="column5"/>
                        <Searchresultcard count="column5"/>
                        <Searchresultcard count="column5"/>
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
                        <Searchresultcard count="column5" is_score/>
                        <Searchresultcard count="column5" is_score/>
                        <Searchresultcard count="column5" is_score/>
                        <Searchresultcard count="column5" is_score/>
                        <Searchresultcard count="column5" is_score/>
                        <Searchresultcard count="column5" is_score/>
                    </FlexLayout>
                </div>
            </div>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}
