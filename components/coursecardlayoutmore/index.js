import {Button, Card} from "antd";

require("./index.less")

import React, {Component} from "react";
import Livestreamingcard from "../livestreamingcard";

class Coursecardlayoutmore extends Component{
    constructor(props) {
        super(props);
        this.Child = React.createRef();
    }
    render(){
        return (
            <>
                <Card
                    title="Default size card"
                    extra={<a href="#">More</a>}
                    style={{
                        width: 900,
                    }}

                    className="layout-card"

                >
                    <Button type="primary">操尼玛</Button>
                    <Livestreamingcard/>
                    <Livestreamingcard/>
                </Card>

            </>
        )
    }
}
export default Coursecardlayoutmore;

