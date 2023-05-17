require("./index.less")
import React, {Component} from "react";

class Footerad extends Component{
    render(){
        return (
            <div className={"footer-setting bx"}>
                <div className={"footer-setting-left"}>
                    <a href="https://study.163.com/curricula/cs.htm?inref=web_index_bottom_jisuanji">
                        <img src="assets/images/footeradimg.png" alt=""/>
                    </a>
                </div>
                <div className={"footer-setting-right"}>
                    <a href="https://ke.study.163.com/course/detail/100130446">
                        <img src="assets/images/footeradimg2.png" alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}
export default Footerad;

