require("./index.less")
import React, {Component} from "react";

class Coursenotes extends Component{
    render(){
        return (
            <div className={"layout-left3"}>
                <div className="index-neme">
                    <span className={"notes"}>笔记</span>
                    <span>
                        <span className={"optimal-notes active"}>最优笔记</span>
                        -
                        <span className={"Latest-notes"}>最新笔记</span>
                    </span>
                </div>
            </div>
        )
    }
}
export default Coursenotes;

