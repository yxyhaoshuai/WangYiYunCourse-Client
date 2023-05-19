import {Tabs} from "antd";

require("./index.less")
import React from "react";

export default function ProviderBar({setTabsStatus,tabsStatus}) {
    const tabsOnChange = (e)=>{
        setTabsStatus(e)
    }
    return (
        <div className={"ux-provider-info-bar"}>
            <div className={"ux-provider-info-bar-bx"}>
                <Tabs
                    activeKey={tabsStatus}
                    defaultActiveKey="1"
                    onChange={tabsOnChange}
                    items={[
                        {
                            label: `主页`,
                            key: '1',
                        },
                        {
                            label: `课程`,
                            key: '2',
                        },
                        {
                            label: `讲师`,
                            key: '3',
                        },
                        {
                            label: `关于我`,
                            key: '4',
                        }
                    ]}
                />
            </div>
        </div>

    )
}



