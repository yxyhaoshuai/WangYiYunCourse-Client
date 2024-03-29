import {addUserStudyIndex} from "../../api/courseMainApi";

require("./index.less")
import {Rate} from "antd";
import {useEffect, useState} from "react";
import {BaseURL} from "../../config/serverConfig";
import {useRouter} from "next/router";
import {getUser, updateUserStudyHistory} from "../../api/userApi";
import Link from "next/link";

export default function CoursePlayer({data, courseDetailData}) {

    const router = useRouter()

    const [currentVideoIndex, setCurrentVideoIndex] = useState(-1)

    const [dp, setDp] = useState()

    const [courseTitle, setCourseTitle] = useState("加载中......")



    useEffect(() => {
        if (data.length === 0) return;
        import("dplayer").then(({default: DPlayer}) => {
            const dp = new DPlayer({
                container: document.getElementById('like-player'),
                screenshot: true,
                video: {
                    url: ""
                }
            });
            setDp(dp)

            let {o_id} = router.query
            let index = data.findIndex(item => item.id + "" === o_id + "")

            if (router.query.videoIndex !== undefined){
                setCurrentVideoIndex(router.query.videoIndex - 1)
            } else {
                setCurrentVideoIndex(index === -1 ? 0 : index)
            }


        })
    }, [data])

    useEffect(() => {
        if (data.length === 0 || currentVideoIndex < 0 || currentVideoIndex > data.length - 1) return;
        let {video_url, id} = data[currentVideoIndex]
        // console.log("播放视频", video_url)
        if (dp) {
            getUser().then(userInfo => {
                updateUserStudyHistory(userInfo.id, id, 1)
            })

            dp.switchVideo({
                url: BaseURL + video_url
            })
            dp.play()
        }
    }, [currentVideoIndex])

    useEffect(() => {
        if (data.length > 0 && data[currentVideoIndex] !== undefined) {
            setCourseTitle(data[currentVideoIndex].title)
        }

    }, [data, currentVideoIndex])


    useEffect(() => {
        if (router.query.id !== undefined){
            getUser().then((result)=>{
                addUserStudyIndex(result.id,router.query.id,currentVideoIndex+1)
            })
        }
    }, [currentVideoIndex])


    return (
        <div className="play-container">
            <div className="left">
                <div className="top">
                    <Link href={"http://localhost:3000/course/detail?id=" + router.query.id}>
                        <Link href={{
                            pathname: "/course/courseMain",
                            query: {"id": router.query.id}
                        }}>
                            <a className="back-course">返回课程主页</a>
                        </Link>
                    </Link>
                    <span className="pre-course" onClick={() => {
                        let destIndex = currentVideoIndex - 1
                        destIndex = destIndex < 0 ? 0 : destIndex
                        setCurrentVideoIndex(destIndex)
                    }}/>
                </div>
                <div className="play-pane">
                    <p className="class-title">
                        <span>课时{currentVideoIndex + 1}：</span>
                        <span>{courseTitle}</span>
                    </p>
                    <div className="player">
                        <div id="like-player">

                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span className="next-course" onClick={() => {
                        let destIndex = currentVideoIndex + 1
                        destIndex = destIndex > data.length - 1 ? data.length - 1 : destIndex
                        setCurrentVideoIndex(destIndex)
                    }}/>
                </div>
            </div>
            <div className="right">
                <div className={"course-information"}>
                    <div className={"course-information-left"}>
                        <div className={"course-title"}>
                            <Link href={{
                                pathname: "/course/courseMain",
                                query: {"id": router.query.id}
                            }}>
                                <a>{courseDetailData.coursetitle}</a>
                            </Link>
                        </div>
                        <div className={"rate-div"}>
                            {
                                courseDetailData.avg_score === undefined ?
                                    ""
                                    :
                                    <Rate allowHalf className={"score-div"} disabled
                                          defaultValue={courseDetailData.avg_score}/>
                            }
                            <span>{courseDetailData.avg_score}</span>
                        </div>
                        <div className={"course-teacher-name"}>
                            发布者：{courseDetailData.teacher_name}
                        </div>

                    </div>
                    <div className={"course-information-right"}>
                        <img src={BaseURL + courseDetailData.courseurl} alt=""/>
                        <div className={"mask"}>
                            <Link href={{
                                pathname: "/course/courseMain",
                                query: {"id": router.query.id}
                            }}>
                                <a></a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="title">
                    课程目录
                </div>
                <div className="items">
                    <div className="course-dg no-view">
                        <ul className="dg">
                            {
                                data.map((item, index) => {
                                    return <li key={item.id} className={currentVideoIndex === index ? "current" : ""}>
                                        <span className="c-num">课时{item.num}: </span>
                                        <span className="c-progress"/>
                                        <span className="c-title" onClick={() => {
                                            setCurrentVideoIndex(index)
                                        }}>{item.title}</span>
                                    </li>

                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}