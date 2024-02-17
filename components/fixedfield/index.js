require("./index.less")
import React, {Component} from "react";

class Fixedfield extends Component{
    _handleScroll=()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    render(){
        return (

            <div className={"fixed-field"}>
                <div className={"global-promotion-item"}>
                    <a href="https://ke.study.163.com/course/detail/100130446?inLoc=web_sy_ycxf">
                        <img src="/assets/images/fixedimg.png" alt=""/>
                    </a>
                </div>
                <div className={"side-service-item-box"}>
                    <div className={"side-service-item-one"}>
                        <div className={"text-content"}>
                            <a href="https://qiyukf.com/client?k=9e92dd37f92a04529e8352810328d088&u=1684325696025&d=1684326358764&uuid=hbqf9m05mul8izg2twqb&gid=0&sid=0&qtype=0&welcomeTemplateId=0&dvctimer=0&robotShuntSwitch=1&hc=0&robotId=5212182&pageId=168432569747912tKXpaftg&shuntId=0&ctm=MTY4NDMyNTY5NjAyNS0tMTY4NDMyNjQ2ODE2Mg%3D%3D&wxwId=&language=&isShowBack=0&shortcutTemplateId=&t=%25E7%25BD%2591%25E6%2598%2593%25E4%25BA%2591%25E8%25AF%25BE%25E5%25A0%2582%2520-%2520%25E6%2582%2584%25E6%2582%2584%25E5%258F%2598%25E5%25BC%25BA%25E5%25A4%25A7">
                                <span>在线咨询</span>
                            </a>

                        </div>
                    </div>
                    <div className={"side-service-item-tow"}>
                        <div className={"text-content"}>
                            <span>手机课堂</span>
                        </div>
                        <div className={"qrcode-box"}>
                            <div className={"qrcode"}>
                                <div className={"qrcode-content"}>
                                    <div className={"img"}>
                                        <img src="/assets/images/appDownloadQRCode.png" alt=""/>
                                    </div>
                                    <div className={"text"}>
                                        下载App
                                    </div>
                                </div>
                                <div className={"qrcode-content"}>
                                    <div className={"img"}>
                                        <img src="/assets/images/WechatQRcode.jpg" alt=""/>
                                    </div>
                                    <div className={"text"}>
                                        关注微信
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div onClick={this._handleScroll} className={"side-service-item-three"}>
                        <div className={"text-content"}>
                            <span>返回顶部</span>
                        </div>

                    </div>
                </div>
                <div className={"icon-side-service-item-box"}>
                    <img src="/assets/images/24gf-headset.png" alt=""/>

                </div>
                <div className={"icon-side-service-item-box-two"}>
                    <img src="/assets/images/ipad.png" alt=""/>
                </div>
                <div className={"icon-side-service-item-box-three"}>
                    <img src="/assets/images/uparrow.png" alt=""/>

                </div>
            </div>
        )
    }
}
export default Fixedfield;

