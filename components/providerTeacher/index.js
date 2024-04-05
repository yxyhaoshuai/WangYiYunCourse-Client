import React, {useEffect, useState} from "react";
import FlexLayout from "../../layout/flexLayout";
import ProviderTeacherCardItem from "../providerTeacherCard";
import {useRouter} from "next/router";
import {getNetSchoolTeacherList} from "../../api/providerApi";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

require("./index.less")

export default function ProviderTeacher() {
    const router = useRouter()
    const [teacherList, setTeacherList] = useState([])

    useEffect(() => {
        if (router.query.id !== undefined) {
            getNetSchoolTeacherList(router.query.id).then((result) => {
                setTeacherList(result.data)
            })
        }
    }, [router.query])

    useEffect(() => {
        console.log(teacherList)
    }, [teacherList])


    return (
        <div className={"provider-teacher"}>
            <FlexLayout>
                {
                    teacherList.map((item) => {
                        return <div key={item.id} className={"provider-teacher-card2 column5"}>
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
                    })
                }
            </FlexLayout>
        </div>

    )
}



