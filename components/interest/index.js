import {Button, Tabs} from "antd";

require("./index.less")
import React, {Component} from "react";

class Interest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,
            myInterestArray:this.props.myInterestArray
        };
    }

    render() {
        const _InterestShow = this.props._InterestShow;
        const data = this.state.data;
        const _pushInterestArray = this.props._pushInterestArray;
        const myInterestArray = this.state.myInterestArray;
        const setButtonStatus = (a)=>{
            return !myInterestArray.includes(a)
        }

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

                                {
                                    data.map((item) => {
                                        return <Tabs.TabPane tab={item[0].class_name1} key={item[0].id1}>
                                            {
                                                item.map((item2) => {
                                                    return <Button onClick={() => {
                                                        _pushInterestArray(item2.id2)
                                                    }
                                                    } key={item2.id2} ghost={setButtonStatus(item2.id2)} className={"classify-button"}
                                                                   type="primary"
                                                                   shape={"round"}>{item2.class_name2}</Button>
                                                })
                                            }
                                        </Tabs.TabPane>

                                    })
                                }
                            </Tabs>

                        </div>
                        <div className={"count"}>
                            已选0个:
                            {
                             myInterestArray.map((item)=>{

                                 return data.map((item2)=>{
                                     return item2.map((item3)=>{
                                         if (item3.id2===item){

                                             return <Button key={item3.id2} ghost={true} className={"decide-classify-button"} type="primary" shape={"round"}>{item3.class_name2}</Button>
                                         }
                                     })

                                 })

                                })




                            }



                        </div>
                        <div className={"interest-buttun"}>
                            {/* 下面的按钮传入disabled属性可变成不可选状态*/}
                            <Button onClick={this.props._pushInterestNet} className={"buttun"} type="primary" shape="round" size={"large"}>
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

