import Categoryfreecard from "../../components/card/categoryfreecard";

require("./index.less")
import Leftminiad from "../../components/leftminiad";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import React, {useRef, useState} from "react";
import {Carousel, Rate} from "antd";
import Categorycardlayout from "../../components/categorycardlayout";
import Categorycard from "../../components/card/categorycard";
import Searchresultcard from "../../components/card/seriescard";


export default function ProviderSearch() {
    const switchRef = useRef(null)

    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin);
    }

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
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }

            <div className={"category-page_header"}>
                <div className={"category-page-header-bx bx"}>
                    <span className={"ux-category-breadcrumb_cat1"}>有道英语</span>
                    <a className={"ux-category-breadcrumb_cat2"}>精选</a>
                    {/*下面的cat-item是样式选中状态*/}
                    <a className={"ux-category-breadcrumb_cat2_item"}>全面提升</a>
                    <a className={"ux-category-breadcrumb_cat2_item"}>实用口语</a>
                    <a className={"ux-category-breadcrumb_cat2_item cat-item"}>小语种</a>
                    <a className={"ux-category-breadcrumb_cat2_item"}>趣听英语</a>
                </div>
            </div>


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

            <Categorycardlayout layoutTitle={"直播公开课"}>
                <Categorycard/>
                <Categorycard/>
                <Categorycard/>
                <Categorycard/>
                <Categorycard/>
            </Categorycardlayout>

            {/*下面的score必传，传一个数值或者null*/}
            <Categorycardlayout layoutTitle={"免费好课"}>
                <Categoryfreecard score={4.5}/>
                <Categoryfreecard score={null}/>
                <Categoryfreecard score={4.5}/>
                <Categoryfreecard score={4.5}/>
                <Categoryfreecard score={4.5}/>
                <Categoryfreecard score={4.5}/>
                <Categoryfreecard/>
            </Categorycardlayout>


            <Categorycardlayout layoutTitle={"精选好课"}>
                <Categoryfreecard score={4.5}/>
                <Categoryfreecard score={4.5}/>
                <Categoryfreecard/>
                <Categoryfreecard score={4.5}/>
            </Categorycardlayout>

            <Fixedfield/>
            <Leftminiad/>
            <Wangyiyunfooter/>
        </>
    )
}
