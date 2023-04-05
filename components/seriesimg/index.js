import {Breadcrumb} from "antd";

require("./index.less")
import React, {Component} from "react";
import {BaseURL} from "../../config/serverConfig";

class Seriesing extends Component{
    render(){
        const {seriesCourseData,seriesCourseListData} = this.props;
        return (
            <div className={"series-course-img"}>
                <img src={BaseURL + seriesCourseData.course_introduction_img} alt=""/>
                <div className={"content-module"}>
                    <div className={"Breadcrumb-div"}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>
                                <a href="/">全部课程</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">系列课程</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                详情
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className={"series-title"}>
                        {
                            seriesCourseData.title
                        }
                    </div>
                    <div className={"series-title-intro"}>
                        {
                            seriesCourseData.intro
                        }
                    </div>
                    <div className={"join"}>
                        <div className={"join-button"}>
                            <div className={"join-button-icon"}>
                                <span className={"iconfont"}>
                                    &#xe666;
                                </span>

                            </div>
                            <div className={"join-button-button"}>
                                参加全部课程
                            </div>

                        </div>
                        <div className={"price"}>
                            <span>￥
                                {
                                    seriesCourseListData.reduce((a,b)=>{
                                        return a+b.price
                                    },0)
                                }
                            </span>

                        </div>
                    </div>



                </div>
            </div>
        )
    }
}
export default Seriesing;

