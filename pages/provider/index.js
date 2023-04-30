import Navibar from "../../components/naviBar";
import React, {useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Leftminiad from "../../components/leftminiad";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import {Tabs} from "antd";

import ProviderHome from "../../components/ProviderHome";
import ProviderCourse from "../../components/providerCourse";
import ProviderTeacher from "../../components/providerTeacher";
import ProviderAbout from "../../components/ProviderAbout";
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

            {/*111111111111*/}
            <div className={"ux-provider-info"}>
                <div className={"ux-provider-info-bx bx"}>
                    <div className={"ux-provider-info-left"}>
                        <img src="/assets/images/provider-head.png" alt=""/>
                    </div>
                    <div className={"ux-provider-info-center"}>
                        <p>
                            <span>动力节点Java培训</span>
                            <span className={"iconfont"}>&#xe6f3;</span>
                        </p>
                        <p>北京动力节点教育科技有限公司</p>
                    </div>
                    <div className={"ux-provider-info-right"}>
                        <span className={"iconfont"}>&#xe882;</span>
                        <span>服务咨询</span>
                    </div>
                </div>
            </div>

            {/*22222222222222*/}
            <div className={"ux-provider-info-bar"}>
                <div className={"ux-provider-info-bar-bx"}>
                    <Tabs
                        defaultActiveKey="1"
                        onChange={tabsOnChange}
                        items={[
                            {
                                label: `主页`,
                                key: '1',
                            },
                            {
                                label: `课程`,
                                key: '2',
                            },
                            {
                                label: `讲师`,
                                key: '3',
                            },
                            {
                                label: `关于我`,
                                key: '4',
                            }
                        ]}
                    />
                </div>
            </div>

            {/*#############主页###########*/}
            {/*<ProviderHome/>*/}

            {/*#############课程###########*/}
            {/*<ProviderCourse/>*/}


            {/*#############讲师###########*/}
            {/*<ProviderTeacher/>*/}

            {/*#############关于我###########*/}
            <ProviderAbout/>




            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>

        </>
    )
}
