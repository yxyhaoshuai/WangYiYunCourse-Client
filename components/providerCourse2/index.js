import {useRouter} from "next/router";

require("./index.less")
import React, {useEffect, useState} from "react";
import FlexLayout from "../../layout/flexLayout";
import Searchcoursecard2 from "../searchcoursecard2";
import {getTeacherCourse} from "../../api/instructorApi";
export default function ProviderCourse2() {

    const router = useRouter()
    const [teacherCourse,setTeacherCourse] = useState([])



    useEffect(()=>{
        if (router.query.id !== undefined){
            getTeacherCourse(router.query.id).then((result)=>{
                setTeacherCourse(result.data)
            })
        }

    },[router.query])

    return (
            <div className={"provider-course"}>
                <div className={"provider-course-top"}>
                    <div className={"provider-course-top-left"}>随到随学</div>
                    <div className={"provider-course-top-right"}>


                    </div>
                </div>
                <div className={"provider-course-center"}>
                    <FlexLayout>
                        {
                            teacherCourse.map((item)=>{
                                return <Searchcoursecard2 data={item} key={item.id} count="column5" is_score/>
                            })
                        }

                    </FlexLayout>
                </div>
            </div>

    )
}



