import {BaseURL} from "../../../config/serverConfig";

require("./index.less")

import React, {Component} from "react";
import LazyLoadImage from "../../lazyLoadImage/LazyLoadImage";

class Excellentcoursecard extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className={"course-card"}>
                <a href={"/course/introduction?id=" + data.courseid}>
                    <div className={"course-card_img"}>
                        <div className={"course-card_img_jpk"}>
                            <LazyLoadImage src={BaseURL + `${data.img_url}`}/>
                        </div>

                    </div>
                    <div className={"course-card_content"}>
                        <div className={"classify-intro"}>
                            {data.course_title}
                        </div>
                        <div className={"course-card_info"}>
                            <div className={"course-time"}>
                                <span>时间：{data.learning_time}</span>
                            </div>
                        </div>
                        <div className={"course-card_teacher"}>
                            导师：
                            <span>{data.name}
        </span>
                        </div>
                        <div className={"excellent-buy-info"}>
                            <div className={"excellent-buy-info_left"}>
                                <span>券后价￥99</span>
                            </div>
                            <div className={"excellent-buy-info_right"}>

                                {
                                    data.price === 0 ? <><span></span><span>免费</span></> : <>
                                        <span>￥</span><span>{data.price}</span></>
                                }
                            </div>
                        </div>

                    </div>
                </a>
            </div>
        )
    }
}

export default Excellentcoursecard;

