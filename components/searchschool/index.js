require("./index.less")
import React, {Component} from "react";

class Searchschool extends Component{
    render(){
        return (
            <div className={"school bx"}>
                <div className={"school-content"}>
                    <div className={"school-content-top"}>
                        <div className={"school-head"}>
                            <a href="#">
                                <img src="/assets/images/schoolimg2.png" alt=""/>
                            </a>
                        </div>
                        <div className={"school-intro"}>
                            <div className={"school-name"}>
                                <a href="#"><span className={"school-name-span"}>撩课-王顺子</span></a>
                                <span className={"iconfont"}>&#xe6f3;</span>
                            </div>
                            <div className={"school-intro-content"}>
                                <span>喜欢IT,就来撩课!</span>

                            </div>

                        </div>

                    </div>
                    <div className={"school-content-bottom"}>
                        专注课程质量,提供JavaEE学科,Web前端,Python学科编程技术!
                    </div>
                </div>
                <div className={"school-course"}>
                    <div className={"school-course-layout"}>
                        <a href=""><div className={"series-card"}>
                            <div className={"img-div"}>
                                <img src="assets/images/sz.png" alt=""/>
                                <div className={"is_series"}>
                                    系列课程
                                </div>
                            </div>
                            <div className={"text-div"}>
                                <div className={"title-div"}>
                                    杀杀杀杀杀杀杀杀

                                </div>
                                <div className={"content-div"}>
                                    <span>￥4399</span>
                                </div>

                            </div>

                        </div></a>
                    </div>
                    <div className={"school-course-layout"}>
                        <a href=""><div className={"series-card"}>
                            <div className={"img-div"}>
                                <img src="assets/images/sz.png" alt=""/>
                                <div className={"is_series"}>
                                    系列课程
                                </div>
                            </div>
                            <div className={"text-div"}>
                                <div className={"title-div"}>
                                    杀杀杀杀杀杀杀杀

                                </div>
                                <div className={"content-div"}>
                                    <span>￥4399</span>
                                </div>

                            </div>

                        </div></a>
                    </div>
                    <div className={"school-course-layout"}>
                        <a href=""><div className={"series-card"}>
                            <div className={"img-div"}>
                                <img src="assets/images/sz.png" alt=""/>
                                <div className={"is_series"}>
                                    系列课程
                                </div>
                            </div>
                            <div className={"text-div"}>
                                <div className={"title-div"}>
                                    杀杀杀杀杀杀杀杀

                                </div>
                                <div className={"content-div"}>
                                    <span>￥4399</span>
                                </div>

                            </div>

                        </div></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Searchschool;

