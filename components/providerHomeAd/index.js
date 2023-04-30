require("./index.less")
import {Carousel} from "antd";
import React, {useRef} from "react";

export default function ProviderHomeAd() {
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
    const _handlerPrev = () => {
        switchRef.current.prev()
    }
    const _handlerNext = () => {
        switchRef.current.next()
    }

    return (
        <div className={"provider-carousel-bx"}>
            <div className={"Left-jump iconfont"} onClick={_handlerPrev}>&#xe620;</div>
            <div className={"Right-jump iconfont"} onClick={_handlerNext}>&#xe62d;</div>
            <Carousel ref={switchRef} autoplay>
                <div>
                        <a><img src="/assets/images/lunbo1.png" alt="" style={contentStyle}/></a>
                </div>
                <div>
                    <a><img src="/assets/images/lunbo1.png" alt="" style={contentStyle}/></a>
                </div>
                <div>
                    <a><img src="/assets/images/lunbo1.png" alt="" style={contentStyle}/></a>
                </div>
                <div>
                    <a><img src="/assets/images/lunbo1.png" alt="" style={contentStyle}/></a>
                </div>
            </Carousel>
        </div>
    )
}