import {removeUser} from "../../api/userApi";

require("./index.less")
import React, {Component} from "react";

class Orderlayout extends Component{
    render(){
        const courseitem = this.props.children;
        const {courseList,nickName,_loginShow} = this.props;

        const chengeUser = ()=>{
            _loginShow()
            removeUser()
        }

        return (
            <div className={"order bx"}>
                <div className={"order-user"}>
                    <span>购买帐号：</span>
                    <span>{nickName}</span>
                    <span><a onClick={chengeUser}>更换帐号 ></a></span>
                </div>
                <div className={"order-phone-num"}>
                    <span>手机号：</span>
                    <span>未绑定</span>
                </div>
                <div className={"order-course-include"}>
                    <span>该系列课程包含以下课程：</span>
                </div>
                <div className={"notes"}>
                    <div className={"notes-text"}>
                        <span className={"iconfont"}>&#xe7f4;</span>
                    </div>
                    <div className={"notes-text"}>
                        <div>购买后不支持退款、转让，请确认开课时间或有效期后再提交订单</div>
                        <div>已购买过的课程会从实付金额中扣除</div>
                    </div>
                </div>
                <div className={"order-accept"}>
                    <span>确认订单信息</span>
                </div>
                {courseitem}
                <div className={"total"}>
                    <div className={"total-text"}>
                        <span>总计:</span>
                        <span>¥
                            {
                                courseList.reduce((a,b)=>{
                                    return a+b.price
                                },0)
                            }</span>
                    </div>
                </div>
                <div className={"promotion-code"}>
                    <a href="">我有优惠码，点此兑换</a>
                </div>
            </div>
        )
    }
}
export default Orderlayout;

