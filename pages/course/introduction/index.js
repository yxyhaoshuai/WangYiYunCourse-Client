import {Pagination, Rate} from "antd";

require("./index.less")
import Navibar from "../../../components/naviBar";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Fixedfield from "../../../components/fixedfield";
import React, {useState} from "react";
import Coursedetailbread from "../../../components/coursedetailbread";
import Coursedetaillayout from "../../../components/coursedetaillayout";



export default function ProviderSearch() {
    //登陆表单
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }

    // 评论蒙版
    const [showcomment, setshowcomment] = useState(false)
    const _commentShow = () =>{
        setshowcomment(!showcomment)


    }
    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Fixedfield/>
            {/*下面是一个组件到时候封装*/}
            <Coursedetailbread/>
            {/*下面是一个组件到时候封装*/}
            <Coursedetaillayout _commentShow={_commentShow}/>
            <Wangyiyunfooter/>
            {
                showcomment ?
                    <div className={"cover"}>
                        <div className={"ux-modal_dialog"}>
                            <div className={"titel-close"}>
                                <div className={"comment-text"}>
                                    全部评价
                                </div>
                                <div className={"close"}>
                                    <span onClick={_commentShow} className={"close-button iconfont"}>&#xe614;</span>
                                </div>
                            </div>

                            <div className={"comment-item"}>
                                <div className={"comment-item-content"}>
                                    {/*下面是一个个评论的条目*/}
                                    <div className={"content"}>
                                        <div className={"item-content"}>
                                            <div className={"item-content-left"}>
                                                <div className={"item-content-left-img"}>
                                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                                </div>
                                                <div className={"about-user-count"}>
                                                    <div className={"user-name"}>
                                                    <span>
                                                        kerragin
                                                    </span>
                                                    </div>
                                                    <div className={"study-count"}>
                                                        <span>学习67个课时评价</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"item-content-right"}>
                                                <div className={"Rate"}>
                                                    <Rate disabled allowHalf  defaultValue={2.5} />
                                                </div>
                                                <div className={"create-time"}>2022-7-31</div>
                                            </div>

                                        </div>
                                        <div className={"comment-intro"}>

                                        </div>

                                    </div>
                                    <div className={"content"}>
                                        <div className={"item-content"}>
                                            <div className={"item-content-left"}>
                                                <div className={"item-content-left-img"}>
                                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                                </div>
                                                <div className={"about-user-count"}>
                                                    <div className={"user-name"}>
                                                    <span>
                                                        kerragin
                                                    </span>
                                                    </div>
                                                    <div className={"study-count"}>
                                                        <span>学习67个课时评价</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"item-content-right"}>
                                                <div className={"Rate"}>
                                                    <Rate disabled allowHalf  defaultValue={2.5} />
                                                </div>
                                                <div className={"create-time"}>2022-7-31</div>
                                            </div>

                                        </div>
                                        <div className={"comment-intro"}>
                                            这里是评论内容


                                        </div>

                                    </div>
                                    <div className={"content"}>
                                        <div className={"item-content"}>
                                            <div className={"item-content-left"}>
                                                <div className={"item-content-left-img"}>
                                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                                </div>
                                                <div className={"about-user-count"}>
                                                    <div className={"user-name"}>
                                                    <span>
                                                        kerragin
                                                    </span>
                                                    </div>
                                                    <div className={"study-count"}>
                                                        <span>学习67个课时评价</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"item-content-right"}>
                                                <div className={"Rate"}>
                                                    <Rate disabled allowHalf  defaultValue={2.5} />
                                                </div>
                                                <div className={"create-time"}>2022-7-31</div>
                                            </div>

                                        </div>
                                        <div className={"comment-intro"}>
                                            这里是评论内容


                                        </div>

                                    </div>
                                    <div className={"content"}>
                                        <div className={"item-content"}>
                                            <div className={"item-content-left"}>
                                                <div className={"item-content-left-img"}>
                                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                                </div>
                                                <div className={"about-user-count"}>
                                                    <div className={"user-name"}>
                                                    <span>
                                                        kerragin
                                                    </span>
                                                    </div>
                                                    <div className={"study-count"}>
                                                        <span>学习67个课时评价</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"item-content-right"}>
                                                <div className={"Rate"}>
                                                    <Rate disabled allowHalf  defaultValue={2.5} />
                                                </div>
                                                <div className={"create-time"}>2022-7-31</div>
                                            </div>

                                        </div>
                                        <div className={"comment-intro"}>



                                        </div>

                                    </div>
                                    <div className={"content"}>
                                        <div className={"item-content"}>
                                            <div className={"item-content-left"}>
                                                <div className={"item-content-left-img"}>
                                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                                </div>
                                                <div className={"about-user-count"}>
                                                    <div className={"user-name"}>
                                                    <span>
                                                        kerragin
                                                    </span>
                                                    </div>
                                                    <div className={"study-count"}>
                                                        <span>学习67个课时评价</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"item-content-right"}>
                                                <div className={"Rate"}>
                                                    <Rate disabled allowHalf  defaultValue={2.5} />
                                                </div>
                                                <div className={"create-time"}>2022-7-31</div>
                                            </div>

                                        </div>
                                        <div className={"comment-intro"}>
                                            这里是评论内容


                                        </div>

                                    </div>
                                    <div className={"content"}>
                                        <div className={"item-content"}>
                                            <div className={"item-content-left"}>
                                                <div className={"item-content-left-img"}>
                                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                                </div>
                                                <div className={"about-user-count"}>
                                                    <div className={"user-name"}>
                                                    <span>
                                                        kerragin
                                                    </span>
                                                    </div>
                                                    <div className={"study-count"}>
                                                        <span>学习67个课时评价</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"item-content-right"}>
                                                <div className={"Rate"}>
                                                    <Rate disabled allowHalf  defaultValue={2.5} />
                                                </div>
                                                <div className={"create-time"}>2022-7-31</div>
                                            </div>

                                        </div>
                                        <div className={"comment-intro"}>
                                            这里是评论内容


                                        </div>

                                    </div>

                                </div>
                                <div className={"pagination-div"}>
                                    <Pagination className={"sorter"} showSizeChanger={false} size="small" total={8000} />

                                </div>

                            </div>

                        </div>


                    </div> : ''
            }

        </>
    )
}
