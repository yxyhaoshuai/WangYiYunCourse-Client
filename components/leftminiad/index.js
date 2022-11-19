require("./index.less")
import React, {Component} from "react";

class Leftminiad extends Component{
    state = {
        showElem:true
    }
    _turnOffAds=()=>{
        this.setState({

                showElem:false

        })
    }

    render(){
        return (
            <>
                {
                    this.state.showElem?(
                        <div className={"Left-mini-ad"}>
                            <a href="#">
                                <img src="/assets/images/adimg.png" alt=""/>
                            </a>

                            <div className={"x"} onClick={this._turnOffAds}>

                            </div>

                        </div>
                    ):null
                }

            </>

        )
    }
}
export default Leftminiad;

