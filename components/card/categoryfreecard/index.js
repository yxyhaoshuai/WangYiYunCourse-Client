import {Rate} from "antd";

require("./index.less")
import React, {Component} from "react";
import {BaseURL} from "../../../config/serverConfig";

class Categoryfreecard extends Component{
    render(){
        const {score,data} = this.props;

        return (
                <div className={"category-free-card column5"}>
                    <div className={"img-div"}>
                        <img src={BaseURL + data.img_url} alt=""/>
                    </div>
                    <div className={"text-div"}>
                        <div className={"course-card"}>
                            <span className={"is-self-innovate"}>自研</span>
                            <span className={"course-title"}>{data.course_title}</span>
                        </div>
                        <div className={"score-div"}>
                            {
                                score!==null ?  <><Rate disabled allowHalf defaultValue={data.score} /><span className={"score-figure"}>{score}</span></>: ""
                            }

                        </div>
                        <div className={"course-price"}>
                            {
                                data.price === 0 ? <span>免费</span> : <span>￥ {data.price}</span>
                            }

                        </div>

                    </div>
                </div>

        )
    }
}
export default Categoryfreecard;

