require("./index.less")
import React, {Component} from "react";

class Wangyiyunfooter extends Component{
    render(){
        return (
            <div className={"g-ft"}>
                <div className={"yktfoot_wrapper bx"}>
                    <div className={"m-yktfoot_lf"}>
                        <div className={"m-yktfoot_about"}>
                            <a href="#">关于我们</a>
                            <a href="#">联系我们</a>
                            <a href="#">帮助中心</a>
                            <a href="#">中国大学MOOC</a>
                            <a href="#">卡搭编程</a>
                            <a href="#">有道智云</a>
                            <a href="#">有道社招</a>
                            <a href="#"> 有道校招</a>
                            <a href="#"> 廉正举报</a>
                        </div>
                        <div className={"m-yktfoot_copy"}>
                            <span>©1997-2022 网易公司 版权所有</span>
                            <span>粤B2-20090191-18</span>
                            <span>
                                <a className={"special"} href="#">工业和信息化部备案管理系统网站</a>
                            </span>
                        </div>
                        <div className={"m-yktfoot_copy"}>
                            违法和不良信息举报电话（涉未成年人）：0571-89853416 举报邮箱（涉未成年人）：youdao_jubao@rd.netease.com
                            <a className={"special2"} href="https://www.12377.cn/">网上有害信息举报专区</a>
                        </div>
                        <div className={"m-yktfoot_copy"}>监督举报邮箱：jb@rd.netease.com </div>

                    </div>
                    <div className={"m-yktfoot_rt"}>
                        <div className={"m-yktfoot_mobile"}>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                        <div className={"m-yktfoot_share"}>
                            <div className={"follow-me"}>关注我们：</div>

                            <div className={"follow-Wechat"}>
                                <img src="/assets/images/weixin.png" alt=""/>
                                <div className={"follow-operation-pane"}>
                                    <div className={"attention-wechat-account"}>关注云课堂官方微信号</div>
                                    <div className={"intro"}>-领取课程免费福利，超值学习资料-</div>
                                    <div className={"WeChat-QR-code"}>
                                        <img src="/assets/images/WechatQRcode.png"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="/assets/images/weibo.png" alt=""/>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Wangyiyunfooter;

