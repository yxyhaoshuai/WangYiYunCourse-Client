import {Breadcrumb} from "antd";

require("./index.less")
import React, {Component} from "react";

class Seriesing extends Component{
    render(){
        return (
            <div className={"series-course-img"}>
                <img src="/assets/images/xilieimg.png" alt=""/>
                <div className={"content-module"}>
                    <div className={"Breadcrumb-div"}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>
                                <a href="">全部课程</a>
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
                        撩课-王顺子-Python-爬虫实战系列
                    </div>
                    <div className={"series-title-intro"}>
                        撩课-王顺子-Python-爬
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
                            <span>￥574.00</span>

                        </div>
                    </div>



                </div>
            </div>
        )
    }
}
export default Seriesing;

