require("./index.less")
import React, {Component} from "react";

class Coursedetailcatalogue extends Component{
    render(){
        return (
            <div className={"layout-left2"}>
                <div className={"fit-people2"}>目录</div>
                <div className={"course-item"}>
                    <div className={"chapter"}>
                        <span>章节1:</span>
                        <span>python-爬虫-概述</span>
                        <span className={"try"}>试看</span>
                    </div>
                    <div className={"lesson"}>
                        <a href="#">
                            <div>
                                <span>课时1</span>
                            </div>
                            <div>
                                <span>视频</span>
                            </div>
                            <div>
                                <span>python-爬虫概述</span>
                            </div>
                            <div>
                                <span className={"iconfont"}>&#xe61c;</span>
                            </div>
                            <div>
                                <span>点击试看</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Coursedetailcatalogue;

