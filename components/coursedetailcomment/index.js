import {Rate} from "antd";

require("./index.less")
import React, {useEffect, useState} from "react";
import Commenttextarea from "../commenttextarea";
import {useRouter} from "next/router";
import {getCourseMainCommentList, getCourseMainCommentListLimit5, getUserIs_comment} from "../../api/courseMainApi";
import {BaseURL} from "../../config/serverConfig";
import {getFormatTimeFromDate} from "../../tools/dateTool";
import {getUser} from "../../api/userApi";
import Link from "next/link";




export default function Coursedetailcomment({_commentShow}) {

    const router = useRouter()


    const [isComment,setCsComment] = useState([])



    const [publishButtonshow,setPublishButtonshow] = useState(false)
    const _publishButtonshow=()=>{
            setPublishButtonshow(!publishButtonshow)
    }

    useEffect(()=>{
        if (router.query.id !== undefined){
            getUser().then((result)=>{
                if (result.id !== undefined){
                    getUserIs_comment(router.query.id,result.id).then((result2)=>{
                        setCsComment(result2.data)
                    })
                }
            })
        }
    },[router.query.id])


    const [commentList,setCommentList] = useState([])

    //获取评论列表
    useEffect(()=>{
        if (router.query.id !== undefined){
            getCourseMainCommentListLimit5(router.query.id).then((result)=>{
                setCommentList(result.data)
            })
        }
    },[router.query.id])






    return (
        <div className={"comment"}>
            <div className={"comment-school-consult-img"}>
                <div className={"comment-school-consult-intro"}>
                    评论
                </div>


                <div className={"comment-img-consult"}>


                    {/*没有评价的状态*/}


                    {
                        isComment.length > 0 ?
                            <div className={"user-comment-textarea-latter"}>
                                <div className={"score"}>
                                    <span className={"user-comment-textarea-text"}>我的评价：</span>
                                    <Rate disabled  className={"rate-size"} allowHalf defaultValue={isComment[0].score} />
                                    <span className={"comment-latter"}>已评价</span>
                                </div>
                            </div>
                            :
                            <Commenttextarea publishButtonshow={publishButtonshow} _publishButtonshow={_publishButtonshow}/>

                    }
                    {/*已评价的状态*/}
                    {
                        commentList.map((item)=>{
                            return <div key={item.id} className={"comment-comment"}>
                                <div className={"comment-user-score"}>
                                    <div className={"user-img"}>
                                        <img src={BaseURL + item.header_url} alt=""/>
                                    </div>
                                    <div className={"text"}>
                                        <Link href={{
                                            pathname: "/user/others",
                                            query: {"id": item.id}
                                        }}>
                                                <a>{item.nick_name}</a>
                                        </Link>

                                        <p>学习29个课时评价</p>
                                    </div>
                                    <div className={"star"}>
                                        <Rate disabled defaultValue={item.score} />
                                    </div>
                                </div>
                                <div className={"comment-content"}>
                                    {item.content}
                                </div>
                                <div className={"comment-time"}>{getFormatTimeFromDate(item.creation_time)}</div>
                            </div>
                        })
                    }
                </div>

                <div className={"view-more"}>
                    <span onClick={_commentShow}>查看更多</span>
                </div>
            </div>
        </div>
    )
}



