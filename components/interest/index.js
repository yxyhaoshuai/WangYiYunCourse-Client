import {Button, message, Tabs} from "antd";

require("./index.less")
import React, {useEffect, useState} from "react";
import {getUser} from "../../api/userApi";
import {getMyInterestArray, setMyInterestArray} from "../../api/homeApi";


export default function Interest({_InterestShow, _pushInterestArray, myInterestArray, data}) {

    //全局消息
    const success = () => {
        message.success({
            content: '添加兴趣成功！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    const [buttonState, setButtonState] = useState(false)

    const setButtonStatus = (a) => {
        return !myInterestArray.includes(a)
    }
    const _pushInterestNet = () => {
        getUser().then((result)=>{
            setMyInterestArray(myInterestArray,result.id)
            success()
            _InterestShow()
        })
    }
    useEffect(()=>{
        getUser().then((result)=>{
            getMyInterestArray(result.id).then((result2)=>{
                result2.data.forEach((item)=>{
                    _pushInterestArray(item.id)
                })

            })
        })
    },[])


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
                                                    if (myInterestArray.length > 0) {
                                                        setButtonState(true)
                                                    } else {
                                                        setButtonState(false)
                                                    }
                                                }
                                                } key={item2.id2} ghost={setButtonStatus(item2.id2)}
                                                               className={"classify-button"}
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
                        已选{myInterestArray.length}个:
                        {
                            myInterestArray.map((item) => {

                                return data.map((item2) => {
                                    return item2.map((item3) => {
                                        if (item3.id2 === item) {

                                            return <Button key={item3.id2} ghost={true}
                                                           className={"decide-classify-button"} type="primary"
                                                           shape={"round"}>{item3.class_name2}</Button>
                                        }
                                    })

                                })

                            })


                        }


                    </div>
                    <div className={"interest-buttun"}>
                        {/* 下面的按钮传入disabled属性可变成不可选状态*/}
                        <Button disabled={!buttonState} onClick={_pushInterestNet} className={"buttun"} type="primary"
                                shape="round" size={"large"}>
                            我选好了
                        </Button>
                        <a href="">已选过, 登录帐号 ></a>
                    </div>


                </div>
            </div>

        </div>
    )
}

