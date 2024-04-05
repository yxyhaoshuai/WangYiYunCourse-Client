import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";
import {globalMessage} from "../../tools/globalMessage";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

class Userpages extends Component{
    render(){
        const {userData} = this.props;
        return (
            <div className={"user-pages-bx"}>
                <div className={"user-background"}>
                    <div className={"user-background-bx bx"}>
                        <div className={"ux-user-info-top_img"}>
                            <LazyLoadImage src={BaseURL + userData.header_url}/>
                            <div className={"crown"}></div>
                        </div>
                        <div className={"user-name"}>
                            <span>{userData.nick_name}</span>

                        </div>
                        <div className={"user-intro"}>
                            <span>{userData.intro}</span>
                        </div>
                        <div className={"data-card"}>
                            <a className={"iconfont-button-a"} href="#">
                                <span onClick={()=>{globalMessage("warning","这个功能未开发！")}} className={"iconfont-button iconfont"}>&#xe622; 生成资料卡片</span>
                            </a>

                            <a className={"why"} href="#">
                                <span onClick={()=>{globalMessage("warning","这个功能未开发！")}}>学习登记卡是什么？</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"light bx"}>
                    <img src="/assets/images/light.png" alt=""/>
                </div>
            </div>
        )
    }
}
export default Userpages;

