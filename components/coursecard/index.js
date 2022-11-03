require("./index.less")

import React, {Component} from "react";

class Coursecard extends Component{
    render(){
        return (
            <div className={"course-card"}>
                <div className={"course-card_img"}>
                    <div className={"course-card_img_jpk"}>
                        <img src="assets/images/courseteacherimg.png" alt=""/>
                    </div>

                </div>
                <div className={"course-card_content"}>
                    <div className={"classify-intro"}>
                        <span>自研</span>
                        <span>有道英语</span>
                        <span>"看连续剧"躺刷4500高频词</span>
                    </div>
                    <div className={"course-card_info"}>
                        <div className={"course-time"}>
                            <span>时间：2022-10-26 20:00:00</span>
                            <span>4课时</span>
                        </div>
                    </div>
                    <div className={"course-card_teacher"}>
                        导师：
                        <span>方舟
        </span>
                    </div>
                    <div className={"buy-info"}>
                        <div className={"buy-info_left"}>
                            <span>已有1人购买</span>
                        </div>
                        <div className={"buy-info_right"}>
                            <span>免费</span>
                        </div>
                    </div>

                </div>
            
            </div>
        )
    }
}
export default Coursecard;

