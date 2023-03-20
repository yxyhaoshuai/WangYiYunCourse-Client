//引入样式
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {message} from "antd";
import Link from "next/link";

require("./index.less")

export default function Navibar(props){

    //登录逻辑
    const _loginShow = props._loginShow;

    //获取路由信息
    const router = useRouter()
    const {category="course",kw=""} = router.query;

    const [kwV,setKwV] = useState(kw)
    const [categoryV,setCategoryV] = useState(category)

    //输入框为空时的提示

    const info = () => {
        message.info({
            content: '输入框不能为空！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };



    useEffect(()=>{
        setCategoryV(category)
        setKwV(kw)

    },[category,kw])

    const isNull = (e)=>{
        if (kwV.length === 0 ){
            e.preventDefault()
            info()
        }

    }


    return(
        <div className={"nav bx"}>
            <div className={"nav-bar"}>
                <div className={"nav-bar-middle"}>
                    <div className={"nav-bar-middle-logo"}>
                        <a href={"http://localhost:3000/"}>
                            <img src={"/assets/images/logo.png"}/>
                        </a>
                    </div>
                    <form className={"nav-search"} action="/courses-search">
                        <div className={"nav-bar-middle-search"}>
                            <div className={"nav-bar-middle-search-type"}>
                                <label>
                                    <select name={"category"} value={categoryV} onChange={(e)=>{
                                        setCategoryV(e.target.value)
                                    }}>
                                        <option value={"course"}>课程</option>
                                        <option value={"network-school"}>网校</option>
                                    </select>
                                </label>
                            </div>
                            <div className={"nav-bar-middle-search-input"}>
                                <input type="text" className="j-input" name={"kw"} placeholder={"请输入关键字"} value={kwV} onChange={(e)=>{
                                    setKwV(e.target.value)
                                }}/>
                            </div>

                            <div className={"nav-bar-middle-search-button"}>
                                <input onClick={isNull} className={"button"} type="submit" value="搜索"/>
                            </div>


                        </div>
                    </form>
                    <div className={"nav-bar-middle-right"}>
                        <div className={"downloadApp"}>
                            <div className={"iconfont-downloadPane"}>
                                <span className={"iconfont"}>&#xe608;</span>
                                <div className={"download-operation-pane"}>
                                    <div className={"imgDiv"}>
                                        <img src={"/assets/images/appDownloadQRCode.png"}/>
                                        <div className={"rightDownloadSrc"}>
                                            <div className={"downloadText"}>扫码下载官方App</div>
                                            <div className={"iosDownloadlink"}>
                                                <img src={"/assets/images/appDownloadAndroidAndIos.png"}/>
                                            </div>
                                            <div className={"androidDownloadlink"}>
                                                <img src={"/assets/images/appDownloadAndroidAndIos.png"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"fuLi"}>
                            <div className={"iconfont-fuliPane"}>
                                <span className={"iconfont"}>&#xe68e;</span>
                                <div className={"fuli-operation-pane"}>
                                    <div className={"attention-wechat-account"}>关注云课堂官方微信号</div>
                                    <div className={"intro"}>-领取课程免费福利，超值学习资料-</div>
                                    <div className={"WeChat-QR-code"}>
                                        <img src="/assets/images/WechatQRcode.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"gouWuChe"}>
                            <Link href={{
                                pathname:"/cart"
                            }} >
                                <a className={"iconfont"}>&#xe73d;</a>
                            </Link>
                        </div>
                        <div className={"xiaoXi"}>
                            <a href="#" className={"iconfont"}>&#xe625;</a>
                        </div>
                        <div className={"VipWeDengLu"}>
                            <div className={"VipWeDengLu-mini"}>
                                <div className={"vip-mystudy-div"}>
                                    <div className={"vip"}>
                                        <a href="#">会员中心</a>
                                    </div>
                                    <div className={"mystudy"}>
                                        <a href="#">我的学习</a>
                                    </div>
                                </div>
                                <div className={"login"}>
                                    <div className={"login-register"} onClick={_loginShow}>
                                        <a href="#">登录/注册</a>
                                    </div>
                                    <div className={"user-head"}>
                                        <img src={"/assets/images/userInitHead.png"}/>
                                        <div className={"operation-pane"}>
                                            <ul className={"user-navuser-menu"}>
                                                <li onClick={_loginShow}>游客,请登录...</li>
                                                <li>
                                                    <a href={"#"}>
                                                        我的优惠卷
                                                        <span>兑换</span>
                                                    </a>

                                                </li>
                                                <li>
                                                    <a href={"#"}>我的订单</a></li>
                                                <li>
                                                    <a href={"#"}>帮助与反馈</a></li>
                                                <li>
                                                    <a href={"#"}>设置</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}