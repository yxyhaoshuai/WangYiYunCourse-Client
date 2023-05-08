import {getProgressBar} from "../../api/courseApi";

require("./index.less")
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getUser} from "../../api/userApi";
import {getStudentSchedule} from "../../api/courseMainApi";
import Link from "next/link";


export default function Progressbar({courseOutline}) {
    const router = useRouter()
    //学习进度百分比
    const [progress,setProgress] =useState(0);
    //学习总数
    const [studyCount,setStudyCount] =useState(0);

    //获取学习进度
    useEffect(()=>{
        // count和total通过网络请求获取
        if (router.query.id !== undefined){
            getUser().then((result)=>{
                getProgressBar(result.id,router.query.id).then((result2)=>{
                    setStudyCount(result2.data[0].studycount)
                    setProgress(result2.data[0].studycount/result2.data[1].total*100)
                })
            })
        }
    },[router.query])


    //用户学习到哪里的索引
    const [userStudyIndex,setUserStudyIndex] = useState(-1)
    //获取学习进度
    useEffect(()=>{
        if (router.query.id !== undefined){
            getUser().then((result)=>{
                getStudentSchedule(result.id,router.query.id).then((result2)=>{
                    if (result2.data.length > 0){
                        setUserStudyIndex(result2.data[0].student_study_index)
                    }else {
                        setUserStudyIndex(1)
                    }
                })
            })
        }
    },[router.query])

    const [textOutline,setTextOutline] = useState("")
    useEffect(()=>{

            if (courseOutline.length >0 && userStudyIndex>0){
                if (courseOutline.length === userStudyIndex){
                    setTextOutline(courseOutline[userStudyIndex-1].title)
                }else {
                    setTextOutline(courseOutline[userStudyIndex].title)
                }


            }


    },[courseOutline,userStudyIndex])


    return (
        <div className={"process-wrap bx"}>
            <div className={"process-wrap-top"}>
                <div className={"strip-bgc"}>
                    <div className={"strip-color"} style={{width: `${progress}%`}}></div>
                </div>
                <div className={"continue-learning"}>
                    <Link href={{
                        pathname: "/course/courseLearn",
                        query: {"id": router.query.id,"videoIndex":userStudyIndex}
                    }}>
                        <a>继续学习</a>
                    </Link>
                </div>
            </div>
            <div className={"process-wrap-bottom"}>
                <span>目前已完成</span>
                <span>{studyCount}</span>
                <span>个课时, 加油啊！</span>
                <span>下一个课时 : {textOutline}</span>
            </div>
        </div>
    )
}



