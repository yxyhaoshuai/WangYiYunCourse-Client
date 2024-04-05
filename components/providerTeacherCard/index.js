import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {useEffect} from "react";
import Link from "next/link";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

export default function ProviderTeacherCardItem({teacher}) {
    useEffect(() => {
        console.log(teacher)
    }, [teacher])
    return (
        <div className={"provider-teacher-card-display"}>
            {
                teacher.slice(0, 4).map((item) => {
                    if (item.is_school_recommend === 1) {
                        return <div key={item.id} className={"provider-teacher-card"}>
                            <Link href={{
                                pathname: "/instructor",
                                query: {"id": item.id}
                            }}>
                                <a>
                                    <div className={"teacher-head"}>
                                        <LazyLoadImage src={BaseURL + item.header_url}/>
                                    </div>
                                    <div className={"teacher-content"}>
                                        <div className={"teacher-name"}>{item.name}</div>
                                        <div className={"teacher-intro"}>{item.intro}</div>
                                    </div>
                                </a>
                            </Link>

                        </div>
                    }

                })
            }

        </div>
    )
}