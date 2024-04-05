import {getNetworkSchoolInfo} from "../../api/courseMainApi";

require("./index.less")
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";



export default function Coursedetailschool() {
    const router = useRouter()

    const [netSchoolInfo,setNetSchoolInfo] = useState({})
    useEffect(()=>{
        if (router.query.id !== undefined){
            getNetworkSchoolInfo(router.query.id).then((result)=>{
                setNetSchoolInfo(result.data[0])
            })
        }
    },[router.query])
    return (
        <div className={"school"}>
            <div className={"school-img"}>
                <div className={"school-img-center"}>
                    <Link href={{
                        pathname: "/provider",
                        query: {"id": netSchoolInfo.id}
                    }}>
                        <a>
                            <LazyLoadImage src={BaseURL + netSchoolInfo.organization_heard_url}/>
                        </a>

                    </Link>

                </div>
                <div className={"school-name"}>
                    {netSchoolInfo.school_title}
                </div>
            </div>
            <div className={"school-intro"}>
                {netSchoolInfo.organization_intro}
            </div>
        </div>
    )
}



