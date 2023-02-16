require("./index.less")
import React, {Component} from "react";

class Coursedetailschool extends Component{
    render(){
        return (
            <div className={"school"}>
                <div className={"school-img"}>
                    <div className={"school-img-center"}>
                        <a href="#">
                            <img src="/assets/images/schoolimg3.png" alt=""/>
                        </a>
                    </div>
                    <div className={"school-name"}>
                        王顺子
                    </div>
                </div>
                <div className={"school-intro"}>
                    微信关注：天天撩课
                </div>
            </div>
        )
    }
}
export default Coursedetailschool;

