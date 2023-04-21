import {getProgressBar} from "../../api/courseApi";

require("./index.less")
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getUser} from "../../api/userApi";

export default function Progressbar() {
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
    return (
        <div className={"process-wrap bx"}>
            <div className={"process-wrap-top"}>
                <div className={"strip-bgc"}>
                    <div className={"strip-color"} style={{width: `${progress}%`}}></div>
                </div>
                <div className={"continue-learning"}>
                    <a href="#">继续学习</a>
                </div>
            </div>
            <div className={"process-wrap-bottom"}>
                <span>目前已完成</span>
                <span>{studyCount}</span>
                <span>个课时, 加油啊！</span>
                <span>下一个课时 : Python文件操作-案例1-文件分类-代码实现-上</span>
            </div>
        </div>
    )
}



