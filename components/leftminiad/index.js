import {getLeftMiniAd} from "../../api/homeApi";

require("./index.less")
import React, {useEffect, useState} from "react";
import {BaseURL} from "../../config/serverConfig";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";





export default function Leftminiad() {

    const [showElem,setShowElem] = useState(true)

    const _turnOffAds=()=>{
        setShowElem(false)
    }

    const [miniAdUrl,setMiniAdUrl] = useState({})

    useEffect(()=>{
        getLeftMiniAd().then((result)=>{
            setMiniAdUrl(result.data[0])
        })
    },[])


    return (
        <>
            {
                showElem ? (
                    <div className={"Left-mini-ad"}>
                        <a href={"/course/introduction?id=" + miniAdUrl.course_id}>
                            <LazyLoadImage src={BaseURL + miniAdUrl.ad_url}/>
                        </a>

                        <div className={"x"} onClick={_turnOffAds}>

                        </div>

                    </div>
                ):null
            }
        </>
    )
}



