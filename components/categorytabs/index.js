import {Tabs} from "antd";

require("./index.less")
import React from "react";
import FlexLayout from "../../layout/flexLayout";
import Categoryfreecard from "../card/categoryfreecard";
import {getClassTwoCourses} from "../../api/categoryApi";


export default function Categorytabs({classTwoCourse,setClassTwoCourse,categoryId}) {
    const onChange = (key) => {
        if (key === "2"){
            console.log(key)
            getClassTwoCourses(categoryId,"score").then((result)=>{
                setClassTwoCourse(result.data)
            })
        } else if (key === "1"){
            console.log(key)
            getClassTwoCourses(categoryId,"studyCount").then((result)=>{
                setClassTwoCourse(result.data)
            })
        }
    };
    return (

        <>
            {
                classTwoCourse.length > 0 ? <div className={"m2-search-course"}>
                    <div className={"m2-search-course-bx bx"}>
                        <div className={"m2-search-course-bx-tabs"}>
                            <Tabs
                                defaultActiveKey="1"
                                onChange={onChange}
                                items={[
                                    {
                                        label: `畅销`,
                                        key: '1'
                                    },
                                    {
                                        label: `好评`,
                                        key: '2'
                                    }
                                ]}
                            />
                        </div>
                        <FlexLayout className={"flex-container"}>
                            {
                                classTwoCourse.map((item)=>{
                                    return <Categoryfreecard data={item} key={item.courseId} score={item.score}/>
                                })
                            }

                        </FlexLayout>
                    </div>
                </div> : ""
            }
        </>

    )
}