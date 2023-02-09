require("./index.less")
import React, {Component} from "react";

class Seriescourseitem extends Component{
    render(){
        return (
            <div className={"series-course-item bx"}>
                <div className={"course-title"}>
                    爬虫实战-网络解析
                </div>
                <div className={"course-intro"}>
                    玩转各种网络爬虫原理!
                </div>
                <div className={"course-card bx"}>
                    <div className={"course-img"}>
                        <a href="#">
                            <img src="/assets/images/aaaa.png" alt=""/>
                        </a>

                    </div>
                    <div className={"course-content"}>
                        <div className={"left-course-content"}>
                            <div className={"course-title"}>
                                <a href="#">
                                    撩课-Python-爬虫系列-网络实战
                                </a>

                            </div>
                            <div className={"course-teacher"}>
                                撩课-王顺子
                            </div>
                            <div className={"course-content-intro"}>
                                网络请求库urllib,requests，实现10大网络功能：基本请求，代理，伪造请求头，流式下载，上传等；非常多的项目驱动式教学
                            </div>
                            <div className={"use-count"}>
                                现在参加，330人与你并肩作战!
                            </div>
                            <div className={"use-head"}>
                                <div className={"use-head-div"}>
                                    <img src="/assets/images/usehead.png" alt=""/>
                                </div>
                                <div className={"use-head-div"}>
                                    <img src="/assets/images/usehead.png" alt=""/>
                                </div>
                                <div className={"use-head-div"}>
                                    <img src="/assets/images/usehead.png" alt=""/>
                                </div>
                                <div className={"use-head-div"}>
                                    <img src="/assets/images/usehead.png" alt=""/>
                                </div>
                                <div className={"use-head-div"}>
                                    <img src="/assets/images/usehead.png" alt=""/>
                                </div>
                                <div className={"use-head-div"}>
                                    <img src="/assets/images/usehead.png" alt=""/>
                                </div>
                                {/*下面的代码要改，当学习人数超过6个时显示小点点*/}
                                <div className={"use-head-div"}>
                                    ......
                                </div>
                            </div>

                        </div>
                        <div className={"right-course-content"}>
                            <div className={"price"}>
                                ￥188.00

                            </div>
                            <div className={"detail-button"}>
                                <a href="#">
                                    查看详情
                                </a>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default Seriescourseitem;

