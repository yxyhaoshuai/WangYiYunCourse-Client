


import Navibar from "../../components/naviBar";
import React, {useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Leftminiad from "../../components/leftminiad";
import FlexLayout from "../../layout/flexLayout";
import Searchresultcard from "../../components/card/seriescard";
import Myinfo from "../../components/myinfo";
import Mypagetabs from "../../components/mypagetabs";
import Mypagelayout from "../../components/mypagelayout";
import Mypagecard from "../../components/mypagecard";


export default function ProviderSearch() {
    //登陆表单
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }
    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Myinfo/>
            <Mypagetabs/>
            <Mypagelayout>
                {/*下面切代码用三目运算符切换卡片组件*/}

                {/*<Searchresultcard count="column5" is_score/>*/}
                {/*<Searchresultcard count="column5" is_score/>*/}
                {/*<Searchresultcard count="column5" is_score/>*/}
                {/*<Searchresultcard count="column5" is_score/>*/}
                {/*<Searchresultcard count="column5" is_score/>*/}
                {/*<Searchresultcard count="column5" is_score/>*/}

                <Mypagecard/>
                <Mypagecard/>
                <Mypagecard/>
                <Mypagecard/>
                <Mypagecard/>
            </Mypagelayout>
            <Fixedfield/>
            <Wangyiyunfooter/>
            <Leftminiad/>
        </>

    )
}
