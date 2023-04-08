require("./index.less")
import {BaseURL} from "../../config/serverConfig";
import React from "react";
import {Button, Result} from "antd";
import {useRouter} from "next/router";

export default function Seriescourseitem({data}) {
    const router = useRouter();
    const handleClick = ()=>{
        router.back();
    }

    return (
        <>
            {
                data.id === null ? <Result
                        title="不好意思哦。这个系列没有添加任何课程( ´•̥̥̥ω•̥̥̥` )"
                        extra={<Button onClick={handleClick} type="primary">返回</Button>}
                    />
                    :
                    <div className={"series-course-item bx"}>
                        <div className={"course-title"}>
                            {
                                data.course_title1
                            }
                        </div>
                        <div className={"course-intro"}>
                            {
                                data.course_intro1
                            }
                        </div>
                        <div className={"course-card bx"}>
                            <div className={"course-img"}>
                                <a href="#">
                                    <img src={BaseURL + data.img_url} alt=""/>
                                </a>

                            </div>
                            <div className={"course-content"}>
                                <div className={"left-course-content"}>
                                    <div className={"course-title"}>
                                        <a href="#">
                                            {
                                                data.course_title2
                                            }
                                        </a>

                                    </div>
                                    <div className={"course-teacher"}>
                                        {
                                            data.name
                                        }
                                    </div>
                                    <div className={"course-content-intro"}>
                                        {
                                            data.course_intro2
                                        }
                                    </div>
                                    {
                                            data.users[0].id === null ? ""
                                                :
                                                <>
                                                    <div className={"use-count"}>
                                                        现在参加，以下同学与你并肩作战!
                                                    </div>
                                                    <div className={"use-head"}>
                                                        {
                                                            data.users.map((item2)=>{
                                                                return <div key={item2.id} className={"use-head-div"}>
                                                                    <a href="#">
                                                                        <img  src={BaseURL + item2.header_url} alt=""/>
                                                                    </a>

                                                                </div>
                                                            })
                                                        }
                                                        {
                                                            data.users.length > 5 ?
                                                                <div className={"use-head-div"}>
                                                                    ......
                                                                </div>
                                                                :
                                                                ''
                                                        }
                                                    </div>
                                                </>
                                    }





                                </div>
                                <div className={"right-course-content"}>
                                    <div className={"price"}>
                                        {
                                            data.price === 0 ? "免费" : "￥"+data.price
                                        }
                                    </div>
                                    <div className={"detail-button"}>
                                        <a href="#">
                                            查看详情
                                        </a>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
            }
        </>
    )
}

