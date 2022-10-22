require("./index.less")

import React, {Component} from "react";
import {Carousel} from "antd";

class Lunbo extends Component{
    _handlerPrev = ()=>{
        this._DOM.prev()
    }
    _handlerNext = ()=>{
        this._DOM.next()
    }
    render(){
        const contentStyle = {
            height: '100%',
        };

        return (
            <div className={"lunbo-component"}>
                <div className={"Left-jump iconfont"} onClick={this._handlerPrev}>&#xe620;</div>
                <div className={"Right-jump iconfont"} onClick={this._handlerNext}>&#xe62d;</div>

                {/*下面的代码中dom=>this._DOM=dom让它变成受控组件*/}
                <Carousel ref={dom=>this._DOM=dom} autoplay className="carousel-ul">
                    <div>

                            <img src={"assets/images/lunbo1.png"} style={contentStyle}/>

                    </div>
                    <div>
                        <a href={"#"}>
                            <img src={"assets/images/lunbo2.png"} style={contentStyle}/>
                        </a>
                    </div>
                    <div>
                        <a href={"#"}>
                            <img src={"assets/images/lunbo3.png"} style={contentStyle}/>
                        </a>
                    </div>
                    <div>
                        <a href={"#"}>
                            <img src={"assets/images/lunbo4.png"} style={contentStyle}/>
                        </a>
                    </div>
                    <div>
                    <a href={"#"}>
                        <img src={"assets/images/lunbo5.png"} style={contentStyle}/>
                    </a>
                </div>
                    <div>
                        <a href={"#"}>
                            <img src={"assets/images/lunbo6.png"} style={contentStyle}/>
                        </a>
                    </div>
                    <div>
                        <a href={"#"}>
                            <img src={"assets/images/lunbo7.png"} style={contentStyle}/>
                        </a>
                    </div>

                </Carousel>
            </div>
        )
    }
}
export default Lunbo;


