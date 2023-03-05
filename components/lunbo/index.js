import {BaseURL} from "../../config/serverConfig";

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
        const lunbolist = this.props.lunbolist;

        return (
            <div className={"lunbo-component"}>
                <div className={"Left-jump iconfont"} onClick={this._handlerPrev}>&#xe620;</div>
                <div className={"Right-jump iconfont"} onClick={this._handlerNext}>&#xe62d;</div>

                {/*下面的代码中dom=>this._DOM=dom让它变成受控组件*/}
                <Carousel ref={dom=>this._DOM=dom} autoplay className="carousel-ul">
                    {
                        lunbolist.map((item)=>{
                            return <div>

                                <img key={item.id} src={BaseURL+item.ad_img_url} style={contentStyle}/>

                            </div>
                        })
                    }




                </Carousel>
            </div>
        )
    }
}
export default Lunbo;


