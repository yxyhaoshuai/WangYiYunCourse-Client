import Categoryfreecard from "../../components/card/categoryfreecard";
import Leftminiad from "../../components/leftminiad";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import React, {useEffect, useState} from "react";
import Categorycardlayout from "../../components/categorycardlayout";
import Categorycard from "../../components/card/categorycard";
import Categorybread from "../../components/categorybread";
import Categorycarousel from "../../components/categorycarousel";
import {getCategoryNav} from "../../api/categoryApi";
import {useRouter} from "next/router";


export default function ProviderSearch() {
    const router = useRouter()
    const {classOneId,categoryId} = router.query;

    const [showCoverLogin, setshowCoverLogin] = useState(false)

    const [nav , setNav] = useState([])


    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin);
    }



    useEffect(()=>{
        if (classOneId !== undefined){
            getCategoryNav(classOneId).then((result)=>{
                if (categoryId === ''+0){
                    setNav([{classtwoid:0,classtwoname:"精选",current: +categoryId},...result.data])
                }else {
                    let newResult =result.data.map((item)=>{
                        if (+categoryId === item.classtwoid){
                            item.current = +categoryId
                            return item
                        }
                        return item
                    })
                    setNav([{classtwoid:0,classtwoname:"精选"},...newResult])
                }
            })
        }
    },[router.query])

    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Categorybread categoryId={categoryId} nav={nav}/>
            <Categorycarousel/>
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
