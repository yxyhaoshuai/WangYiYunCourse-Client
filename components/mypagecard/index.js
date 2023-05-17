import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {useEffect, useState} from "react";
import {getProgressBar} from "../../api/courseApi";
import {getUser} from "../../api/userApi";
import {topMyCourse} from "../../api/myStudyApi";
import {globalMessage} from "../../tools/globalMessage";
import {useRouter} from "next/router";


export default function Mypagecard({data}) {
    const router = useRouter()
    const [studyProgress,setStudyProgress] = useState(0)
    const [studyTotal,setStudyTotal] = useState(0)

    useEffect(()=>{
        getUser().then((result)=>{
            if (result.id !== undefined){
                getProgressBar(result.id,data.id).then((result2)=>{
                    setStudyProgress(result2.data[0].studycount)
                    setStudyTotal(result2.data[1].total)
                })
            }
        })
    },[])

    const topMyCourseFunc = ()=>{
        getUser().then((result)=>{
            if (result.id !== undefined){
                topMyCourse(result.id,data.id).then((result2)=>{
                    if (result2.code === 0){
                        globalMessage("success","课程置顶成功！")
                        setTimeout(()=>{
                            router.reload()
                        },300)
                    }
                })
            }
        })
    }

    return (
        <div className={"mystudy-course-card column4"}>
            <a href={"/course/courseMain?id=" + data.id}>
                <div className={"mystudy-course-card-header"}>
                    <img src={BaseURL + data.img_url} alt=""/>
                    <div className={"cover-tag"}>
                        随到随学
                    </div>
                    <div onClick={topMyCourseFunc} className={"course-top"}>
                        置顶
                    </div>

                </div>
                <div className={"mystudy-course-card-title"}>
                    <div className={"course-title"}>{data.course_title}</div>
                    <div className={"course-study-count"}>
                        <span>已学习</span>
                        <span>{studyProgress}</span>
                        <span>/{studyTotal} 课时</span>
                    </div>

                </div>
                <div className={"mystudy-course-card-footer"}>
                    进入学习
                </div>
            </a>
        </div>
    )
}



