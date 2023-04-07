require("./index.less")
import FlexLayout from "../../layout/flexLayout";
import React from "react";
import {Pagination} from "antd";
import {BaseURL} from "../../config/serverConfig";

export default function SeriesList({seriesCardList,PaginationOnChange,seriesCardTotal}) {

    return (
        <>
            <div className={"series-list bx"}>
                <FlexLayout>
                    {
                        seriesCardList.map((item)=>{
                            return <div key={item.id} className={"series-card column3-special"}>
                                <div className={"series-card-img"}>
                                    <a href="#">
                                        <img src={BaseURL + item.series_fm_url} alt=""/>
                                    </a>
                                </div>
                                <div className={"series-card-title"}>
                                    <a href="#">
                                        {
                                            item.title
                                        }
                                    </a>
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
                    <Pagination onChange={(e)=>{
                        PaginationOnChange(e)
                    }} size="small" total={seriesCardTotal} showSizeChanger={false}/>
                </div>
            </div>

        </>
    )
}