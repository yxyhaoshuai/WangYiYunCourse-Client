import {BaseURL} from "../../../config/serverConfig";

require("./index.less")

import React, {Component} from "react";
import LazyLoadImage from "../../lazyLoadImage/LazyLoadImage";

class Gratiscoursecard extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className={"course-card"}>
                <a href={"/course/introduction?id=" + data.courseid}>
                    <div className={"course-card_img"}>
                        <div className={"course-card_img_jpk"}>
                            <LazyLoadImage src={BaseURL + data.img_url}/>
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
                            <div className={"excellent-buy-info_right"}>
                                <span></span>
                                {
                                    data.price === 0 ?
                                        <>
                                            <span className={"one"}></span>
                                            <span className={"two"}>免费</span>
                                        </>
                                        :
                                        <>
                                            <span className={"one"}>￥</span>
                                            <span className={"two"}>{data.price}</span>
                                        </>
                                }

                            </div>
                        </div>

                    </div>
                </a>
            </div>
        )
    }
}

export default Gratiscoursecard;

