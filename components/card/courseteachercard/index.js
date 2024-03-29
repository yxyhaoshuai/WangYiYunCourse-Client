import {BaseURL} from "../../../config/serverConfig";
import {useEffect} from "react";
import Link from "next/link";

require("./index.less")
export default function Courseteachercard({data}){
    return(
        <div className={"course-teacher-card"}>
            <div className={"teacher-heard"}>
                    <a href={"/course/introduction?id="+data.courseid}>
                        <img src={BaseURL + data.course_img_url} />
                    </a>
            </div>
            <div className={"course-intro"}>
                    <a href={"/course/introduction?id="+data.courseid}>
                        {data.course_title}
                    </a>
            </div>

        </div>
    )
}