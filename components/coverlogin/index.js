require("./index.less")
import React, {Component} from "react";

class Coverlogin extends Component{
    render(){
        const _loginShow = this.props._loginShow;
        return (
                <div className={"cover"}>
                    <div className={"ux-modal_dialog"}>
                        <div className={"close"}>
                            <span onClick={_loginShow} className={"iconfont"}>&#xe614;</span>
                        </div>
                    </div>

                </div>
        )
    }
}
export default Coverlogin;

