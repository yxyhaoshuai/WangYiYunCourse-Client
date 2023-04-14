require("./index.less")
import React, {Component} from "react";

class Seriesbar extends Component{
    render(){
        const {seriesCourseListData} = this.props;
        return (
            <div className={"series-bar"}>
                <div className={"series-bar-bx bx"}>

                    {
                        seriesCourseListData.map((item)=>{
                            return <div key={item.id} className={"tabs-bar"}>
                                <a href={`#${item.course_title1}`}>
                                    {
                                        item.course_title1
                                    }
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Seriesbar;

