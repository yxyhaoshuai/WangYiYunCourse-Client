import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";
import LazyLoadImage from "../lazyLoadImage/LazyLoadImage";

class Userpagesother extends Component{
    render(){
        const {userData} = this.props;
        return (
            <div className={"user-pages-bx"}>
                <div className={"user-background"}>
                    <div className={"user-background-bx bx"}>
                        <div className={"ux-user-info-top_img"}>
                            <LazyLoadImage src={BaseURL + userData.header_url}/>
                            <div className={"crown"}></div>
                        </div>
                        <div className={"user-name"}>
                            <span>{userData.nick_name}</span>

                        </div>
                        <div className={"user-intro"}>
                            <span>{userData.intro}</span>
                        </div>
                    </div>
                </div>
                <div className={"light bx"}>
                    <img src="/assets/images/light.png" alt=""/>
                </div>
            </div>
        )
    }
}
export default Userpagesother;

