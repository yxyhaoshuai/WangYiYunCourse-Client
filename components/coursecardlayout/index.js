import {Button, Card} from "antd";

require("./index.less")

import React, {Component} from "react";
import Livestreamingcard from "../livestreamingcard";

class Coursecardlayoutmore extends Component{

    render(){
        return (
                <Card
                    title={<h3>{this.props.titel}</h3>}
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

