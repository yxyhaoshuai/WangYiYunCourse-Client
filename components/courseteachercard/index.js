require("./index.less")
export default function Courseteachercard(){
    return(
        <div className={"course-teacher-card"}>
            <div className={"teacher-heard"}>
                <a href="#">
                    <img src="assets/images/teacherhead.png"/>
                </a>
            </div>
            <div className={"course-intro"}>
                <a href="#">
                    最强大脑,三天挑战极限记忆力
                </a>

            </div>

        </div>
    )
}