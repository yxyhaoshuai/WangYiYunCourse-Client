require("./index.less")
import React, {Component} from "react";

class Killcard extends Component{
    render(){
        return (
            <div className={"ux-sec-kill-card"}>
                <a href="#">
                    <div className={"top"}>
                        <img src="assets/images/killcard.png"/>
                    </div>
                    <div className={"bottom"}>
                        <div className={"course-title"}>
                            轻松搞定MySQL核心技术
                        </div>
                        <div className={"teacher-name"}>
                            MKevin
                        </div>
                        <div className={"price-and-star"}>
                            <span>9.9</span>
                            <span>即将开抢</span>
                        </div>
                    </div>
                </a>

            </div>
        )
    }
}
export default Killcard;

