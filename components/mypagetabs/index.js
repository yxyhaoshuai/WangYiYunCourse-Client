import {Tabs} from "antd";

require("./index.less")
import React, {Component} from "react";

class Mypagetabs extends Component{
    render(){
        return (
            <div className={"tabs"}>
                <div className={"tabs-bx bx"}>
                    <Tabs onChange={(e)=>{
                        this.props.setCurrentStateFunction(e)

                    }} defaultActiveKey="1">
                        <Tabs.TabPane tab="课程" key="1">
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="收藏夹" key="2">
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Mypagetabs;

