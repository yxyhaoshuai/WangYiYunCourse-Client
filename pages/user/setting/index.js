require("./index.less")
import React, {useState} from "react";
import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Leftminiad from "../../../components/leftminiad";
import Fixedfield from "../../../components/fixedfield";
import Usersettingaddress from "../../../components/usersettingaddress";
import Usersettingform from "../../../components/usersettingbasic"



export default function ProviderSearch() {
    const[settingshow,setsettingshow] = useState(true)

    const [settingstyle,setsettingstyle] =useState(true)

    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }
    const _setsettingshow = () => {
        setsettingshow(!settingshow)
        setsettingstyle(!settingstyle)

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
                    <div onClick={_setsettingshow} className={settingstyle ? "get-focus": "not-get-focus"}>
                            资料设置
                    </div>
                    <div onClick={_setsettingshow} className={settingstyle ? "not-get-focus": "get-focus"}>
                            收货地址设置
                    </div>
                </div>

                {
                    settingshow ? <Usersettingform/>:<Usersettingaddress/>
                }








            </div>
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}