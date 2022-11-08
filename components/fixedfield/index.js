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
                    <a href="#">
                        <img src="assets/images/fixedimg.png" alt=""/>
                    </a>
                </div>
                <div className={"side-service-item-box"}>
                    <div className={"side-service-item-one"}>
                        <div className={"text-content"}>
                            <a href="#">
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
                                        <img src="assets/images/appDownloadQRCode.png" alt=""/>
                                    </div>
                                    <div className={"text"}>
                                        下载App
                                    </div>
                                </div>
                                <div className={"qrcode-content"}>
                                    <div className={"img"}>
                                        <img src="assets/images/WechatQRcode.png" alt=""/>
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
                    <img src="assets/images/24gf-headset.png" alt=""/>

                </div>
                <div className={"icon-side-service-item-box-two"}>
                    <img src="assets/images/ipad.png" alt=""/>
                </div>
                <div className={"icon-side-service-item-box-three"}>
                    <img src="assets/images/uparrow.png" alt=""/>

                </div>
            </div>
        )
    }
}
export default Fixedfield;

