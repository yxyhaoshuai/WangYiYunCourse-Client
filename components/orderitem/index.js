require("./index.less")
import React, {Component} from "react";

class Orderitem extends Component{
    render(){
        return (
            <div className={"course-detail-item"}>
                <div className={"iconfont"}>
                    <span>&#xe60f;</span>
                </div>
                <div className={"course-img"}>
                    <a href="#">
                        <img src="/assets/images/ordercourseimg.png" alt=""/>

                    </a>

                </div>
                <div className={"course-title"}>
                    <a href="">撩课-Python-爬虫系列-网络剖析</a>
                </div>
                <div className={"valid"}>
                    永久有效
                </div>
            </div>
        )
    }
}
export default Orderitem;

