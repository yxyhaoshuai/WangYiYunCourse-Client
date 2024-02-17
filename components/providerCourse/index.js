import {Pagination} from "antd";

require("./index.less")
import React, {useEffect, useState} from "react";
import FlexLayout from "../../layout/flexLayout";
import Searchcoursecard from "../card/searchcoursecard";
import {useRouter} from "next/router";
import {getCourseListCount, getNetSchoolCourseListCourse} from "../../api/providerApi";
export default function ProviderCourse() {
    const router = useRouter()

    //当前页数
    const [pageNum,setPageNum] = useState(1)

    //页面数发生改变
    const PaginationOnChange = (page_num)=>{
        getNetSchoolCourseListCourse(router.query.id,page_num).then((result)=>{
            setCourseAll(result.data)
        })
        setPageNum(page_num)

    }

    //当前排序方式好评-最新
    const [sortord,setSortord] = useState(true)
    const setSortordFun = ()=>{
        setSortord(!sortord)
        if (sortord === true){
            getNetSchoolCourseListCourse(router.query.id,pageNum,10,"create_time").then((result)=>{
                setCourseAll(result.data)
            })
        }else if (sortord === false){
            getNetSchoolCourseListCourse(router.query.id,pageNum).then((result)=>{
                setCourseAll(result.data)
            })
        }
    }

    //课程列表数据
    const [courseAll,setCourseAll] = useState([])

    //课程列表总数量
    const [courseAllCount,setCourseAllCount] = useState(0)

    useEffect(()=>{
        if (router.query.id !== undefined){
            getNetSchoolCourseListCourse(router.query.id).then((result)=>{
                setCourseAll(result.data)
            })
        }
    },[router.query])


    useEffect(()=>{
        if (router.query.id !== undefined){
            getCourseListCount(router.query.id).then((result)=>{
                setCourseAllCount(result.data[0].courseCount)
            })
        }
    },[router.query])

    useEffect(() =>{
        console.log(courseAll, "打印")
    }, [courseAll])

    return (
            <div className={"provider-course"}>
                <div className={"provider-course-top"}>
                    <div className={"provider-course-top-left"}>随到随学</div>
                    <div className={"provider-course-top-right"}>
                        {
                            sortord === true ?
                                <><span className={"current"}>好评</span>-<span onClick={setSortordFun}>最新</span></>
                                :
                                <><span onClick={setSortordFun}>好评</span>-<span className={"current"}>最新</span></>
                        }

                    </div>
                </div>
                <div className={"provider-course-center"}>
                    <FlexLayout>
                        {
                            courseAll && courseAll.map((item)=>{
                                return <Searchcoursecard data={item} key={item.id} count="column5" is_score/>
                            })
                        }
                    </FlexLayout>
                </div>
                <div className={"provider-course-bottom"}>
                    <div className={"provider-course-bottom-position"}>
                        <Pagination current={pageNum} onChange={(e)=>{
                            PaginationOnChange(e)
                        }} size="small" total={courseAllCount} showSizeChanger={false}/>
                    </div>
                </div>
            </div>

    )
}



