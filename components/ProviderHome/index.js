import ProviderHomeAd from "../providerHomeAd";

require("./index.less")
import React from "react";
import Coursecardlayoutmore from "../layout/coursecardlayoutmore";
import ProviderTeacherCardItem from "../providerTeacherCard";
import ProviderCourseCardItem from "../providerCourseCardItem";
import FlexLayout from "../../layout/flexLayout";


export default function ProviderHome() {

    return (
        <>
            <ProviderHomeAd/>
            <div className={"provider-teacher-course-layout"}>
                <Coursecardlayoutmore className={"provider-teacher-course-layout"} titel={"推荐讲师"}>
                    <ProviderTeacherCardItem/>
                </Coursecardlayoutmore>
                <Coursecardlayoutmore className={"provider-teacher-course-layout"} titel={"推荐课程"}>
                    <ProviderCourseCardItem/>
                </Coursecardlayoutmore>
            </div>
        </>
    )
}



