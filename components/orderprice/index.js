import {message} from "antd";

require("./index.less")
import React, {Component} from "react";

class Orderprice extends Component{
    render(){
        const courseList = this.props.courseList;
        const success = () => {
            message.info({
                content: '支付的功能模块还未扩展',
                className: 'custom-class',
                style: {
                    marginTop: '20vh',
                },
            });
        };
        return (
            <div className={"reality-price"}>
                <div className={"position"}>
                    <div className={"reality-price-text"}>
                        <span>实付金额：</span>
                        <span>￥{
                            courseList.reduce((a,b)=>{
                                return a+b.price
                            },0)
                        }</span>
                    </div>
                    <div className={"submit-button"}>
                        <a onClick={success}>
                            提交订单
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Orderprice;

