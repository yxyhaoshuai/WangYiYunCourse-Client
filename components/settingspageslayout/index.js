import Usersettingform from "../usersettingbasic";

require("./index.less")
import React, {Component} from "react";
import Usersettingaddress from "../usersettingaddress";

class Settingspageslayout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            settingshow:true,
            settingstyle:true

        };
    }
    _setsettingshow = () => {

        this.setState({
            settingshow:!this.state.settingshow,
            settingstyle:!this.state.settingstyle
        })
    }
    render(){

        return (
            <div className={"settings bx"}>
                <div className={"tabs-bar"}>

                    {/*not-get-focus没有获取焦点的样式，get-focus是获取焦点的样式*/}
                    <div onClick={this._setsettingshow} className={this.state.settingshow ? "get-focus": "not-get-focus"}>
                        资料设置
                    </div>
                    <div onClick={this._setsettingshow} className={this.state.settingstyle ? "not-get-focus": "get-focus"}>
                        收货地址设置
                    </div>
                </div>

                {
                    this.state.settingshow ? <Usersettingform/>:<Usersettingaddress/>
                }
            </div>
        )
    }
}
export default Settingspageslayout;

