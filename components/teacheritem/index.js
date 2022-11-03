require("./index.less")
import React, {Component} from "react";

class Teacheritem extends Component{
    render(){
        return (
            <div className={"teacheritem"}>
                <div className={"live-card"}>
                    <div className={"live-card_avatar"}>
                        <img src="assets/images/liveteacherhead.png"/>
                    </div>
                    <div className={"live-card_content"}>
                        <div className={"live-card_content_head"}>
                            <span className={"live-card_content_head_time"}>11月10日 20:00</span>
                            <span className={"live-card_content_head_remind"}>开启提醒</span>
                        </div>
                        <div className={"live-card_content_title"}>管弦乐的情绪表达</div>
                        <div className={"live-card_content_des"}>绍弦老师 职业音乐制作人</div>
                    </div>

                </div>

            
            </div>
        )
    }
}
export default Teacheritem;



