import {Pagination, Rate} from "antd";

require("./index.less")
import React, {useEffect, useState} from "react";
import {getFormatTimeFromDate} from "../../tools/dateTool";
import {BaseURL} from "../../config/serverConfig";
import {getCourseMainCommentList, getCourseMainCommentListCount} from "../../api/courseMainApi";
import {useRouter} from "next/router";
import Link from "next/link";


export default function Commentcover({_commentShow}) {
    const router = useRouter()
    const [commentListAll, setCommentListAll] = useState([])

    const [pagesCurrent, setPagesCurrent] = useState(1)
    const PaginationChange = (e) => {
        setPagesCurrent(e)
        getCourseMainCommentList(router.query.id, e, 20).then((result) => {
            setCommentListAll(result.data)
        })
    }

    useEffect(() => {
        if (router.query.id !== undefined) {
            getCourseMainCommentList(router.query.id).then((result) => {
                setCommentListAll(result.data)
            })
        }
    }, [router.query.id])


    const [commentListCount, setCommentListCount] = useState({})

    //获取评论列表总数量
    useEffect(() => {
        if (router.query.id !== undefined) {
            getCourseMainCommentListCount(router.query.id).then((result) => {
                if (result.data.length > 0) {
                    setCommentListCount(result.data[0])
                }
            })
        }
    }, [router.query.id])

    return (
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
                        {
                            commentListAll.map((item) => {
                                return <div key={item.id} className={"content"}>
                                    <div className={"item-content"}>
                                        <div className={"item-content-left"}>
                                            <div className={"item-content-left-img"}>
                                                <img src={BaseURL + item.header_url} alt=""/>
                                            </div>
                                            <div className={"about-user-count"}>
                                                <div className={"user-name"}>
                                                    <Link href={{
                                                            pathname: "/user/others",
                                                            query: {"id": item.id}
                                                    }}>
                                                        <a>{item.nick_name}</a>
                                                    </Link>
                                                </div>
                                                <div className={"study-count"}>
                                                    <span>学习67个课时评价</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"item-content-right"}>
                                            <div className={"Rate"}>
                                                <Rate disabled allowHalf defaultValue={item.score}/>
                                            </div>
                                            <div
                                                className={"create-time"}>{getFormatTimeFromDate(item.creation_time)}</div>
                                        </div>

                                    </div>
                                    <div className={"comment-intro"}>
                                        {
                                            item.content
                                        }


                                    </div>

                                </div>
                            })
                        }
                    </div>
                    <div className={"pagination-div"}>
                        <Pagination current={pagesCurrent} onChange={PaginationChange} pageSize={20}
                                    className={"sorter"} showSizeChanger={false} size="small"
                                    total={commentListCount.commentCount}/>

                    </div>

                </div>

            </div>


        </div>
    )
}

