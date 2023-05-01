import {Card} from "antd";
import React from "react";
require("./index.less")


export default function CoursecardlayoutmoreProvider({titel,children}) {

    return (
        <Card
            title={<h3>{titel}</h3>}
            extra={<a href={"#"}><h4 className={"iconfont"}>更多&nbsp;&#xe658;</h4></a>}
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





