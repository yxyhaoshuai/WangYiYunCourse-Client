import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";
import Link from "next/link";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

class Orderitem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className={"course-detail-item"}>
                <div className={"iconfont"}>
                    <span>&#xe60f;</span>
                </div>
                <div className={"course-img"}>
                    <Link href={{
                        pathname: "/course/introduction",
                        query: {"id": item.id}
                    }}>
                        <a>
                            <LazyLoadImage src={BaseURL + item.img_url}/>
                        </a>
                    </Link>
                </div>
                <div className={"course-title"}>
                    <Link href={{
                        pathname: "/course/introduction",
                        query: {"id": item.id}
                    }}>
                        <a>{item.course_title}</a>
                    </Link>
                </div>
                <div className={"valid"}>
                    永久有效
                </div>
            </div>
        )
    }
}

export default Orderitem;

