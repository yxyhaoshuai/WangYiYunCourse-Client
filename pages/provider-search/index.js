import FlexLayout from "../../layout/flexLayout";

require("./index.less")
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Crumb from "../../components/crumb";
import React, {useState} from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Leftminiad from "../../components/leftminiad";
import Fixedfield from "../../components/fixedfield";
import Searchresultcard from "../../components/card/seriescard";
import Searchschool from "../../components/searchschool";

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
                        <span>个包含“</span>
                        <span>撩</span>
                        <span>”的课程提供方</span>
                    </div>
                </div>
            </div>
            <Searchschool/>
            <Searchschool/>
            <Searchschool/>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}
