import FlexLayout from "../../layout/flexLayout";


require("./index.less")
import React from "react";
import Searchcoursecard from "../card/searchcoursecard";


export default function ProviderCourseCardItem({course}) {

    return (
        <div className={"provider-course-card-layout"}>
            <FlexLayout>
                {
                    course && course.map((item)=>{
                        return <Searchcoursecard data={item} key={item.id} count="column5" is_score/>
                    })
                }
            </FlexLayout>
        </div>
    )
}



