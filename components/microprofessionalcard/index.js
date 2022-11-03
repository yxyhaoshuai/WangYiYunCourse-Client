require("./index.less")
import React, {Component} from "react";

class Microprofessionlcard extends Component{
    render(){
        return (
            <div className={"course-card-micro"}>
                <div className={"course-card_img"}>
                    <div className={"course-card_img_jpk"}>
                        <img src="assets/images/microteachercardimg.png" alt=""/>
                    </div>

                </div>
                <div className={"course-card_content"}>
                    <div className={"classify-intro"}>
                        网易数据分析高薪实战营【升职加薪】
                    </div>
                </div>

            </div>
        )
    }
}
export default Microprofessionlcard;

