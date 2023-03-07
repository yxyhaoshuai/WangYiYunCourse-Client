import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";

class Teacheritem extends Component{
    render(){
        const {data} = this.props;
        return (
            <div className={"teacheritem"}>
                <div className={"live-card"}>
                    <div className={"live-card_avatar"}>
                        <img src={BaseURL+data.header_url}/>
                    </div>
                    <div className={"live-card_content"}>
                        <div className={"live-card_content_head"}>
                            <span className={"live-card_content_head_time"}>{data.learning_time}</span>
                            <span className={"live-card_content_head_remind"}>开启提醒</span>
                        </div>
                        <div className={"live-card_content_title"}>{data.course_title}</div>
                        <div className={"live-card_content_des"}>{data.course_intro}</div>
                    </div>

                </div>

            
            </div>
        )
    }
}
export default Teacheritem;



