import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";

class Mypagecard extends Component{
    render(){
        const data = this.props.data;
        return (
            <div className={"mystudy-course-card column4"}>
                <div className={"mystudy-course-card-header"}>
                    <img src={BaseURL + data.img_url} alt=""/>
                    <div className={"cover-tag"}>
                        随到随学
                    </div>
                    <div className={"course-top"}>
                        置顶

                    </div>

                </div>
                <div className={"mystudy-course-card-title"}>
                    <div className={"course-title"}>{data.course_title}</div>
                    <div className={"course-study-count"}>
                        <span>已学习</span>
                        <span>76</span>
                        <span>/168 课时</span>
                    </div>

                </div>
                <div className={"mystudy-course-card-footer"}>
                    进入学习
                </div>
            </div>
        )
    }
}
export default Mypagecard;

