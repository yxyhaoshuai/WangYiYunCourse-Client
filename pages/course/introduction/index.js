import Navibar from "../../../components/naviBar";

require("./index.less")
import {Breadcrumb, Rate} from "antd";
import Coverlogin from "../../../components/coverlogin";
import Wangyiyunfooter from "../../../components/wangyiyunfooter";
import Fixedfield from "../../../components/fixedfield";
import {useState} from "react";


export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }
    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Fixedfield/>
            {/*下面是一个组件到时候封装*/}
            <div className={"course-intro"}>
                <div className={"course-intro-bread bx"}>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="">首页</Breadcrumb.Item>
                        <Breadcrumb.Item href="">编程开发</Breadcrumb.Item>
                        <Breadcrumb.Item href="">IT互联网</Breadcrumb.Item>
                        <Breadcrumb.Item href="">后端开发</Breadcrumb.Item>
                        <Breadcrumb.Item> 课程详情</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={"course-intro-card bx"}>
                    <div className={"img-content"}>
                        <div className={"img"}>
                            <img src="/assets/images/coursedetail.png" alt=""/>
                        </div>
                        <div className={"content"}>
                            <div className={"course-title"}>
                                <div className={"course-title-text"}>
                                    撩课-Python-爬虫系列-网络剖析
                                </div>
                                <div className={"share"}>
                                    <a href="#" className={"iconfont"}>&#xe62f;</a>
                                </div>
                                <div className={"collect"}>
                                    <a href="#" className={"iconfont"}>&#xe666;</a>
                                </div>
                            </div>
                            <div className={"about-user-teacher"}>
                                <div className={"user-count"}>
                                    376人学过
                                </div>
                                <div className={"score"}>
                                    <Rate disabled defaultValue={4.5} />
                                </div>
                                <div className={"teacher-name"}>
                                    讲师：王顺子
                                </div>
                            </div>
                            <div className={"price"}>
                                ¥ 188.00

                            </div>
                            <div className={"coupon"}>
                                <a href="#">【福利】送80元购课通用红包></a>

                            </div>
                            <div className={"three-button"}>
                                <div className={"join-button"}>
                                    立即参加

                                </div>
                                <div className={"try-and-see"}>
                                    免费试看

                                </div>
                                <div className={"join-cart"}>
                                    <span className={"iconfont"}>&#xe6d5;</span>
                                    <span>加入购物车</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className={"bar-button bx"}>
                    {/*current选中 not-current是未选择两者只能填一个*/}
                    <span className={"current"}>
                        介绍
                    </span>
                    <span className={"not-current"}>
                        目录
                    </span>

                </div>

            </div>
            {/*下面是一个组件到时候封装*/}
            <div className={"layout bx"}>
                <div className={"layout-left"}>
                    <div className={"fit-people"}>适用人群</div>
                    <div className={"fit-people-content"}>1. 具备面向对象基础；
                        2. 具备包和模块基础；
                        3. 如果不具备，请网易云课堂搜索“王顺子”关键字</div>
                    <div className={"course-overview"}>课程概述</div>
                    <div className={"course-overview-content"}>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</div>
                    <div className={"course-overview-img"}>
                        <img src="/assets/images/course-overview.png" alt=""/>
                    </div>
                </div>
                <div className={"layout-right"}>

                    <div className={"school"}>
                        <div className={"school-img"}>
                            <div className={"school-img-center"}>
                                <a href="#">
                                    <img src="/assets/images/schoolimg3.png" alt=""/>
                                </a>
                            </div>
                            <div className={"school-name"}>
                                王顺子
                            </div>
                        </div>
                        <div className={"school-intro"}>
                            微信关注:天天撩课
                        </div>
                    </div>


                    <div className={"school-consult"}>
                        <div className={"school-consult-img"}>
                            <div className={"school-consult-intro"}>
                                咨询
                            </div>
                            <div className={"img-consult"}>
                                <div className={"school-img-name"}>
                                    <div className={"img"}>
                                        <img src="/assets/images/schoolimg3.png" alt=""/>
                                    </div>
                                    <div className={"school-name-name"}>
                                        王顺子
                                    </div>
                                    <div className={"consult"}>
                                        咨询
                                    </div>
                                </div>
                                <div className={"school-intro"}>
                                    可在此在线咨询关于课程的内容、价格、售前、售后服务等相关信息

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={"belonging-series"}>
                        <div className={"school-consult-img"}>
                            <div className={"school-consult-intro"}>
                                所属系列课程
                            </div>
                            <div className={"img-consult"}>
                                <a href="#">撩课-王顺子-Python-爬虫实战系列</a>
                            </div>
                        </div>
                    </div>

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


                </div>

            </div>
            <Wangyiyunfooter/>
        </>
    )
}
