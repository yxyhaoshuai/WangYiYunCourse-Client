import {Button, notification} from "antd";
import 'antd/dist/antd.css';

require("./index.less")

import React, {Component} from "react";


class CategoryAdd extends Component {



    render() {

        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        };

        return (

                <div className={"nihao"}>
                    <Button type="primary" className="caonma" onClick={openNotification}>
                        Open the notification box
                    </Button>
                </div>
        )
    }
}
export default CategoryAdd;
