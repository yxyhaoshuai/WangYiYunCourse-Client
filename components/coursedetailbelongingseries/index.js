import {getCourseMainSeries} from "../../api/courseMainApi";

require("./less.less")
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";






export default function Coursedetailbelongingseries({seriesCourseInfo}) {
    return (
        <div className={"belonging-series"}>
            <div className={"school-consult-img"}>
                <div className={"school-consult-intro"}>
                    所属系列课程
                </div>
                <div className={"img-consult"}>
                    <Link href={{
                        pathname: "/series",
                        query: {"id": seriesCourseInfo.id}
                    }}>
                        <a>{seriesCourseInfo.title}</a>
                    </Link>

                </div>
            </div>
        </div>
    )
}



