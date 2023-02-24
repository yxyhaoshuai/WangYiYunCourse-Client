require("./index.less")
import React, {Component} from "react";

class Userpages extends Component{
    render(){
        return (
            <div className={"user-pages-bx"}>
                <div className={"user-background"}>
                    <div className={"user-background-bx bx"}>
                        <div className={"ux-user-info-top_img"}>
                            <img src="/assets/images/user-img.png" alt=""/>
                            <div className={"crown"}></div>
                        </div>
                        <div className={"user-name"}>
                            <span>大大秀哥</span>

                        </div>
                        <div className={"user-intro"}>
                            <span>我爱学习</span>
                            <a href="#"><span>编辑我的资料</span></a>


                        </div>
                        <div className={"data-card"}>
                            <a className={"iconfont-button-a"} href="#">
                                <span className={"iconfont-button iconfont"}>&#xe622; 生成资料卡片</span>
                            </a>

                            <a className={"why"} href="#">
                                <span>学习登记卡是什么？</span>
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

