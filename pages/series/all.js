require("./index.less")
import {Pagination} from "antd";
import React, {useState} from "react";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Fixedfield from "../../components/fixedfield";
import Leftminiad from "../../components/leftminiad";
import FlexLayout from "../../layout/flexLayout";


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
            <div className={"m-top"}>
                <div className={"g-flow bx"}>
                    <div className={"g-flow-title"}>
                        系列课程
                    </div>
                </div>
            </div>
            <div className={"series-list bx"}>
                <FlexLayout>
                    <div className={"series-card column3-special"}>
                        <div className={"series-card-img"}>
                            <a href="#">
                                <img src="/assets/images/seriesCourses.png" alt=""/>
                            </a>
                        </div>
                        <div className={"series-card-title"}>
                            <a href="#">
                                Python零基础到高薪就业
                            </a>
                        </div>
                        <div className={"series-card-intro"}>
                            本套餐专项帮小白学习相机摄影，夯实基础，实战应用。本套餐涵盖2门基础课：《叶梓摄影入门课》、《修图达人速成课》与1门进阶课：《星轨摄影》。
                        </div>
                    </div>
                    <div className={"series-card column3-special"}>
                        <div className={"series-card-img"}>
                            <a href="#">
                                <img src="/assets/images/seriesCourses.png" alt=""/>
                            </a>
                        </div>
                        <div className={"series-card-title"}>
                            <a href="#">
                                Python零基础到高薪就业
                            </a>


                        </div>
                        <div className={"series-card-intro"}>
                            本套餐专项帮小白学习相机摄影，夯实基础，实战应用。本套餐涵盖2门基础课：《叶梓摄影入门课》、《修图达人速成课》与1门进阶课：《星轨摄影》。
                        </div>

                    </div>
                    <div className={"series-card column3-special"}>
                        <div className={"series-card-img"}>
                            <a href="#">
                                <img src="/assets/images/seriesCourses.png" alt=""/>
                            </a>
                        </div>
                        <div className={"series-card-title"}>
                            <a href="#">
                                Python零基础到高薪就业
                            </a>


                        </div>
                        <div className={"series-card-intro"}>
                            本套餐专项帮小白学习相机摄影，夯实基础，实战应用。本套餐涵盖2门基础课：《叶梓摄影入门课》、《修图达人速成课》与1门进阶课：《星轨摄影》。
                        </div>

                    </div>
                    <div className={"series-card column3-special"}>
                        <div className={"series-card-img"}>
                            <a href="#">
                                <img src="/assets/images/seriesCourses.png" alt=""/>
                            </a>
                        </div>
                        <div className={"series-card-title"}>
                            <a href="#">
                                Python零基础到高薪就业
                            </a>


                        </div>
                        <div className={"series-card-intro"}>
                            本套餐专项帮小白学习相机摄影，夯实基础，实战应用。本套餐涵盖2门基础课：《叶梓摄影入门课》、《修图达人速成课》与1门进阶课：《星轨摄影》。
                        </div>

                    </div>
                    <div className={"series-card column3-special"}>
                        <div className={"series-card-img"}>
                            <a href="#">
                                <img src="/assets/images/seriesCourses.png" alt=""/>
                            </a>
                        </div>
                        <div className={"series-card-title"}>
                            <a href="#">
                                Python零基础到高薪就业
                            </a>


                        </div>
                        <div className={"series-card-intro"}>
                            本套餐专项帮小白学习相机摄影，夯实基础，实战应用。本套餐涵盖2门基础课：《叶梓摄影入门课》、《修图达人速成课》与1门进阶课：《星轨摄影》。
                        </div>

                    </div>
                </FlexLayout>
                <div className={"pagination-bottom"}>
                    <Pagination size="small" total={90} showSizeChanger={false}/>
                </div>
            </div>
            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>
        </>
    )
}