require("./index.less")
import React from "react";


export default function SearchResultBig({searchResult,keyword}) {

    return (
        <div className={"search-result-big"}>
            <div className={"search-result-middle bx"}>
                <div className={"search-result-text"}>
                    <span>共有</span>
                    <span>{searchResult.length}</span>
                    <span>个包含“</span>
                    <span>{keyword}</span>
                    <span>”的课程提供方</span>
                </div>
            </div>
        </div>
    )
}



