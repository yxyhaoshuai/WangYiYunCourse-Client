import Navibar from "../../components/naviBar";

require("./index.less")
import {Breadcrumb, Rate} from "antd";
import Coverlogin from "../../components/coverlogin";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Fixedfield from "../../components/fixedfield";
import {useState} from "react";
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
            <div className={"course-intro"}>
                <div className={"course-intro-bread bx"}>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="">首页</Breadcrumb.Item>
                        <Breadcrumb.Item href="">编程开发</Breadcrumb.Item>
                        <Breadcrumb.Item href="">IT互联网</Breadcrumb.Item>
                        <Breadcrumb.Item href="">后端开发</Breadcrumb.Item>
                        <Breadcrumb.Item> 课程详情</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={"course-intro-card"}>
                    <div className={"img-content"}>
                        <div className={"img"}>
                            <img src="/assets/images/coursedetail.png" alt=""/>

                        </div>
                        <div className={"content"}>
                            <div className={"course-title"}>
                                <div className={"course-title-text"}>
                                    撩课-Python-爬虫系列-网络剖析
                                </div>
                                <div className={"share"}>
                                    <a href="#" className={"iconfont"}>&#xe62f;</a>

                                </div>
                                <div className={"collect"}>
                                    <a href="#" className={"iconfont"}>&#xe666;</a>
                                </div>
                            </div>
                            <div className={"about-user-teacher"}>
                                <div className={"user-count"}>
                                    376人学过
                                </div>
                                <div className={"score"}>
                                    <Rate disabled defaultValue={4.5} />;

                                </div>
                                <div className={"teacher-name"}>
                                    讲师：王顺子
                                </div>
                            </div>
                            <div className={"price"}>
                                讲师：王顺子

                            </div>
                            <div className={"coupon"}>
                                <a href="#">【福利】送80元购课通用红包></a>

                            </div>
                            <div className={"three-button"}>
                                <div className={"join-button"}>
                                    立即参加

                                </div>
                                <div className={"try-and-see"}>
                                    免费试看

                                </div>
                                <div className={"join-cart"}>
                                    <span className={"iconfont"}>&#xe6d5;</span>
                                    <span>加入购物车</span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className={"bar-button"}>
                        <div className={"bar-button-intro"}>
                            介绍
                        </div>
                        <div className={"bar-button-item"}>
                            目录
                        </div>

                    </div>

                </div>

            </div>
            <Wangyiyunfooter/>
        </>
    )
}