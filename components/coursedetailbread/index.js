import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

require("./index.less")
import {addCar, addUserFavoriteOne} from "../../api/courseApi";
import {Breadcrumb, message, Rate} from "antd";
import React, {useEffect, useState} from "react";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";
import {getUser} from "../../api/userApi";


export default function Coursedetailbread({courseData, ismystudy,breadData,_loginShow,directoryIntro,setDirectoryIntro}) {
    const [userId,setUserId] = useState(0)

    const warning = () => {
        message.warning({
            content: '会员模块没有开发哦！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //成功全局提示
    const successTip = (msg) => {
        message.success({
            content: msg,
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //失败全局提示
    const warningTip = (msg) => {
        message.warning({
            content: msg,
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };



    const collect = ()=>{
        getUser().then((result)=>{
            if (result.id !== undefined){
                addUserFavoriteOne(courseData.courseid,userId).then((result)=>{
                    if (result.code === 0){
                        successTip(result.msg)
                    }else {
                        warningTip(result.msg)
                    }
                })
            } else{
                warningTip("请先登录!")
                setTimeout(()=>{
                    _loginShow()
                },1000)

            }
        })

    }

    const success = () => {
        message.info({
            content: '这个网站还不支持微信登录！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    const addCarFunc = ()=>{
        getUser().then((result)=>{
            if (result.id !== undefined){
                addCar(courseData.courseid,userId).then((result)=>{
                    if (result.code === 0){
                        successTip(result.msg)
                    }else if (result.code === -1){
                        warningTip(result.msg)
                    }
                })
            } else{
                warningTip("请先登录!")
                setTimeout(()=>{
                    _loginShow()
                },1000)

            }
        })

    }

    useEffect(() => {
        getUser().then((result)=>{
            setUserId(result.id)
        })
    }, [])

    return (
        <div className={"course-intro"}>
            <div className={"course-intro-bread bx"}>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                    <Breadcrumb.Item href={`/category?classOneId=${breadData.classoneId}&categoryId=0`}>{breadData.classone}</Breadcrumb.Item>
                    <Breadcrumb.Item href={`/category?classOneId=${breadData.classoneId}&categoryId=${breadData.classtwoId}`}>{breadData.classtwo}</Breadcrumb.Item>
                    <Breadcrumb.Item href={`/category?classOneId=${breadData.classoneId}&categoryId=${breadData.classtwoId}`}>{breadData.classthree}</Breadcrumb.Item>
                    <Breadcrumb.Item> 课程详情</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={"course-intro-card bx"}>
                <div className={"img-content"}>
                    <div className={"img"}>
                        <LazyLoadImage src={BaseURL + courseData.courseurl}/>
                    </div>
                    <div className={"content"}>
                        <div className={"course-title"}>
                            <div className={"course-title-text"}>
                                {
                                    courseData.coursetitle
                                }
                            </div>
                            <div onClick={success} className={"share"}>
                                <a href="#" className={"iconfont"}>&#xe62f;</a>
                            </div>
                            <div onClick={collect} className={"collect"}>
                                <a className={"iconfont"}>&#xe666;</a>
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
                                                pathname: "/course/courseLearn",
                                                query: {"id": courseData.courseid}
                                            }}>
                                                <a>
                                                    免费试看
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={"join-cart"}>
                                            <span className={"iconfont"}>&#xe6d5;</span>
                                            <span onClick={addCarFunc}>加入购物车</span>
                                        </div>

                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className={"bar-button bx"}>
                {/*current选中 not-current是未选择两者只能填一个*/}
                {
                    directoryIntro === 1 ?
                        <>
                            <span onClick={() => {
                                setDirectoryIntro(1)
                            }
                            } className={"current"}>
                                介绍
                            </span>
                            <span onClick={() => {
                                setDirectoryIntro(2)
                            }
                            } className={"not-current"}>
                                目录
                            </span>
                            <span onClick={() => {
                                setDirectoryIntro(3)
                            }
                            } className={"not-current"}>
                                笔记
                            </span>
                        </>
                        :
                        directoryIntro === 2 ?
                        <>
                            <span onClick={() => {
                                setDirectoryIntro(1)
                            }
                            } className={"not-current"}>
                                介绍
                            </span>
                            <span onClick={() => {
                                setDirectoryIntro(2)
                            }
                            } className={"current"}>
                                目录
                            </span>
                            <span onClick={() => {
                                setDirectoryIntro(3)
                            }
                            } className={"not-current"}>
                                笔记
                            </span>
                        </>
                            :

                            <>
                            <span onClick={() => {
                                setDirectoryIntro(1)
                            }
                            } className={"not-current"}>
                                介绍
                            </span>
                                <span onClick={() => {
                                    setDirectoryIntro(2)
                                }
                                } className={"not-current"}>
                                目录
                            </span>
                                <span onClick={() => {
                                    setDirectoryIntro(3)
                                }
                                } className={"current"}>
                                笔记
                            </span>
                            </>
                }

            </div>

        </div>
    )
}

