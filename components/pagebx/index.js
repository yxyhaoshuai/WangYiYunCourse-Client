import {Checkbox} from "antd";

require("./index.less")
import React, {Component} from "react";

class Pagebx extends Component{

    render(){

        return (
            <div className={"cart-bx bx"}>
                {this.props.children}
            </div>
        )
    }
}
export default Pagebx;


