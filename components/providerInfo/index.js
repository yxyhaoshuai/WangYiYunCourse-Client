import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React from "react";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

export default function ProviderInfo({netSchoolInformation}) {

    return (
        <div className={"ux-provider-info"}>
            <div className={"ux-provider-info-bx bx"}>
                <div className={"ux-provider-info-left"}>
                    <LazyLoadImage src={BaseURL + netSchoolInformation.organization_heard_url}/>
                </div>
                <div className={"ux-provider-info-center"}>
                    <p>
                        <span>{netSchoolInformation.school_title}</span>
                        <span className={"iconfont"}>&#xe6f3;</span>
                    </p>
                    <p>{netSchoolInformation.organization_intro}</p>
                </div>
                <div className={"ux-provider-info-right"}>
                    <span className={"iconfont"}>&#xe882;</span>
                    <span>服务咨询</span>
                </div>
            </div>
        </div>

    )
}



