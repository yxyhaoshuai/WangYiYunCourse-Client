import Settingspageslayout from "../../../components/settingspageslayout";
import React, {useState} from "react";
import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Leftminiad from "../../../components/leftminiad";
import Fixedfield from "../../../components/fixedfield";
import Head from "next/head";


export default function ProviderSearch() {


    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }


    return (
        <>
            <Head>
                <title>设置我的信息</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Settingspageslayout/>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}