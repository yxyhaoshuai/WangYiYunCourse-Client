import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import {useState} from "react";
import Messagetabitem from "../../components/messagetabitem";
import Head from "next/head";

export default function ProviderSearch() {
    //登陆表单
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }

    return (
        <>
            <Head>
                <title>平台通知</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Fixedfield/>
            <Messagetabitem/>
            <Wangyiyunfooter/>
        </>

    )
}