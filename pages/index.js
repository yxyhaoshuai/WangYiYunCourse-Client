import Lunbo from "../components/lunbo";
import Navibar from "../components/naviBar";
import Categorylistings from "../components/categorylistings";
import PublicityItem from "../components/publicityitem";
import Livestreamingcard from "../components/livestreamingcard";
import Coursecardlayoutmore from "../components/coursecardlayoutmore";

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
          {/*<Livestreamingcard></Livestreamingcard>*/}
          <Coursecardlayoutmore/>
      </>



  )
}
