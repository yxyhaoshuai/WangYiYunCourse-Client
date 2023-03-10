import {BaseURL} from "../../../config/serverConfig";

require("./index.less")

import React, {Component} from "react";

class Coursecard extends Component{
    render(){
        const {data} = this.props;
        return (
            <div className={"course-card"}>
                <div className={"course-card_img"}>
                    <div className={"course-card_img_jpk"}>
                        <img src={BaseURL + data.img_url} alt=""/>
                    </div>

                </div>
                <div className={"course-card_content"}>
                    <div className={"classify-intro"}>
                        <span>自研</span>
                        <span>{data.class_name}</span>
                        <span>{data.course_title}</span>
                    </div>
                    <div className={"course-card_info"}>
                        <div className={"course-time"}>
                            <span>时间：{data.learning_time}</span>
                            <span>4课时</span>
                        </div>
                    </div>
                    <div className={"course-card_teacher"}>
                        导师：
                        <span>{data.name}
        </span>
                    </div>
                    <div className={"buy-info"}>
                        <div className={"buy-info_left"}>
                            <span>已有1人购买</span>
                        </div>
                        <div className={"buy-info_right"}>

                            {
                                data.price===0 ? <span>免费</span> :<span>￥{data.price}</span>
                            }

                        </div>
                    </div>

                </div>
            
            </div>
        )
    }
}
export default Coursecard;

