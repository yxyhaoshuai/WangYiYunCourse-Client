import Navibar from "../../components/naviBar";

require("./index.less")

import React, {useEffect, useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Fixedfield from "../../components/fixedfield";
import Leftminiad from "../../components/leftminiad";
import {Breadcrumb} from "antd";
import FlexLayout from "../../layout/flexLayout";
import Livestreamingcard from "../../components/card/livestreamingcard";
import {getAllOpenCourseList} from "../../api/talkApi";


export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () => {
        setshowCoverLogin(!showCoverLogin)
    }
    const [openCourseList, setOpenCourseList] = useState([])

    useEffect(() => {
        getAllOpenCourseList().then((result) => {
            setOpenCourseList(result.data)
        })
    }, [])

    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            {/*面包屑组件*/}
            <div className={"bread-crumb-div"}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="/">首页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>全部公开课</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {/*卡片列表*/}
            <div className={"open-course-list-div"}>
                <FlexLayout>
                    {/*这里是卡片*/}
                    {
                        openCourseList.map((item) => {
                            return <div key={item.courseid} className={"column4"}>
                                <Livestreamingcard data={item}/>
                            </div>
                        })
                    }
                </FlexLayout>
            </div>
            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>
        </>
    )
}

