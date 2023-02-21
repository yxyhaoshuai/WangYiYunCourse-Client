import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import React, {useState} from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Pagebx from "../../components/pagebx";
import Mycart from "../../components/mycart";

export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }


    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Fixedfield/>

            <Pagebx>
                <Mycart/>
            </Pagebx>
            <Wangyiyunfooter/>
        </>
    )
}

