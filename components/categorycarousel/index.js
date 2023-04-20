import {Carousel} from "antd";
require("./index.less")
import React, {useRef} from "react";
import {BaseURL} from "../../config/serverConfig";
import Link from "next/link";


export default function Categorycarousel({ad}) {
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
                {
                    ad.map((item)=>{
                        return <div key={item.course_id}>
                            <Link href={{
                                pathname: "/course/introduction/",
                                query: {"id": item.course_id}
                            }}>
                                <a><img src={BaseURL + item.ad_img_url} alt="" style={contentStyle}/></a>
                            </Link>
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}