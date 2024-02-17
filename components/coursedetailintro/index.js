require("./index.less")
import React, {Component} from "react";

class Coursedetailintro extends Component{
    render(){
        return (
            <div className={"layout-left"}>
                <div className={"fit-people"}>适用人群</div>
                <div className={"fit-people-content"}>1. 具备面向对象基础；
                    2. 具备包和模块基础；
                    3. 如果不具备，请严选云课堂搜索“王顺子”关键字</div>
                <div className={"course-overview"}>课程概述</div>
                <div className={"course-overview-content"}>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</div>
                <div className={"course-overview-img"}>
                    <img src="/assets/images/course-overview.png" alt=""/>
                </div>
            </div>
        )
    }
}
export default Coursedetailintro;

