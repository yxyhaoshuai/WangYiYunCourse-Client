import FlexLayout from "../../layout/flexLayout";
require("./index.less")
import React, {Component} from "react";
class Mypagelayout extends Component{
    render(){
        return (
            <div className={"my-course"}>
                <div className={"all bx"}>
                    <span>全部</span>
                </div>
                <div className={"course-item bx"}>
                    <div className={"series-result-card-middle"}>
                        <FlexLayout>
                            {this.props.children}
                        </FlexLayout>
                    </div>
                </div>

            </div>
        )
    }
}
export default Mypagelayout;

