import Coursedetailintro from "../coursedetailintro";

require("./index.less")
import React, {Component} from "react";
import Coursedetailcatalogue from "../coursedetailcatalogue";
import Coursedetailschool from "../coursedetailschool";
import Coursedetailschoolconsult from "../coursedetailschoolconsult";
import Coursedetailbelongingseries from "../coursedetailbelongingseries";
import Coursedetailcomment from "../coursedetailcomment";


class Coursedetaillayout extends Component{

    render(){
        const {directoryIntro,courseOutline} = this.props;
        return (
            <div className={"layout bx"}>
                {
                    directoryIntro ===1 ?<Coursedetailintro/> :<Coursedetailcatalogue courseOutline={courseOutline}/>

                }
                <div className={"layout-right"}>
                    {this.props.children}
                </div>

            </div>
        )
    }
}
export default Coursedetaillayout;

