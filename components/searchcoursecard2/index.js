import {Rate} from "antd";

require("./index.less")

import React, {useEffect} from "react";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";


export default function Searchcoursecard2({count, data = {}}) {


    return (
        <div className={`series-card ${count ? count : ""}`}>
            <Link href={{
                pathname: "/course/courseMain",
                query: {"id": data.id}
            }}>
                <a>
                    <div className={"img-div"}>
                        <img src={BaseURL + data.img_url} alt=""/>
                    </div>
                    <div className={"text-div2"}>
                        <div className={"title-div2"}>
                            {
                                data.course_title
                            }
                        </div>
                        <div className={"content-div"}>
                            {
                                data.price === 0 ? <div className={"font-color"}>免费</div> : <div className={"font-color"}>￥ {data.price}</div>
                            }
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

