import {BaseURL} from "../../../config/serverConfig";
import {useEffect} from "react";

require("./index.less")
export default function Courseteachercard({data}){
    return(
        <div className={"course-teacher-card"}>
            <div className={"teacher-heard"}>
                <a href="components/card-category/courseteachercard/index#">
                    <img  src={BaseURL + data.course_img_url} />
                </a>
            </div>
            <div className={"course-intro"}>
                <a href="components/card-category/courseteachercard/index#">
                    {data.course_title}
                </a>

            </div>

        </div>
    )
}