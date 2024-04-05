import {BaseURL} from "../../../config/serverConfig";

require("./index.less")
import React, {Component} from "react";
import LazyLoadImage from "../../lazyLoadImage/LazyLoadImage";

class Seriesofcourses extends Component{


    render(){
        const {data} = this.props;
        return (
            <div className={"aeries-of-courses"}>
                <a href={"/series?id=" + data.id} className={"j-href"}>
                    <div className={"card"}>
                        <div className={"img"}>
                            <LazyLoadImage src={BaseURL + data.series_fm_url}></LazyLoadImage>
                        </div>


                        <div className={"aeries-card-content"}>
                            <div className={"uc-recomend-series-title"}>
                                {
                                    data.title
                                }
                            </div>
                            <div className={"uc-recomend-series-intro"}>
                                <p>
                                    {
                                        data.intro
                                    }
                                </p>
                            </div>

                        </div>
                    </div>
                </a>


            
            </div>
        )
    }
}
export default Seriesofcourses;

