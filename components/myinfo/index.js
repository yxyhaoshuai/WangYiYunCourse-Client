import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React from "react";
import {globalMessage} from "../../tools/globalMessage";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";





export default function Myinfo({userData}) {

    return (
        <div className={"my-info"}>
            <div className={"my-info-bx bx"}>
                <div className={"my-img"}>
                    <LazyLoadImage src={BaseURL + userData.header_url}/>
                </div>
                <div className={"greet-sb"}>
                    <div className={"greet-sb-text"}>
                        {
                            userData.nick_name
                        }
                    </div>
                    <div className={"saying"}>
                        {
                            userData.intro
                        }
                    </div>
                </div>
                <div className={"tiny-major-button"}>
                    <a onClick={()=>{globalMessage("warning","微专业功能模块未开发！")}}>找工作难？上微专业</a>
                </div>

            </div>
        </div>
    )
}



