import Lunbo from "../components/lunbo";
import Navibar from "../components/naviBar";
import Categorylistings from "../components/categorylistings";
import PublicityItem from "../components/publicityitem";
import Livestreamingcard from "../components/livestreamingcard";
import Coursecardlayoutmore from "../components/coursecardlayoutmore";
import Teacheritem from "../components/teacheritem";
import Coursecardlayout from "../components/coursecardlayout";
import Coursecard from "../components/coursecard";
import Microprofessionlcard from "../components/microprofessionalcard";
import Activitytabslayout from "../components/activitytabslayout";
import Selectionsort from "../components/selectionsort";
import Seriesofcourses from "../components/seriesofcourses";
import Excellentcoursecard from "../components/excellentcoursecard";
import Newcoursecard from "../components/newcoursecard";
import Gratiscoursecard from "../components/gratiscoursecard";
import Footerad from "../components/footerad";
import Wangyiyunfooter from "../components/wangyiyunfooter";

require("./index.less")
export default function Home() {
  return (
      <>
          <Navibar/>
          <div className={"content bx"}>
              <Categorylistings/>
              <Lunbo/>
          </div>
          <PublicityItem/>
          <div className={"content-big bx"}>
              <div className={"left"}>
                  <Coursecardlayoutmore titel={"直播公开课"} className={"card"}>
                      <div className={"display"}>
                          <Livestreamingcard/>
                          <Livestreamingcard/>
                          <Livestreamingcard/>
                      </div>
                  </Coursecardlayoutmore>
              </div>
              <div className={"right"}>
                  <Coursecardlayoutmore titel={"课堂直播"}>
                      <Teacheritem/>
                      <Teacheritem/>
                      <Teacheritem/>
                  </Coursecardlayoutmore>

              </div>


          </div>
          <div className={"course-module_content bx"}>
              <Coursecardlayout titel={"精品课"}>
                  <div className={"display"}>
                      <Coursecard/>
                      <Coursecard/>
                      <Coursecard/>
                      <Coursecard/>
                  </div>
              </Coursecardlayout>
          </div>
          <div className={"course-module_content bx"}>
              <Coursecardlayoutmore titel={"微专业"}>
                  <div className={"display special"}>
                      <Microprofessionlcard/>
                      <Microprofessionlcard/>
                      <Microprofessionlcard/>
                      <Microprofessionlcard/>
                  </div>
              </Coursecardlayoutmore>
          </div>
          <div className={"activitytabslayout bx"}>
              <Coursecardlayout titel={"限时秒杀"}>
                  <Activitytabslayout/>
              </Coursecardlayout>

          </div>
          <Selectionsort/>
          <div className={"series-of-courses-bx bx"}>
              <Coursecardlayout className="display-flex" titel={"系列课程"}>
                  <div className={"display-flex"}>
                      <Seriesofcourses/>
                      <Seriesofcourses/>
                      <Seriesofcourses/>
                      <Seriesofcourses/>
                  </div>
              </Coursecardlayout>
          </div>
          <div className={"excellent-course-module_content bx"}>
              <Coursecardlayout titel={"精选好课"}>
                  <div className={"display"}>
                      <Excellentcoursecard/>
                      <Excellentcoursecard/>
                      <Excellentcoursecard/>
                      <Excellentcoursecard/>
                  </div>
              </Coursecardlayout>
          </div>
          <div className={"new-course-module_content bx"}>
              <Coursecardlayout titel={"新课推荐"}>
                  <div className={"display"}>
                      <Newcoursecard/>
                      <Newcoursecard/>
                      <Newcoursecard/>
                      <Newcoursecard/>
                  </div>
              </Coursecardlayout>
          </div>
          <div className={"Gratis-course-module_content bx"}>
              <Coursecardlayout titel={"免费好课"}>
                  <div className={"display"}>
                      <Gratiscoursecard/>
                      <Gratiscoursecard/>
                      <Gratiscoursecard/>
                      <Gratiscoursecard/>
                  </div>
              </Coursecardlayout>
          </div>
          <div className={"footer-setting bx"}>
              <Footerad/>
          </div>

          <Wangyiyunfooter/>

      </>



  )
}
