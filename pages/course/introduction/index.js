import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Fixedfield from "../../../components/fixedfield";
import React, {useEffect, useState} from "react";
import Coursedetailbread from "../../../components/coursedetailbread";
import Coursedetaillayout from "../../../components/coursedetaillayout";
import Coursedetailschool from "../../../components/coursedetailschool";
import Coursedetailschoolconsult from "../../../components/coursedetailschoolconsult";
import Coursedetailbelongingseries from "../../../components/coursedetailbelongingseries";
import Coursedetailcomment from "../../../components/coursedetailcomment";
import Commentcover from "../../../components/commentcover";
import {getCourseIntroduction} from "../../../api/courseIntroduction";
import {getUser} from "../../../api/userApi";
import {useRouter} from "next/router";



export default function ProviderSearch() {
    //获取路由信息
    const router =useRouter()

    const [courseData,setCourseData] = useState([])


    //登陆表单
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }
    // 评论蒙版
    const [showcomment, setshowcomment] = useState(false)
    const _commentShow = () =>{
        setshowcomment(!showcomment)
    }

    //获取课程详情信息
    useEffect(()=>{
        getCourseIntroduction(router.query.id).then((result)=>{
            setCourseData(result.data[0])
        })
    },[router.query])

    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Fixedfield/>
            {/*下面是一个组件到时候封装*/}
            <Coursedetailbread courseData={courseData}/>
            {/*下面是一个组件到时候封装*/}
            <Coursedetaillayout>
                <Coursedetailschool/>
                <Coursedetailschoolconsult/>
                <Coursedetailbelongingseries/>
                <Coursedetailcomment _commentShow={_commentShow}/>
            </Coursedetaillayout>
            <Wangyiyunfooter/>
            {
                showcomment ? <Commentcover _commentShow={_commentShow}/> : ''
            }

        </>
    )
}
