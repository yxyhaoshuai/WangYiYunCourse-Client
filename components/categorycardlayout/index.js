import Livestreamingcard from "../card/livestreamingcard";

require("./index.less")
import React, {Component} from "react";
import FlexLayout from "../../layout/flexLayout";
import Categorycard from "../card/categorycard";

class Categorycardlayout extends Component{
    render(){
        const {layoutTitle} = this.props;
        return (
            <div className={"home-card-layout bx"}>
                <div className={"yd-open-course-view_title"}>{layoutTitle}</div>
                <FlexLayout>
                    {this.props.children}
                </FlexLayout>
            </div>
        )
    }
}
export default Categorycardlayout;

