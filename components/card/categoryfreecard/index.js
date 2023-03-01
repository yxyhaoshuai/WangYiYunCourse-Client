import {Rate} from "antd";

require("./index.less")
import React, {Component} from "react";

class Categoryfreecard extends Component{
    render(){
        const {score} = this.props;

        return (
                <div className={"category-free-card column5"}>
                    <div className={"img-div"}>
                        <img src="/assets/images/sz.png" alt=""/>
                    </div>
                    <div className={"text-div"}>
                        <div className={"course-card"}>
                            <span className={"is-self-innovate"}>自研</span>
                            <span className={"course-title"}>10分钟甩掉字幕看美剧10分钟甩掉字幕看美剧</span>
                        </div>
                        <div className={"score-div"}>
                            {
                                score!==null ?  <><Rate disabled allowHalf defaultValue={score} /><span className={"score-figure"}>{score}</span></>: ""
                            }

                        </div>
                        <div className={"course-price"}>
                            <span>免费</span>
                        </div>

                    </div>
                </div>

        )
    }
}
export default Categoryfreecard;

