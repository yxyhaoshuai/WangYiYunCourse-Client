import CoursePlayer from "../../../components/coursePlayer";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getCourseOutline, getCourseOutlineTwo} from "../../../api/courseApi";
import {getCourseIntroduction} from "../../../api/courseIntroductionApi";
import {getUser} from "../../../api/userApi";

export default function CoursePlay() {

    //获取路由信息
    const router = useRouter()

    // 课程大纲数据
    const [outlineData2, setOutlineData2] = useState([])
    // 课程大纲数据
    const [outlineData, setOutlineData] = useState([])

    //课程详情信息数据
    const [courseData,setCourseData] = useState({})


    // useEffect(() => {
    //     getUser().then(userInfo=>{
    //         if (userInfo.id === undefined) {
    //             router.replace("/login")
    //         }
    //     })
    //
    // }, [])

    //获取课程详情信息
    useEffect(()=>{
        if (router.query.id !== undefined){
            getCourseIntroduction(router.query.id).then((result)=>{
                    setCourseData(result.data[0])
            })
        }
    },[router.query])


    // 只要课程id发生改变, 那么久需要重新发送网络请求, 获取最新的大纲列表
    useEffect(() => {
        if (!router.query.id) return;
        getUser().then((result)=>{
            getCourseOutline(router.query.id,result.id).then(result2=>{
                console.log(result2.data,"data2")
                setOutlineData2(result2.data)
            })
        })
    }, [router.query.id])


    // 只要课程id发生改变, 那么久需要重新发送网络请求, 获取最新的大纲列表
    useEffect(() => {
        if (!router.query.id) return;
        getCourseOutlineTwo(router.query.id).then((result)=>{
            console.log(result.data,"data")
            setOutlineData(result.data)
        })
    }, [router.query.id])


    return (
        <>
            <CoursePlayer data2={outlineData2} courseDetailData={courseData} data={outlineData}/>
        </>
    )
}