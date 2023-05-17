import {Card} from "antd";

require("./index.less")

import React from "react";





export default function Coursecardlayoutmore({titel,children,moreLink}) {

    return (
        <Card
            title={<h3>{titel}</h3>}
            extra={<a href={moreLink=== undefined ? "#": moreLink}><h4 className={"iconfont"}>更多&nbsp;&#xe658;</h4></a>}
            bodyStyle={{
                padding: 10
            }}

            className="layout-card"

        >
            <div className={"layout-card-content"}>
                {children}
            </div>

        </Card>
    )
}



