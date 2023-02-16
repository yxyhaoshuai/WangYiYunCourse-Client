import Navibar from "../../../components/naviBar";

import {Breadcrumb, Rate} from "antd";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Fixedfield from "../../../components/fixedfield";
import {useState} from "react";
import Coursedetailbread from "../../../components/coursedetailbread";
import Coursedetaillayout from "../../../components/coursedetaillayout";


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
            {/*下面是一个组件到时候封装*/}
            <Coursedetailbread/>
            {/*下面是一个组件到时候封装*/}
            <Coursedetaillayout/>
            <Wangyiyunfooter/>
        </>
    )
}
