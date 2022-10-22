require("./index.less")
import React, {Component} from "react";

class PublicityItem extends Component{
    render(){
        return (
            <div className={"publicity"}>
                <div className={"publicity-centre bx"}>
                    <div className={"special"}>
                        网易
                        <span className={"special"}>自研课程承诺:</span>
                    </div>
                    <div>
                        <img src="assets/images/publicityicon1.png"/>
                        <span>专业讲师授课</span>
                    </div>
                    <div>
                        <img src="assets/images/publicityicon2.png"/>
                        <span>深度系统化教学</span>
                    </div>
                    <div>
                        <img src="assets/images/publicityicon3.png"/>
                        <span>全程服务保障</span>
                    </div>
                    <div>
                        <img src="assets/images/publicityicon4.png"/>
                        <span>未开课不满意退款</span>
                    </div>


                </div>

            </div>
        )
    }
}
export default PublicityItem;

