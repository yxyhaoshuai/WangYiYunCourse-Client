import Courseteachercard from "../card/courseteachercard";
import {useEffect} from "react";

require("./index.less")
export default function Categorylistings({category}){

    useEffect(() => {

    });


    return(
        <div className={"category-listings"}>
            <div className={"category-listings-middle"}>
                {
                    category.map((item,index)=>{
                       return  <div key={index} className={"category-listings-middle-list"}>
                           <span>{item[0].class_name1}</span>
                           <span>/</span>
                           <span>{item[0].class_name2}</span>
                           <span>/</span>
                           <span>{item[1].class_name2}</span>
                           <span>/</span>
                           <span>{item[1].class_name2}</span>
                           <div className={"category-intro-operation-pane"}>
                               <div className={"category-name"}>
                            <span className={"iconfont special"}>
                                {item[0].class_name1}&#xe626;
                            </span>
                               </div>
                               <div className={"category-intro"}>
                                   {
                                       item.map((item2,index)=>{

                                           return <div key={index}>
                                               <span>{item2.class_name2}</span>
                                           </div>
                                       })
                                   }

                               </div>
                               <div className={"category-course"}>精选好课</div>
                               <div className={"category-course-card"}>
                                   {
                                       item.map((item3,index)=>{
                                           if (item3.course_title!==null){
                                               return <Courseteachercard coursetitle={item3.course_title} courseimg={item3.img_url} key={index}/>
                                           }
                                       })
                                   }
                                   {/*<Courseteachercard/>*/}
                                   {/*<Courseteachercard/>*/}
                                   {/*<Courseteachercard/>*/}

                               </div>
                           </div>
                       </div>
                    })
                }

            </div>
        </div>
    )
}