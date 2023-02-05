import {Tabs} from "antd";
import 'antd/dist/antd.less';
require("./index.less")
import React, {Component} from "react";
import Killcard from "../killcard";

class Activitytabslayout extends Component{
    render(){
        const onChange = (key) => {
            console.log(key);
        };
        return (
            <>
                <Tabs onChange={onChange} type="card" className="font-color">
                    <Tabs.TabPane tab={
                        <div>哈哈哈</div>
                    } key="1">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 2" key="2">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 3" key="3">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                </Tabs>





            </>
        )
    }
}
export default Activitytabslayout;

