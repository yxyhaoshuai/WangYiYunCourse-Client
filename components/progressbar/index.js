require("./index.less")
import React, {Component} from "react";

class Progressbar extends Component{
    constructor(props) {
        const count=props.count;
        const total=props.total;
        super(props);
        this.state = {width:count/total*100};
    }

    render(){
        const count = this.props.count;
        const width = this.state.width;


        return (
            <div className={"process-wrap bx"}>
                <div className={"process-wrap-top"}>
                    <div className={"strip-bgc"}>
                        <div className={"strip-color"} style={{width: `${width}%`}}>

                        </div>

                    </div>
                    <div className={"continue-learning"}>
                        <a href="#">继续学习</a>
                    </div>
                </div>
                <div className={"process-wrap-bottom"}>
                    <span>目前已完成</span>
                    <span>{count}</span>
                    <span>个课时, 加油啊！</span>
                    <span>下一个课时 : Python文件操作-案例1-文件分类-代码实现-上</span>

                </div>

            </div>
        )
    }
}
export default Progressbar;

