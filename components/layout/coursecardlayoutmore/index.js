import {Button, Card} from "antd";

require("./index.less")

import React, {Component} from "react";
import Livestreamingcard from "../../card/livestreamingcard";

class Coursecardlayoutmore extends Component{

    render(){
        return (
                <Card
                    title={<h3>{this.props.titel}</h3>}
                    extra={<a href="#"><h4 className={"iconfont"}>更多&nbsp;&#xe658;</h4></a>}
                    bodyStyle={{
                        padding: 10
                    }}

                    className="layout-card"

                >
                    <div className={"layout-card-content"}>
                        {this.props.children}
                    </div>

                </Card>


        )
    }
}
export default Coursecardlayoutmore;

