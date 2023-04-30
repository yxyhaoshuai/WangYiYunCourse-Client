import FlexLayout from "../../layout/flexLayout";


require("./index.less")
import React from "react";
import Searchcoursecard from "../card/searchcoursecard";


export default function ProviderCourseCardItem() {

    return (
        <div className={"provider-course-card-layout"}>
            <FlexLayout>
                {/*参考课程搜索页的卡片接口格式*/}
                {/*<Searchcoursecard data={item} key={item.id} count="column5" is_score/>*/}
            </FlexLayout>
        </div>
    )
}



