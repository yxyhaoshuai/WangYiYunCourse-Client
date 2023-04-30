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

export default function ProviderSearch() {

    const router = useRouter()
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }

    const [searchResult,setSearchResult] = useState([])

    useEffect(()=>{
        if (router.query.keyword !== undefined){
            getProviderSearchResult(router.query.keyword).then((result)=>{
                setSearchResult(result.data)
            })
        }
    },[router.query.keyword])

    useEffect(()=>{
        console.log(searchResult)
    },[searchResult])

    return (
        <>
            <Navibar  _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }

            <Crumb/>
            <SearchResultBig keyword={router.query.keyword} searchResult={searchResult}/>
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
