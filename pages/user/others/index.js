import React, {useEffect, useState} from "react";
import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Leftminiad from "../../../components/leftminiad";
import Fixedfield from "../../../components/fixedfield";
import {useRouter} from "next/router";
import {getOtherData} from "../../../api/userApi";
import Userpagesother from "../../../components/userpagesother";
import Head from "next/head";


export default function ProviderSearch() {
    const router = useRouter();
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)
    }

    const [userData,setUserData] = useState({})


    useEffect(()=>{
        if (router.query.id !== undefined){
            getOtherData(router.query.id).then((result)=>{
                setUserData(result.data[0])
            })
        }
    },[router.query.id])

    return (
        <>
            <Head>
                <title>{userData.nick_name === undefined ? "加载中...": `${userData.nick_name}的主页`}</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Userpagesother userData={userData}/>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}