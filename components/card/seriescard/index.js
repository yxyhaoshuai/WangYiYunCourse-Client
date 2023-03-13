import {Rate} from "antd";

require("./index.less")

import React from "react";
import {BaseURL} from "../../../config/serverConfig";


export default function Searchresultcard({count,is_score,data={}}) {
    const score_content =
        <div className={"content-div"}>
            <Rate className={"score-div"} disabled defaultValue={2} />
            <div className={"font-color"}>免费</div>
        </div>;




    return (
        <div className={`series-card ${count ? count : ""}`}>
            <div className={"img-div"}>
                <img src={BaseURL + data.series_fm_url} alt=""/>
                <div className={"is_series"}>
                    系列课程
                </div>
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

        </div>
    )
}

