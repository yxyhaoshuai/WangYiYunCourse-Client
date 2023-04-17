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
import Searchresultcard from "../../components/card/seriescard";
import {getMyCollect, getMyStudy} from "../../api/myStudyApi";


export default function ProviderSearch() {

    //此处先模拟用户1已经登录
    const userId = 1;


    //登陆表单
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }

    //当前激活面板
    const [currentState,setCurrentState] = useState(1)

    const setCurrentStateFunction = (e)=>{
        setCurrentState(Number(e))
        console.log(currentState)
    }
    //我的收藏列表数据
    const [myCollectData,setMyCollectData] = useState([])
    //我的学习列表数据
    const [myStudyData,setMyStudyData] = useState([])


    //获取我的收藏列表数据
    useEffect(()=>{
        getMyCollect(userId).then(result=>setMyCollectData(result.data))
    },[0])

    //获取我的学习列表数据
    useEffect(()=>{
        getMyStudy(userId).then(result=>setMyStudyData(result.data))
    },[0])



    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Myinfo/>
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
                                return <Searchresultcard key={item.id} data={item} count="column5" is_score/>
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
