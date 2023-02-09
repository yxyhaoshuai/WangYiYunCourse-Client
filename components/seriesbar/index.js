require("./index.less")
import React, {Component} from "react";

class Seriesbar extends Component{
    render(){
        return (
            <div className={"series-bar"}>
                <div className={"series-bar-bx bx"}>
                    <div className={"tabs-bar"}>
                        <a href={"#"}>
                            爬虫实战-网络剖析
                        </a>
                    </div>
                    <div className={"tabs-bar"}>
                        <a href={"#"}>
                            爬虫实战-网络实战
                        </a>
                    </div>
                    <div className={"tabs-bar"}>
                        <a href={"#"}>
                            爬虫实战-数据解析
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Seriesbar;

