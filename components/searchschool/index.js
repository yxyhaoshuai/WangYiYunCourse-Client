import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";
import Link from "next/link";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

class Searchschool extends Component {

    render() {
        const {data, is_series} = this.props;
        return (
            <div className={"school bx"}>
                <div className={"school-content"}>
                    <div className={"school-content-top"}>
                        <div className={"school-head"}>
                            <Link href={{
                                pathname: "/provider",
                                query: {"id": data.id}
                            }}>
                                <a>
                                    <LazyLoadImage src={BaseURL + data.organization_heard_url}/>
                                </a>
                            </Link>
                        </div>
                        <div className={"school-intro"}>
                            <div className={"school-name"}>
                                <Link href={{
                                    pathname: "/provider",
                                    query: {"id": data.id}
                                }}>
                                    <a><span className={"school-name-span"}>{data.school_title}</span></a>
                                </Link>
                                <span className={"iconfont"}>&#xe6f3;</span>
                            </div>
                            <div className={"school-intro-content"}>
                                <span>{data.organization_intro}</span>

                            </div>

                        </div>
                    </div>
                    <div className={"school-content-bottom"}>
                        {data.about_school}
                    </div>
                </div>
                <div className={"school-course"}>
                    {
                        data.courses.map((item) => {
                            return <div key={item.id} className={"school-course-layout"}>
                                <a href={`/course/introduction?id=${item.id}`}>
                                    <div className={"series-card"}>
                                        <div className={"img-div"}>
                                            <LazyLoadImage src={BaseURL + item.img_url}/>
                                            {
                                                is_series ? <div className={"is_series"}>系列课程</div> : ""
                                            }
                                        </div>
                                        <div className={"text-div"}>
                                            <div className={"title-div"}>
                                                {item.course_title}
                                            </div>
                                            <div className={"content-div"}>
                                            <span>
                                                {
                                                    item.price === 0 ? "免费" : `￥ ${item.price}`
                                                }
                                            </span>
                                            </div>

                                        </div>

                                    </div>
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Searchschool;

