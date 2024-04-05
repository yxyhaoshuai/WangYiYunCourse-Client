import {Rate} from "antd";

require("./index.less")
import React, {Component} from "react";
import {BaseURL} from "../../../config/serverConfig";
import Link from "next/link";
import LazyLoadImage from "../../lazyLoadImage/LazyLoadImage";

class Categoryfreecard extends Component{
    render(){
        const {score,data} = this.props;

        return (
                <div className={"category-free-card column5"}>
                    <Link href={{
                        pathname: "/course/introduction/",
                        query: {"id": data.courseId}
                    }}>
                        <a>
                            <div className={"img-div"}>
                                <LazyLoadImage src={BaseURL + data.img_url}/>
                            </div>
                            <div className={"text-div"}>
                                <div className={"course-card"}>
                                    <span className={"is-self-innovate"}>自研</span>
                                    <span className={"course-title"}>{data.course_title}</span>
                                </div>
                                <div className={"score-div"}>
                                    {
                                        score!==null ?  <><Rate disabled allowHalf defaultValue={data.score} /><span className={"score-figure"}>{score}</span></>: ""
                                    }

                                </div>
                                <div className={"course-price"}>
                                    {
                                        data.price === 0 ? <span>免费</span> : <span>￥ {data.price}</span>
                                    }

                                </div>

                            </div>
                        </a>
                    </Link>
                </div>

        )
    }
}
export default Categoryfreecard;

