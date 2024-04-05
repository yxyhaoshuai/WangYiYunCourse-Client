import Coursedetailintro from "../coursedetailintro";

require("./index.less")
import React, {Component} from "react";
import Coursedetailcatalogue from "../coursedetailcatalogue";
import Coursedetailschool from "../coursedetailschool";
import Coursedetailschoolconsult from "../coursedetailschoolconsult";
import Coursedetailbelongingseries from "../coursedetailbelongingseries";
import Coursedetailcomment from "../coursedetailcomment";
import Coursenotes from "../coursenotes";


class Coursedetaillayout extends Component{

    render(){
        const {directoryIntro,courseOutline} = this.props;
        return (
            <div className={"layout bx"}>
                {
                    directoryIntro ===1 ? <Coursedetailintro/> : directoryIntro === 2 ?  <Coursedetailcatalogue courseOutline={courseOutline}/> : <Coursenotes/>
                }
                <div className={"layout-right"}>
                    {this.props.children}
                </div>

            </div>
        )
    }
}
export default Coursedetaillayout;

