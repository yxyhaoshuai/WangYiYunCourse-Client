import Navibar from "../../components/naviBar";
import React, {useEffect, useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Leftminiad from "../../components/leftminiad";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import {Tabs} from "antd";

import ProviderCourse from "../../components/providerCourse";
import ProviderCourse2 from "../../components/providerCourse2";
import {getTeacherCourseName} from "../../api/instructorApi";
import {useRouter} from "next/router";
import Head from "next/head";

require("./index.less")

export default function ProviderSearch() {
    const router = useRouter()

    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const [teacherName,setTeacherName] = useState("")

    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin);
    }


    useEffect(()=>{
        if (router.query.id !== undefined){
            getTeacherCourseName(router.query.id).then((result)=>{
                setTeacherName(result.data[0].name)
            })
        }
    },[router.query])




    return (
        <>
            <Head>
                <title>{teacherName.length === 0 ? "加载中..." : `讲师：${teacherName}` }</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }

            <div className={"ux-provider-info-bar"}>
                <div className={"ux-provider-info-bar-bx"}>
                    <Tabs
                        defaultActiveKey="1"
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
