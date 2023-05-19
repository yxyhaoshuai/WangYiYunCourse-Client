import Navibar from "../../components/naviBar";
import React, {useEffect, useState} from "react";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Leftminiad from "../../components/leftminiad";
import Myinfo from "../../components/myinfo";
import Mypagetabs from "../../components/mypagetabs";
import Mypagelayout from "../../components/mypagelayout";
import Mypagecard from "../../components/mypagecard";
import {getMyCollect, getMyStudy, topMyCourse} from "../../api/myStudyApi";
import {getUser} from "../../api/userApi";
import MyPagesSearchresultCard from "../../components/myPagesSearchresultCard";
import {getProgressBar} from "../../api/courseApi";
import Head from "next/head";


export default function ProviderSearch() {

    const [userData,setUserData] = useState({});




    //登陆表单
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }

    //当前激活面板
    const [currentState,setCurrentState] = useState(1)

    const setCurrentStateFunction = (e)=>{
        setCurrentState(Number(e))
    }
    //我的收藏列表数据
    const [myCollectData,setMyCollectData] = useState([])
    //我的学习列表数据
    const [myStudyData,setMyStudyData] = useState([])

    useEffect(()=>{
        getUser().then((result)=>{
            setUserData(result)
        })
    },[])

    //获取我的收藏列表数据
    useEffect(()=>{
        if (userData.id !== 0){
            getMyCollect(userData.id).then(result=>setMyCollectData(result.data))
        }

    },[userData])

    //获取我的学习列表数据
    useEffect(()=>{
        if (userData.id !== 0){
            getMyStudy(userData.id).then(result=>setMyStudyData(result.data))
        }
    },[userData])




    return (
        <>
            <Head>
                <title>我的学习</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Myinfo userData={userData}/>
            <Mypagetabs setCurrentStateFunction={setCurrentStateFunction}/>
            <Mypagelayout>
                {/*下面切代码用三目运算符切换卡片组件*/}
                {
                    currentState ===1? <>
                        {
                            myStudyData.map((item)=>{
                                return <Mypagecard key={item.id} data={item}/>
                            })
                        }
                    </>:<>
                        {
                            myCollectData.map((item)=>{
                                return <MyPagesSearchresultCard key={item.id} data={item} count="column5" is_score/>
                            })
                        }
                    </>
                }
            </Mypagelayout>
            <Fixedfield/>
            <Wangyiyunfooter/>
            <Leftminiad/>
        </>

    )
}
