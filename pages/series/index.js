import Seriesimg from "../../components/seriesimg";
import React, {useState} from "react";
import Seriesbar from "../../components/seriesbar";
import Seriescourseitem from "../../components/seriescourseitem";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Leftminiad from "../../components/leftminiad";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";

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
            <Seriesimg/>
            <Seriesbar/>

            <Seriescourseitem/>
            <Seriescourseitem/>
            <Seriescourseitem/>
            <Seriescourseitem/>

            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}