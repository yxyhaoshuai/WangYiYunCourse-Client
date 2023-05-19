import React, {useEffect} from "react";
import {buyCourseApi, getUser} from "../../api/userApi";
import {useRouter} from "next/router";
import {globalMessage} from "../../tools/globalMessage";
require("./index.less")




export default function Orderprice({courseList}) {


    const buyCourse = () => {
        const courseIdArray = courseList.map(item=>item.id)
        getUser().then((result)=>{
            if (result.id !== undefined){

                buyCourseApi(courseIdArray,result.id).then((result2)=>{
                    console.log(result2)
                    if (result2.code === 0){
                        globalMessage("success",result2.msg)
                    }else if (result2.code === -1){
                        globalMessage("warning",result2.msg)
                    }
                })
            }
        })

    };


    return (
        <div className={"reality-price"}>
            <div className={"position"}>
                <div className={"reality-price-text"}>
                    <span>实付金额：</span>
                    <span>￥{
                        courseList.reduce((a,b)=>{
                            return a+b.price
                        },0)
                    }</span>
                </div>
                <div className={"submit-button"}>
                    <a onClick={buyCourse}>
                        提交订单
                    </a>
                </div>
            </div>
        </div>
    )
}



