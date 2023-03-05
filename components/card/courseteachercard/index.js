import {BaseURL} from "../../../config/serverConfig";

require("./index.less")
export default function Courseteachercard({courseimg,coursetitle}){
    return(
        <div className={"course-teacher-card"}>
            <div className={"teacher-heard"}>
                <a href="components/card-category/courseteachercard/index#">
                    <img  src={BaseURL + courseimg} />
                </a>
            </div>
            <div className={"course-intro"}>
                <a href="components/card-category/courseteachercard/index#">
                    {coursetitle}
                </a>

            </div>

        </div>
    )
}