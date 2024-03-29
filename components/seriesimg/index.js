import {Breadcrumb} from "antd";

require("./index.less")
import React, {Component} from "react";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";

class Seriesing extends Component{
    render(){
        const {seriesCourseData,seriesCourseListData,addFavorite,AttendAllCourses} = this.props;
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
                                <Link href="/series/all">
                                    <a>系列课程</a>
                                </Link>
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
                                <span onClick={addFavorite} className={"iconfont"}>
                                    &#xe666;
                                </span>

                            </div>
                            <div className={"join-button-button"}>
                                <Link href={{
                                    pathname:"/order",
                                    query:{"id":seriesCourseData.id}
                                }} >
                                    <a onClick={(e)=>{
                                        AttendAllCourses(e,seriesCourseData.id)
                                    }}>
                                        参加全部课程
                                    </a>
                                </Link>
                            </div>

                        </div>
                        <div className={"price"}>
                            <span>
                                {
                                    seriesCourseListData.reduce((a,b)=>{
                                        return a+b.price
                                    },0) === 0? "免费" : "￥"+seriesCourseListData.reduce((a,b)=>{
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

