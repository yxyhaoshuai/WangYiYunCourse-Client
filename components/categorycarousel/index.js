import {Carousel} from "antd";
require("./index.less")
import React, {useRef} from "react";


export default function Categorycarousel() {
    const switchRef = useRef(null)
    //antd
    const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '360px',
        textAlign: 'center',
        background: '#364d79',
    };


    //轮播图两个按钮
    const _handlerPrev = ()=>{
        switchRef.current.prev()
    }
    const _handlerNext = ()=>{
        switchRef.current.next()
    }

    return (
        <div className={"carousel-bx bx"} >
            <div className={"Left-jump iconfont"} onClick={_handlerPrev}>&#xe620;</div>
            <div className={"Right-jump iconfont"} onClick={_handlerNext}>&#xe62d;</div>
            <Carousel ref={switchRef} autoplay>
                <div>
                    <a href="#"><img src="/assets/images/lunbo1.png" alt="" style={contentStyle}/></a>
                </div>
                <div>
                    <a href="#"><img src="/assets/images/lunbo2.png" alt="" style={contentStyle}/></a>
                </div>
                <div>
                    <a href="#"><img src="/assets/images/lunbo3.png" alt="" style={contentStyle}/></a>
                </div>
                <div>
                    <a href="#"><img src="/assets/images/lunbo4.png" alt="" style={contentStyle}/></a>
                </div>
                <div>
                    <a href="#"><img src="/assets/images/lunbo5.png" alt="" style={contentStyle}/></a>
                </div>
            </Carousel>
        </div>
    )
}