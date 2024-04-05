import Link from "next/link";

require("./index.less")
import FlexLayout from "../../layout/flexLayout";
import React from "react";
import {Pagination} from "antd";
import {BaseURL} from "../../config/serverConfig";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

export default function SeriesList({seriesCardList,PaginationOnChange,seriesCardTotal,pages}) {

    return (
        <>
            <div className={"series-list bx"}>
                <FlexLayout>
                    {
                        seriesCardList.map((item)=>{
                            return <div key={item.id} className={"series-card column3-special"}>
                                <div className={"series-card-img"}>
                                    <Link href={{
                                        pathname:"/series",
                                        query:{"id":item.id}
                                    }} >
                                        <a>
                                            <LazyLoadImage src={BaseURL + item.series_fm_url}></LazyLoadImage>
                                        </a>
                                    </Link>
                                </div>
                                <div className={"series-card-title"}>
                                    <Link href={{
                                        pathname:"/series",
                                        query:{"id":item.id}
                                    }} >
                                        <a>
                                            {
                                                item.title
                                            }
                                        </a>
                                    </Link>
                                </div>
                                <div className={"series-card-intro"}>
                                    {
                                        item.intro
                                    }
                                </div>
                            </div>
                        })
                    }
                </FlexLayout>
                <div className={"pagination-bottom"}>
                    <Pagination current={pages} onChange={(e)=>{
                        PaginationOnChange(e)
                    }} size="small" total={seriesCardTotal} showSizeChanger={false}/>
                </div>
            </div>

        </>
    )
}