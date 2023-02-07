require("./index.less")
import {Tabs} from "antd";
import 'antd/dist/antd.less';

import React, {Component} from "react";
import Killcard from "../../card/killcard";

class Activitytabslayout extends Component{
    render(){
        const onTabClick = (key) => {
            console.log(key);
        };
        return (
            <>
                <Tabs onTabClick={onTabClick} type="card" className="font-color">
                    <Tabs.TabPane tab="今天 10:00开抢" key="1">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="今天 14:00开抢" key="2">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="今天 20:00开抢" key="3">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="明天 10:00开抢" key="4">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="明天 14:00开抢" key="5">
                        <div className={"display-flex"}>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                            <Killcard></Killcard>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="明天 20:00开抢" key="6">
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

