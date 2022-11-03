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
              <Activitytabslayout/>
          </div>

      </>



  )
}
