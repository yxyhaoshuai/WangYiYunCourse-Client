import {BaseURL} from "../../../config/serverConfig";
import {useEffect} from "react";
import Link from "next/link";

require("./index.less")
export default function Courseteachercard({data}){
    return(
        <div className={"course-teacher-card"}>
            <div className={"teacher-heard"}>
                <Link href={{
                    pathname: "/course/introduction",
                    query: {"id": data.courseid}
                }}>
                    <a>
                        <img src={BaseURL + data.course_img_url} />
                    </a>
                </Link>
            </div>
            <div className={"course-intro"}>
                <Link href={{
                    pathname: "/course/introduction",
                    query: {"id": data.courseid}
                }}>
                    <a>
                        {data.course_title}
                    </a>
                </Link>
            </div>

        </div>
    )
}