

require("./index.less")
import React from "react";



export default function ProviderAbout({netSchoolInformation}) {

    return (
        <div className={"about-me"}>{netSchoolInformation.about_school}</div>
    )
}



