import ProviderHomeAd from "../providerHomeAd";

require("./index.less")
import React from "react";
import ProviderTeacherCardItem from "../providerTeacherCard";
import ProviderCourseCardItem from "../providerCourseCardItem";
import CoursecardlayoutmoreProvider from "../layout/coursecardlayoutmoreProvider";



export default function ProviderHome({adLunbo,teacher,course}) {

    return (
        <>
            <ProviderHomeAd adLunbo={adLunbo}/>
            <div className={"provider-teacher-course-layout"}>
                <CoursecardlayoutmoreProvider className={"provider-teacher-course-layout"} titel={"推荐讲师"}>
                    <ProviderTeacherCardItem teacher={teacher}/>
                </CoursecardlayoutmoreProvider>
                <CoursecardlayoutmoreProvider className={"provider-teacher-course-layout"} titel={"推荐课程"}>
                    <ProviderCourseCardItem course={course}/>
                </CoursecardlayoutmoreProvider>
            </div>
        </>
    )
}



