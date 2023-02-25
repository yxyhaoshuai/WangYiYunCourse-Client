import {Rate} from "antd";

require("./index.less")
import React, {Component} from "react";

class Commenttextarea extends Component{

    render(){
        const _publishButtonshow = this.props._publishButtonshow;
        return (
            <div className={"user-comment-textarea"}>
                <div className={"score"}>
                    <span className={"user-comment-textarea-text"}>给该课程打分：</span>
                    <Rate className={"rate-size"} allowHalf defaultValue={5} />
                </div>
                <textarea onBlur={_publishButtonshow} onFocus={_publishButtonshow} style={{resize:"none"}}  className={"note-txt"} placeholder="请尽可能详尽描述你的学习经历，例如学习成果、课程内容、讲师风格、教学服务等。"></textarea>
                {this.props.publishButtonshow ? <div className={"publish-button"}>
                    <div className={"word-count"}>
                        <span>还可以输入</span>
                        <span>200</span>
                        <span>字</span>
                    </div>
                    <span className={"cancel"}>
                                    <a href="#">取消</a>
                                </span>
                    <span className={"publish"}>
                                    <a href="#">发表</a>
                                </span>
                </div> : ""}

            </div>
        )
    }
}
export default Commenttextarea;

