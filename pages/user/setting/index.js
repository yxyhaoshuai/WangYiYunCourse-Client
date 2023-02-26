import Usersettingform from "../../../components/usersettingbasic";

require("./index.less")
import React, {useState} from "react";
import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Leftminiad from "../../../components/leftminiad";
import Fixedfield from "../../../components/fixedfield";
import {Button} from "antd";



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
            <div className={"settings bx"}>
                <div className={"tabs-bar"}>

                    {/*not-get-focus没有获取焦点的样式，get-focus是获取焦点的样式*/}
                    <div className={"get-focus"}>
                        <a href="#">资料设置</a>
                    </div>
                    <div className={"not-get-focus"}>
                        <a href="#">收货地址设置</a>
                    </div>
                </div>
                <div className={"complete-information"}>
                    完善个人资料是让别人认识你的第一步
                </div>
                <div className={"submit-form"}>
                    <div className={"top-div"}>
                        <Usersettingform/>
                    </div>
                    <div className={"bottom-div"}>
                        <Button className={"save-button"} type="primary">保存</Button>
                    </div>

                </div>

            </div>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}