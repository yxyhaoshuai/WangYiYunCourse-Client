require("./index.less")
import React, {Component} from "react";

class Myinfo extends Component{
    render(){
        return (
            <div className={"my-info"}>
                <div className={"my-info-bx bx"}>
                    <div className={"my-img"}>
                        <img src="/assets/images/my-img.png" alt=""/>

                    </div>
                    <div className={"greet-sb"}>
                        <div className={"greet-sb-text"}>
                            大大秀哥，晚上好
                        </div>
                        <div className={"saying"}>
                            Stay hungry,stay foolish.
                        </div>
                    </div>
                    <div className={"tiny-major-button"}>
                        <a href="#">找工作难？上微专业</a>
                    </div>

                </div>
            </div>
        )
    }
}
export default Myinfo;

