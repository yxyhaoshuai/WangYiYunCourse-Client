require("./index.less")
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {getOfficialNotice} from "../../api/officialNotice";
import {message} from "antd";

export default function Messagetabitem() {

    //全局消息
    const success = () => {
        message.success({
            content: '不好意思哦，网站架构还没有扩展到下面这几个条目，以后会扩展越来越多的模块，敬请期待！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //选中的tab状态
    const [tabCurrentStatus,setTabCurrentStatus] = useState(0)
    //tab的文本内容
    const tabTextContent = ["平台通知","互动提醒","课程提醒","私信"]
    //页面内容信息
    const router = useRouter()
    //改变选中状态
    const setTabCurrentStatusMethod = (index)=>{
        setTabCurrentStatus(index)
        if (index>0){
            success()
        }
    }
    //数据条目
    const [dataItem,setDataItem] = useState([])

    //发送网络请求拿官方消息的数据条目
    useEffect(()=>{
        getOfficialNotice().then((result)=>{
            setDataItem(result.data)

        })


    },[router.route])

    return (
            <div className={"flex-layout bx"}>
                <div className={"md-message-layout_tab"}>
                    {
                        tabTextContent.map((item,index)=>{
                            return <div key={index} onClick={()=>setTabCurrentStatusMethod(index)} className={`um-message-tab-view_item ${index===tabCurrentStatus? "current" : ""}`}>{item}</div>
                        })
                    }
                </div>
                <div className={"md-message-layout_lst"}>
                    <ul className={"ux-message-list-view_ul"}>
                        {
                            dataItem.map((item)=>{
                                return <li key={item.id}>
                                <span>
                                    <a href="#" >{item.official_notice}</a>
                                </span>

                                <span>
                                    {
                                        item.create_time
                                    }
                                </span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
    )
}

