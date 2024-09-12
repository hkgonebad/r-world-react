import { FiArrowRight } from "react-icons/fi";
import EventBox from "./EventBox";
import EditorPicks from "./EditorPicks";
import ThumbBox from "./ThumbBox";
import QuickPoll from "./QuickPoll";
import { Tab, Tabs } from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      {/* Trending Videos */}
      <div className="sWidget">
        <h4 className="wTitle">Trending Videos</h4>
        <ThumbBox
          tag="NMACC"
          title="Experience Culture at The Centre"
          date="Sep 7, 2024"
          time="45 Mins"
          img="/public/img/videos/trending.png"
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
          img="/public/img/spotlight/1.png"
          isLocked
        />
      </div>

      {/*  Calendar / Events */}
      <div className="sWidget">
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
      </div>

      {/* Editor Picks */}
      <EditorPicks />

      {/* Poll */}
      <QuickPoll />

      {/* Refers */}
      <div className="sWidget">
        <div className="wBox wHighlight">
          <h4 className="wTitle">Refers</h4>
          <h5>(Global Corporate Security)</h5>
          <small>We have you and your family covered 24 x 7</small>
          <a href="tel:18008899009">1800-8899-009</a>

          <small>from any Jio Sim card</small>
          <a href="tel:50009">50009</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
