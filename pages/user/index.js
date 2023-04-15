import React, {useEffect, useState} from "react";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Leftminiad from "../../components/leftminiad";
import Fixedfield from "../../components/fixedfield";
import Userpages from "../../components/userpages";
import {useRouter} from "next/router";
import {getUser} from "../../api/userApi";


export default function ProviderSearch() {
    const router = useRouter()
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)
    }

    const [userData,setUserData] = useState({})


    useEffect(()=>{
        getUser().then((result)=>{
            setUserData(result)
        })
    },[])

    return (
        <>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Userpages userData={userData}/>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}