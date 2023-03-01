require("./index.less")
import React, {Component} from "react";

class Categorycard extends Component{
    render(){
        return (
            <div className={"card column4"}>
                <div className={"top-img"}>
                    <img src="/assets/images/aaaa.png" alt=""/>
                </div>
                <div className={"open-card_content_time"}>
                    3月3日 20:00
                </div>
                <div className={"open-card_content_title"}>
                    <span>自研</span>
                    <span>有道英语</span>
                    <span>【速言日语】从零轻松玩转日语听说</span>
                </div>
                <div className={"open-card_content_teacher"}>
                    <span>唐矛</span>
                    <span>日系暖男</span>

                </div>
                <div className={"open-card_content_des"}>
                    日系暖男带你玩转日语听说
                </div>
            </div>
        )
    }
}
export default Categorycard;

