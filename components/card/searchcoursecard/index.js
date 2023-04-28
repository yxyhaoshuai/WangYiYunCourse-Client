import {Rate} from "antd";

require("./index.less")

import React, {useEffect} from "react";
import {BaseURL} from "../../../config/serverConfig";
import Link from "next/link";


export default function Searchcoursecard({count,is_score,data={}}) {

    useEffect(()=>{
        console.log(data)
    },[data])
    const score_content =
        <div className={"content-div"}>

            {
                data.avg_score===null ? <span>该课程未获得评价</span> : <><Rate className={"score-div"} allowHalf disabled defaultValue={data.avg_score} />
                    {
                        data.avg_score
                    } 分</>
            }

            {
                data.price === 0 ? <div className={"font-color"}>免费</div> : <div className={"font-color"}>￥ {data.price}</div>
            }



        </div>;




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
                {is_score ? score_content: <div className={"content-div"}>{
                    data.course_intro
                }</div>}
            </div>
            </a>
            </Link>
        </div>
    )
}

