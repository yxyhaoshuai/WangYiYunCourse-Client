import {Pagination} from "antd";

require("./index.less")
import React, {useState} from "react";
import FlexLayout from "../../layout/flexLayout";
import Searchcoursecard from "../card/searchcoursecard";
export default function ProviderCourse2() {
    //当前页数
    const [pageNum,setPageNum] = useState(1)
    //页面数发生改变
    const PaginationOnChange = (page_num)=>{
        console.log("当前页数",page_num)
        setPageNum(page_num)
    }

    //当前排序方式
    const [sortord,setSortord] = useState(true)
    const setSortordFun = ()=>{
        setSortord(!sortord)
    }


    return (
            <div className={"provider-course"}>
                <div className={"provider-course-top"}>
                    <div className={"provider-course-top-left"}>随到随学</div>
                    <div className={"provider-course-top-right"}>
                        {
                            sortord === true ?
                                <><span className={"current"}>最热</span>-<span onClick={setSortordFun}>最新</span></>
                                :
                                <><span onClick={setSortordFun}>最热</span>-<span className={"current"}>最新</span></>
                        }

                    </div>
                </div>
                <div className={"provider-course-center"}>
                    <FlexLayout>
                        {/*参考课程搜索页的卡片数据格式和样式*/}
                        {/*<Searchcoursecard data={item} key={item.id} count="column5" is_score/>*/}
                    </FlexLayout>
                </div>
                <div className={"provider-course-bottom"}>
                    <div className={"provider-course-bottom-position"}>
                        <Pagination current={pageNum} onChange={(e)=>{
                            PaginationOnChange(e)
                        }} size="small" total={90} showSizeChanger={false}/>
                    </div>
                </div>
            </div>

    )
}



