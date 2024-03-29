import {BaseURL} from "../../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";

class Microprofessionlcard extends Component{
    render(){
        const {data} = this.props;
        return (
            <div className={"course-card-micro"}>
                <a href={"/course/introduction?id=" + data.courseid}>
                    <div className={"course-card_img"}>
                        <div className={"course-card_img_jpk"}>
                            <img src={BaseURL + data.img_url} alt=""/>
                        </div>

                    </div>
                    <div className={"course-card_content"}>
                        <div className={"classify-intro"}>
                            {data.course_title}
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
export default Microprofessionlcard;

