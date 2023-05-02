import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {getCourseOutline} from "../../api/courseIntroductionApi";
require("./index.less")

export default function Coursedetailcatalogue({courseOutline}) {

    const router = useRouter()

    return (
        <div className={"layout-left2"}>
            <div className={"fit-people2"}>目录</div>
            <div className={"course-item"}>
                {/*下面代码已废弃，但是有可能到时候我加上章节的功能模块的时候可能会重用*/}
                {/*<div className={"chapter"}>*/}
                {/*    <span>章节1:</span>*/}
                {/*    <span>python-爬虫-概述</span>*/}
                {/*    <span className={"try"}>试看</span>*/}
                {/*</div>*/}
                {
                    courseOutline.map((item) => {
                        return <div key={item.id} className={"lesson"}>
                            <Link href={{
                                pathname: "/course/courseLearn",
                                query: {"id": router.query.id,"videoIndex": item.num}
                            }}>
                                <a>
                                    <div>
                                        <span>课时{item.num}</span>
                                    </div>
                                    <div>
                                        <span>视频</span>
                                    </div>
                                    <div>
                                        <span>{item.title}</span>
                                    </div>
                                    <div>
                                        <span className={"iconfont"}>&#xe61c;</span>
                                    </div>
                                    <div>
                                        <span>点击试看</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

