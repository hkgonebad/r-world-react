import EditorPicks from "../components/sidebar/EditorPicks";
import ThumbBox from "../components/common/ThumbBox";
import QuickPoll from "../components/sidebar/QuickPoll";
// import { Tab, Tabs } from "react-bootstrap";
import Refers from "../components/sidebar/Refers";
import Promo from "../components/sidebar/Promo";

const Sidebar = () => {
  return (
    <>
      {/* Trending Videos */}
      <div className="sWidget mt-0">
        <h4 className="wTitle">Trending Videos</h4>
        <ThumbBox
          tag="NMACC"
          title="Experience Culture at The Centre"
          date="Sep 7, 2024"
          time="45 Mins"
          img="/img/videos/trending.png"
          video
          className="wBoxAlt2"
        />
      </div>

      {/* Spotlight */}
      <div className="sWidget">
        <h4 className="wTitle">Spotlight</h4>
        <ThumbBox
          tag="Jio"
          title="Jio announces 8th anniversary offer"
          date="Sep 7, 2024"
          img="/img/spotlight/1.png"
          isLocked
        />
      </div>

      {/*  Calendar / Events */}
      {/* <div className="sWidget">
        <Tabs defaultActiveKey="events">
          <Tab eventKey="events" title="Events">
            <div className="events">
              <a href="#!" className="btn btn-viewall">
                View All <FiArrowRight />
              </a>

              <EventBox date="Thu, Aug 29 2024" title="Save the Date: RIL AGM 2024" time="Jio Meet | 14:00:00" />
              <EventBox date="Thu, Aug 29 2024" title="Save the Date: RIL AGM 2024" time="Jio Meet | 14:00:00" />
            </div>
          </Tab>
          <Tab eventKey="calendar" title="Calendar">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div> */}

      {/* Promo */}
      <Promo />

      {/* Editor Picks */}
      <EditorPicks />

      {/* Poll */}
      <QuickPoll />

      {/* Refers */}
      <Refers />
    </>
  );
};

export default Sidebar;
