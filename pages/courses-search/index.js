import FlexLayout from "../../layout/flexLayout";

require("./index.less")
import Crumb from "../../components/crumb";
import Navibar from "../../components/naviBar";
import React, {useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Seriescard from "../../components/card/seriescard";


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
                        <Seriescard/>
                        <Seriescard/>
                        <Seriescard/>
                        <Seriescard/>
                        <Seriescard/>
                        <Seriescard/>
                    </FlexLayout>
                </div>
            </div>
        </>
    )
}
