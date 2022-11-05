require("./index.less")

import React, {Component} from "react";

class Gratiscoursecard extends Component{
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
                        Python接口自动化测试实战
                    </div>
                    <div className={"course-card_info"}>
                        <div className={"course-time"}>
                            <span>时间：2022-10-26 20:00:00</span>
                        </div>
                    </div>
                    <div className={"course-card_teacher"}>
                        导师：
                        <span>方舟
        </span>
                    </div>
                    <div className={"excellent-buy-info"}>
                        <div className={"excellent-buy-info_right"}>
                            <span></span>
                            <span>免费</span>
                        </div>
                    </div>

                </div>
            
            </div>
        )
    }
}
export default Gratiscoursecard;

