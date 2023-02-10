require("./index.less")
import React, {Component} from "react";

class Orderprice extends Component{
    render(){
        return (
            <div className={"reality-price"}>
                <div className={"position"}>
                    <div className={"reality-price-text"}>
                        <span>实付金额：</span>
                        <span>¥ 574.00</span>
                    </div>
                    <div className={"submit-button"}>
                        <a href="#">
                            提交订单
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Orderprice;

