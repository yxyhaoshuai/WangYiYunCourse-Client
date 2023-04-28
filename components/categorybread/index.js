import {useRouter} from "next/router";

require("./index.less")
import React, {useEffect, useState} from "react";


export default function Categorybread({nav, categoryId}) {
    const router = useRouter()
    const [classOneTitle, setClassOneTitle] = useState("加载中....")
    //nav选中状态机
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        if (categoryId !== undefined) {
            setCurrent(+categoryId)
        }
    }, [categoryId])
    const setCurrentState = (classOne,classTwo) => {
        router.push(`/category?classOneId=${classOne}&categoryId=${classTwo}`)
    }
    useEffect(() => {
        if (nav.length > 0) {
            setClassOneTitle(nav[1].classonename)
        }
    }, [nav])

    useEffect(() => {
        if (nav.length > 0){
            nav[0].classoneid=nav[1].classoneid
        }
    }, [nav])

    useEffect(() => {
       console.log(nav)
    }, [nav])
    return (
        <div className={"category-page_header"}>
            <div className={"category-page-header-bx bx"}>
                <span className={"ux-category-breadcrumb_cat1"}>{classOneTitle}</span>
                {/*下面的cat-item是样式选中状态*/}
                {
                    nav.map((item, index) => {
                        if (item.current === current) {
                            return <a key={index} onClick={() => {
                                setCurrentState(item.classoneid,item.classtwoid)
                            }
                            } className={"ux-category-breadcrumb_cat2_item cat-item"}>{item.classtwoname}</a>
                        } else {
                            return <a key={index} onClick={() => {
                                setCurrentState(item.classoneid,item.classtwoid)
                            }
                            } className={"ux-category-breadcrumb_cat2_item"}>{item.classtwoname}</a>
                        }
                    })
                }
            </div>
        </div>
    )
}