import {getLeftMiniAd} from "../../api/homeApi";

require("./index.less")
import React, {useEffect, useState} from "react";
import {BaseURL} from "../../config/serverConfig";





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
                            <img src={BaseURL + miniAdUrl.ad_url} alt=""/>
                        </a>

                        <div className={"x"} onClick={_turnOffAds}>

                        </div>

                    </div>
                ):null
            }
        </>
    )
}



