import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import React, {useState} from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Fixedfield from "../../components/fixedfield";
import Orderlayout from "../../components/orderlayout";
import Orderitem from "../../components/orderitem";
import Orderprice from "../../components/orderprice";

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
            <Orderlayout>
                <Orderitem/>
                <Orderitem/>
                <Orderitem/>
            </Orderlayout>
            <Orderprice/>
            <Wangyiyunfooter/>
            <Fixedfield/>
        </>
    )
}