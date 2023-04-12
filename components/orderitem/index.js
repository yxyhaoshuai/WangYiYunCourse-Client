import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";

class Orderitem extends Component{
    render(){
        const item = this.props.item;
        return (
            <div className={"course-detail-item"}>
                <div className={"iconfont"}>
                    <span>&#xe60f;</span>
                </div>
                <div className={"course-img"}>
                    <a href="#">
                        <img src={BaseURL + item.img_url} alt=""/>
                    </a>

                </div>
                <div className={"course-title"}>
                    <a href="">{item.course_title}</a>
                </div>
                <div className={"valid"}>
                    永久有效
                </div>
            </div>
        )
    }
}
export default Orderitem;

