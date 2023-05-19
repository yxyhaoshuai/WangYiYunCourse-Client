import SearchResultBig from "../../components/searchResultBig";
import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Crumb from "../../components/crumb";
import React, {useEffect, useState} from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import Leftminiad from "../../components/leftminiad";
import Fixedfield from "../../components/fixedfield";
import Searchschool from "../../components/searchschool";
import {getProviderSearchResult} from "../../api/providerSearchApi";
import {useRouter} from "next/router";
import Head from "next/head";

export default function ProviderSearch() {

    const router = useRouter()
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }

    const [searchResult,setSearchResult] = useState([])

    useEffect(()=>{
        if (router.query.kw !== undefined){
            getProviderSearchResult(router.query.kw).then((result)=>{
                setSearchResult(result.data)
            })
        }
    },[router.query.kw])





    return (
        <>
            <Head>
                <title>网校搜索结果</title>
                <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
            </Head>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }

            <Crumb/>
            <SearchResultBig keyword={router.query.kw} searchResult={searchResult}/>
            {
                searchResult.map((item)=>{
                    return <Searchschool is_series={false} key={item.id} data={item}/>
                })
            }
            <Wangyiyunfooter/>
            <Leftminiad/>
            <Fixedfield/>
        </>
    )
}
