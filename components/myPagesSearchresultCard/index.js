import {Rate} from "antd";

require("./index.less")

import React, {useEffect} from "react";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";


export default function MyPagesSearchresultCard({count,is_score,data={}}) {
    const score_content =
        <div className={"content-div"}>
            <Rate className={"score-div"} disabled defaultValue={data.avg_score} />
            {
                data.avg_score
            }
            <div className={"font-color"}>{data.price===0? "免费": "￥"+data.price}</div>
        </div>;




    return (
        <Link href={{
            pathname:"/course/introduction",
            query:{id:data.id}
        }} >
            <a className={`series-card ${count ? count : ""}`}>
                <div className={"img-div"}>
                    <LazyLoadImage src={BaseURL + data.series_fm_url}/>
                </div>
                <div className={"text-div"}>
                    <div className={"title-div"}>
                        {
                            data.title
                        }
                    </div>
                    {is_score ? score_content: <div className={"content-div"}>{
                        data.intro
                    }</div>}
                </div>

            </a>
        </Link>

    )
}

