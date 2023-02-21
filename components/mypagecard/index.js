require("./index.less")
import React, {Component} from "react";

class Mypagecard extends Component{
    render(){
        return (
            <div className={"mystudy-course-card column4"}>
                <div className={"mystudy-course-card-header"}>
                    <img src="/assets/images/aaaa.png" alt=""/>
                    <div className={"cover-tag"}>
                        随到随学
                    </div>
                    <div className={"course-top"}>
                        置顶

                    </div>

                </div>
                <div className={"mystudy-course-card-title"}>
                    <div className={"course-title"}>撩课-Python大数据+人工智能5</div>
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

