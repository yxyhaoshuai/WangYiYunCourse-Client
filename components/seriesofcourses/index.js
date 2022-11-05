require("./index.less")
import React, {Component} from "react";

class Seriesofcourses extends Component{
    render(){
        return (
            <div className={"aeries-of-courses"}>
                <a href="#" className={"j-href"}>
                    <div className={"card"}>
                        <div className={"img"}>
                            <img src="assets/images/coursecard.png" alt=""/>

                        </div>


                        <div className={"aeries-card-content"}>
                            <div className={"uc-recomend-series-title"}>
                                全民一起玩Python+VBA
                            </div>
                            <div className={"uc-recomend-series-intro"}>
                                <p>数据分析学这一门就够了</p>
                            </div>

                        </div>
                    </div>
                </a>


            
            </div>
        )
    }
}
export default Seriesofcourses;

