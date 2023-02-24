
require("./index.less")
import React, {Component} from "react";
import Coursedetailcatalogue from "../coursedetailcatalogue";
import Coursedetailschool from "../coursedetailschool";
import Coursedetailschoolconsult from "../coursedetailschoolconsult";
import Coursedetailbelongingseries from "../coursedetailbelongingseries";
import Coursedetailcomment from "../coursedetailcomment";


class Coursedetaillayout extends Component{

    render(){
        return (
            <div className={"layout bx"}>

                {/*下面分别是介绍组件和目录组件到时候通过三目运算符控制显示哪个*/}
                {/*<Coursedetailintro/>*/}
                <Coursedetailcatalogue/>
                <div className={"layout-right"}>
                    {this.props.children}
                </div>

            </div>
        )
    }
}
export default Coursedetaillayout;

