import { Card } from 'antd';



import React, {Component} from "react";
import {BaseURL} from "../../../config/serverConfig";

require("./index.less")
class Livestreamingcard extends Component{
    render(){
        const {count} = this.props;
        const {data} = this.props;
        return (
            <div className={`live-streaming ${count ? count : ""}`}>
                <Card
                    className={"live-streaming-card"}
                    style={{
                        width: 260,
                    }}
                    bodyStyle={{
                        padding:10
                    }}
                    cover={
                        <img
                            alt="example"
                            src={BaseURL+`${data.img_url}`}
                        />
                    }

                >
                    <div className={"bottom"}>
                        <div className={"Live-time"}>{data.learning_time}</div>
                        <div className={"classify-intro"}>
                            <span>自研</span>
                            <span>{data.class_name}</span>
                            <span>{data.course_title}</span>
                        </div>
                        <div className={"teacher-name"}>
                            <span>{data.name}</span>
                            <span>云课堂英语课销量Top1</span>
                        </div>
                        <div className={"teacher-intro"}>{data.course_intro}</div>
                    </div>



                </Card>
            </div>
        )
    }
}
export default Livestreamingcard;

