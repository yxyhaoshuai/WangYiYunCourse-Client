require("./index.less")
import React, {Component} from "react";

class Footerad extends Component{
    render(){
        return (
            <div className={"footer-setting bx"}>
                <div className={"footer-setting-left"}>
                    <a href="#">
                        <img src="assets/images/footeradimg.png" alt=""/>
                    </a>
                </div>
                <div className={"footer-setting-right"}>
                    <a href="#">
                        <img src="assets/images/footeradimg2.png" alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}
export default Footerad;

