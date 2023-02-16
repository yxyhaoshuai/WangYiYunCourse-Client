require("./less.less")
import React, {Component} from "react";

class Coursedetailbelongingseries extends Component{
    render(){
        return (
            <div className={"belonging-series"}>
                <div className={"school-consult-img"}>
                    <div className={"school-consult-intro"}>
                        所属系列课程
                    </div>
                    <div className={"img-consult"}>
                        <a href="#">撩课-王顺子-Python-爬虫实战系列</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Coursedetailbelongingseries;

