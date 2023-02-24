import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Leftminiad from "../../../components/leftminiad";
import Fixedfield from "../../../components/fixedfield";
import React, {useState} from "react";
import Coursedetailbread from "../../../components/coursedetailbread";
import Coursedetailschool from "../../../components/coursedetailschool";
import Coursedetailschoolconsult from "../../../components/coursedetailschoolconsult";
import Coursedetailbelongingseries from "../../../components/coursedetailbelongingseries";
import Coursedetailcomment from "../../../components/coursedetailcomment";
import Coursedetaillayout from "../../../components/coursedetaillayout";
import Commentcover from "../../../components/commentcover";
import Progressbar from "../../../components/progressbar";

require("./index.less")
export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }


    // 评论蒙版
    const [showcomment, setshowcomment] = useState(false)
    const _commentShow = () =>{
        setshowcomment(!showcomment)


    }
    return (
        <>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            {/*courseMain界面就传true，introduction就传false*/}
            <Coursedetailbread ismystudy={true}/>
            <Progressbar total={120} count={10}/>
            <Coursedetaillayout>
                <Coursedetailschool/>
                <Coursedetailschoolconsult/>
                <Coursedetailbelongingseries/>
                <Coursedetailcomment _commentShow={_commentShow}/>
            </Coursedetaillayout>
            {
                showcomment ? <Commentcover _commentShow={_commentShow}/> : ''
            }
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}