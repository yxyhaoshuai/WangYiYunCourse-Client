import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import {Carousel} from "antd";
import React, {useEffect, useRef} from "react";
import Link from "next/link";

export default function ProviderHomeAd({adLunbo}) {
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
                {
                    adLunbo.map((item)=>{
                        return <div key={item.id}>
                            <Link href={{
                                pathname: "/course/introduction/",
                                query: {"id": item.course_id}
                            }}>
                                <a><img className={"img-category"} src={BaseURL + item.ad_img_url} alt="" style={contentStyle}/></a>
                            </Link>
                        </div>
                    })
                }


            </Carousel>
        </div>
    )
}