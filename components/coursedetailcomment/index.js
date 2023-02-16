import {Rate} from "antd";

require("./index.less")
import React, {Component} from "react";

class Coursedetailcomment extends Component{
    render(){
        return (
            <div className={"comment"}>
                <div className={"comment-school-consult-img"}>
                    <div className={"comment-school-consult-intro"}>
                        评论
                    </div>
                    <div className={"comment-img-consult"}>
                        <div className={"comment-comment"}>
                            <div className={"comment-user-score"}>
                                <div className={"user-img"}>
                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                </div>
                                <div className={"text"}>
                                    <a href="">学员2bd8kada683233</a>
                                    <p>学习29个课时评价</p>
                                </div>
                                <div className={"star"}>
                                    <Rate disabled defaultValue={4.5} />
                                </div>
                            </div>
                            <div className={"comment-content"}>
                                阿巴阿巴阿
                            </div>
                            <div className={"comment-time"}>2022-4-28</div>
                        </div>
                        <div className={"comment-comment"}>
                            <div className={"comment-user-score"}>
                                <div className={"user-img"}>
                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                </div>
                                <div className={"text"}>
                                    <a href="">学员2bd8kada683233</a>
                                    <p>学习29个课时评价</p>
                                </div>
                                <div className={"star"}>
                                    <Rate disabled defaultValue={4.5} />
                                </div>
                            </div>
                            <div className={"comment-content"}>
                                阿巴阿巴阿巴阿巴阿
                            </div>
                            <div className={"comment-time"}>2022-4-28</div>
                        </div>
                        <div className={"comment-comment"}>
                            <div className={"comment-user-score"}>
                                <div className={"user-img"}>
                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                </div>
                                <div className={"text"}>
                                    <a href="">学员2bd8kada683233</a>
                                    <p>学习29个课时评价</p>
                                </div>
                                <div className={"star"}>
                                    <Rate disabled defaultValue={4.5} />
                                </div>
                            </div>
                            <div className={"comment-content"}>
                                阿巴阿巴阿巴阿
                            </div>
                            <div className={"comment-time"}>2022-4-28</div>
                        </div>
                        <div className={"comment-comment"}>
                            <div className={"comment-user-score"}>
                                <div className={"user-img"}>
                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                </div>
                                <div className={"text"}>
                                    <a href="">学员2bd8kada683233</a>
                                    <p>学习29个课时评价</p>
                                </div>
                                <div className={"star"}>
                                    <Rate disabled defaultValue={4.5} />
                                </div>
                            </div>
                            <div className={"comment-content"}>
                                顺子哥真的好牛，我是真的相信顺子哥是架构师
                            </div>
                            <div className={"comment-time"}>2022-4-28</div>
                        </div>
                    </div>
                    <div className={"view-more"}>
                        <a href="#">查看更多</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Coursedetailcomment;

