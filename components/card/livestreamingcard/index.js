import { Card } from 'antd';



import React, {Component} from "react";

require("./index.less")
class Livestreamingcard extends Component{
    render(){
        const {count} = this.props;
        return (
            <div className={`live-streaming ${count ? count : ""}`}>
                <Card
                    className={"live-streaming-card"}
                    style={{
                        width: 260,
                    }}
                    bodyStyle={{
                        padding:10
                    }}
                    cover={
                        <img
                            alt="example"
                            src="/assets/images/teachercard.png"
                        />
                    }

                >
                    <div className={"bottom"}>
                        <div className={"Live-time"}>10月25日 20:00</div>
                        <div className={"classify-intro"}>
                            <span>自研</span>
                            <span>有道英语</span>
                            <span>"看连续剧"躺刷4500高频词</span>
                        </div>
                        <div className={"teacher-name"}>
                            <span>杨亮</span>
                            <span>云课堂英语课销量Top1</span>
                        </div>
                        <div className={"teacher-intro"}>模拟英语人生，学完就能用！</div>
                    </div>



                </Card>
            </div>
        )
    }
}
export default Livestreamingcard;

