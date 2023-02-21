import {Rate} from "antd";

require("./index.less")
import React, {Component} from "react";

class Searchresultcard extends Component{
    render(){
        const {count,is_score} = this.props;
        const score_content =
            <div className={"content-div"}>
                <Rate className={"score-div"} disabled defaultValue={2} />
                <div className={"font-color"}>免费</div>
            </div>;
        return (
            <div className={`series-card ${count ? count : ""}`}>
                <div className={"img-div"}>
                    <img src="/assets/images/sz.png" alt=""/>
                    <div className={"is_series"}>
                        系列课程
                    </div>
                </div>
                <div className={"text-div"}>
                    <div className={"title-div"}>
                        杀杀杀杀杀杀杀杀
                    </div>
                    {is_score ? score_content: <div className={"content-div"}>杀杀杀杀</div>}
                </div>

            </div>
        )
    }
}
export default Searchresultcard;

