import {Rate} from "antd";

require("./index.less")
import React, {Component} from "react";
import Commenttextarea from "../commenttextarea";

class Coursedetailcomment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            publishButtonshow:false,
            iscomment:true
        };
    }

    render(){
        const {_commentShow} = this.props;
        const _publishButtonshow=()=>{
            this.setState({
                publishButtonshow: !this.state.publishButtonshow

            })
            console.log(this.state)

        }

        return (
            <div className={"comment"}>
                <div className={"comment-school-consult-img"}>
                    <div className={"comment-school-consult-intro"}>
                        评论
                    </div>


                    <div className={"comment-img-consult"}>


                        {/*没有评价的状态*/}


                        {
                            this.state.iscomment?
                                <Commenttextarea publishButtonshow={this.state.publishButtonshow} _publishButtonshow={_publishButtonshow}/>
                                :
                                <div className={"user-comment-textarea-latter"}>
                                    <div className={"score"}>
                                        <span className={"user-comment-textarea-text"}>我的评价：</span>
                                        <Rate disabled  className={"rate-size"} allowHalf defaultValue={5} />
                                        <span className={"comment-latter"}>已评价</span>
                                    </div>
                                </div>
                        }
                        {/*已评价的状态*/}




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
                        <span onClick={_commentShow}>查看更多</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Coursedetailcomment;

