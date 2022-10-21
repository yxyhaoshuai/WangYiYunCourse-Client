import {Button} from "antd";

require("./index.less")

import React, {Component} from "react";


class CategoryAdd extends Component {


    render() {

        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };

        return (

                <div>
                    <Button type="primary">Primary Button</Button>
                </div>
        )
    }
}
export default CategoryAdd;
