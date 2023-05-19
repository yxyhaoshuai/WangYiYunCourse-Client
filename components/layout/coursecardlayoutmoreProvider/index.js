import {Card} from "antd";
import React from "react";
require("./index.less")


export default function CoursecardlayoutmoreProvider({titel,children,setTabsStatus}) {
    const setTabsKey = ()=>{
        if (titel === "推荐讲师"){
            setTabsStatus("3")
        }else if (titel === "推荐课程"){
            setTabsStatus("2")
        }
    }
    return (
        <Card
            title={<h3>{titel}</h3>}
            extra={<a onClick={setTabsKey}><h4 className={"iconfont"}>更多&nbsp;&#xe658;</h4></a>}
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





