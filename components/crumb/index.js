import {Breadcrumb} from "antd";

require("./index.less")
import React, {Component} from "react";

class Crumb extends Component{
    render(){
        return (
            <div className={"crumb-box"}>
                <div className={"crumb-box-h bx"}>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                        <Breadcrumb.Item>搜索结果</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        )
    }
}
export default Crumb;

