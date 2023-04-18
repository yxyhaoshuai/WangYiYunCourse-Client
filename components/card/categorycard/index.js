import {BaseURL} from "../../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";

class Categorycard extends Component{
    render(){
        const {data} = this.props;
        return (
            <div className={"card column4"}>
                <div className={"top-img"}>
                    <img src={BaseURL + data.img_url} alt=""/>
                </div>
                <div className={"open-card_content_time"}>
                    {
                        data.learning_time
                    }
                </div>
                <div className={"open-card_content_title"}>
                    {
                        data.is_self_innovate === 1? <span>自研</span> : <span></span>
                    }
                    <span>{data.class_name}</span>
                    <span>{data.course_title}</span>
                </div>
                <div className={"open-card_content_teacher"}>
                    <span>{data.name}</span>
                    <span>{data.label}</span>

                </div>
                <div className={"open-card_content_des"}>
                    {data.course_intro}
                </div>
            </div>
        )
    }
}
export default Categorycard;

