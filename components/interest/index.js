import {Button, Tabs} from "antd";

require("./index.less")
import React, {Component} from "react";

class Interest extends Component{
    render(){
        const _InterestShow = this.props._InterestShow;
        return (
            <div className={"interest"}>
                <div className={"ux-modal_dialog"}>
                    <div className={"close"}>
                        <span onClick={_InterestShow} className={"iconfont"}>&#xe614;</span>
                    </div>
                    <div className={"form_biaodan"}>
                        <div className={"text-tip"}>
                            <span>请选择你的学习兴趣</span>
                            <span>至少选择1个，可随时调整</span>
                        </div>
                        <div className={"tabs"}>
                            <Tabs defaultActiveKey="1" size={"large"}>
                                <Tabs.TabPane tab="有道英语" key="1">
                                    <Button className={"classify-button"} type="primary" shape={"round"}>分类1</Button>
                                    <Button className={"classify-button"} type="primary" shape={"round"}>分类2</Button>
                                    <Button className={"classify-button"} type="primary" shape={"round"}>分类3</Button>
                                    <Button className={"classify-button"} type="primary" shape={"round"}>分类4</Button>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="有道考研" key="2">
                                    Content of Tab Pane 2
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="有道考证" key="3">
                                    Content of Tab Pane 3
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="大学考试" key="4">
                                    Content of Tab Pane 4
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="IT互联网" key="5">
                                    Content of Tab Pane 5
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="设计创作" key="6">
                                    Content of Tab Pane 6
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="职场提升" key="7">
                                    Content of Tab Pane 7
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="兴趣副业" key="8">
                                    Content of Tab Pane 8
                                </Tabs.TabPane>
                            </Tabs>

                        </div>
                        <div className={"count"}>
                            已选0个:

                        </div>
                        <div className={"interest-buttun"}>
                                {/* 下面的按钮传入disabled属性可变成不可选状态*/}
                                <Button className={"buttun"} type="primary" shape="round" size={"large"}>
                                    我选好了
                                </Button>
                            <a href="">已选过, 登录帐号 ></a>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}
export default Interest;

