import Courseteachercard from "../card/courseteachercard";
import {useEffect} from "react";
import Link from "next/link";

require("./index.less")
export default function Categorylistings({category, category2}) {




    return (
        <div className={"category-listings"}>
            <div className={"category-listings-middle"}>
                {
                    category.map((item, index) => {
                        return <div key={index} className={"category-listings-middle-list"}>
                           <span className={"class-one"}>
                               <Link href={{
                                   pathname: "/category",
                                   query: {"classOneId": item[0].id1, "categoryId": 0}
                               }}>
                                    <a>{item[0].class_name1}</a>
                               </Link>
                           </span>
                            <span>/</span>
                            <span className={"class-two"}>
                               <Link href={{
                                   pathname: "/category",
                                   query: {"classOneId": item[0].id1, "categoryId": item[0].id2}
                               }}>
                                    <a>{item[0].class_name2}</a>
                               </Link>
                           </span>
                            <span>/</span>
                            <span className={"class-two"}>
                               <Link href={{
                                   pathname: "/category",
                                   query: {"classOneId": item[0].id1, "categoryId": item[1].id2}
                               }}>
                                    <a>{item[1].class_name2}</a>
                               </Link>
                           </span>
                            <span>/</span>
                            <span className={"class-two"}>
                               <Link href={{
                                   pathname: "/category",
                                   query: {"classOneId": item[0].id1, "categoryId": item[2].id2}
                               }}>
                                    <a>{item[2].class_name2}</a>
                               </Link>
                           </span>
                            <div className={"category-intro-operation-pane"}>
                                <div className={"category-name"}>
                                    <Link href={{
                                        pathname: "/category",
                                        query: {"classOneId": item[0].id1, "categoryId": 0}
                                    }}>
                                        <a>
                                            <span className={"iconfont special"}>
                                                {item[0].class_name1}&#xe626;
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={"category-intro"}>
                                    {
                                        item.map((item2, index) => {

                                            return <div key={index}>
                                                <Link href={{
                                                    pathname: "/category",
                                                    query: {"classOneId": item2.id1, "categoryId": item2.id2}
                                                }}>
                                                    <a>
                                                        <span>{item2.class_name2}</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        })
                                    }

                                </div>
                                <div className={"category-course"}>精选好课</div>
                                <div className={"category-course-card"}>

                                    {/*该下面*/}
                                    {
                                        category2.filter((item) => {
                                            return item.categoryid === index + 1
                                        }).map((item2, index2) => {

                                            return <Courseteachercard data={item2} key={index2}/>
                                        })
                                    }


                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}