require("./index.less")
import React, {Component} from "react";

class Coursedetailschoolconsult extends Component{
    render(){
        return (
            <div className={"school-consult"}>
                <div className={"school-consult-img"}>
                    <div className={"school-consult-intro"}>
                        咨询
                    </div>
                    <div className={"img-consult"}>
                        <div className={"school-img-name"}>
                            <div className={"img"}>
                                <img src="/assets/images/schoolimg3.png" alt=""/>
                            </div>
                            <div className={"school-name-name"}>
                                王顺子
                            </div>
                            <div className={"consult"}>
                                咨询
                            </div>
                        </div>
                        <div className={"school-intro"}>
                            可在此在线咨询关于课程的内容、价格、售前、售后服务等相关信息

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Coursedetailschoolconsult;

