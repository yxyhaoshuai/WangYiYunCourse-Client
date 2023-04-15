require("./index.less")
import {Breadcrumb, message, Rate} from "antd";


import React, {useEffect, useState} from "react";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";
import {getCourseIntroduction} from "../../api/courseIntroduction";
import {useRouter} from "next/router";


export default function Coursedetailbread({courseData, ismystudy}) {


    const warning = () => {
        message.warning({
            content: '会员模块没有开发哦！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };
    useEffect(() => {
        console.log(courseData)
    }, [courseData])

    return (
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
                        <img src={BaseURL + courseData.courseurl} alt=""/>
                    </div>
                    <div className={"content"}>
                        <div className={"course-title"}>
                            <div className={"course-title-text"}>
                                {
                                    courseData.coursetitle
                                }
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
                                {
                                    `${courseData.studentcount}人学过`
                                }
                            </div>
                            <div className={"score"}>
                                {
                                    courseData.avg_score ? <Rate disabled allowHalf defaultValue={courseData.avg_score}/> : ""
                                }

                            </div>
                            <div className={"teacher-name"}>
                                {
                                    `讲师：${courseData.teacher_name}`
                                }
                            </div>
                        </div>

                        {
                            ismystudy ? "" :
                                <>
                                    <div className={"price"}>

                                        {
                                            "¥ " +
                                            courseData.courseprice
                                        }

                                    </div>
                                    <div className={"coupon"}>
                                        <a onClick={() => {
                                            warning()
                                        }}>【福利】送80元购课通用红包></a>
                                    </div>
                                    <div className={"three-button"}>
                                        <div className={"join-button"}>
                                            <Link href={{
                                                pathname: "/order",
                                                query: {"courseId": courseData.courseid}
                                            }}>
                                                <a>
                                                    立即参加
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={"try-and-see"}>


                                            {/*下面的代码需要修改，修改路由路径为视频播放页的路由路径*/}
                                            <Link href={{
                                                pathname: "/order",
                                                query: {"id": courseData.courseid}
                                            }}>
                                                <a>
                                                    免费试看
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={"join-cart"}>
                                            <span className={"iconfont"}>&#xe6d5;</span>
                                            <span>加入购物车</span>
                                        </div>

                                    </div>
                                </>
                        }


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
    )
}

