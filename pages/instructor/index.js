import Navibar from "../../components/naviBar";
import React, {useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Leftminiad from "../../components/leftminiad";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import {Tabs} from "antd";

import ProviderCourse from "../../components/providerCourse";
import ProviderCourse2 from "../../components/providerCourse2";

require("./index.less")

export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin);
    }

    const tabsOnChange = (e)=>{
        console.log(e)
    }
    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }

            <div className={"ux-provider-info-bar"}>
                <div className={"ux-provider-info-bar-bx"}>
                    <Tabs
                        defaultActiveKey="1"
                        onChange={tabsOnChange}
                        items={[
                            {
                                label: `在线课程`,
                                key: '1',
                            }
                        ]}
                    />
                </div>
            </div>

            {/*#############课程###########*/}
            {/*下面这个可以随便改里面的东西*/}
            <ProviderCourse2/>

            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>

        </>
    )
}
