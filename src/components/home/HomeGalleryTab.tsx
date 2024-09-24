import { Tabs, Tab } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import ThumbBox from "../common/ThumbBox";

const HomeGalleryTab = () => {
  return (
    <div className="galleryTab secBlock">
      <a href="#!" className="btn btn-text viewAll">
        View All <FiArrowRight className="icon" />
      </a>

      <Tabs defaultActiveKey="videos">
        <Tab eventKey="videos" title="Video Gallery">
          <div className="galleryArea">
            <div className="row">
              {/* Large */}
              <div className="col-md-6">
                <ThumbBox
                  tag="JioThings"
                  title="47th Annual General Meeting"
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/videos/1.png"
                  video
                  isLarge
                />
              </div>
              <div className="col-md-6">
                <ThumbBox
                  tag="NMACC"
                  title="The Diamond Box Experience"
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/videos/2.png"
                  video
                  isLarge
                />
              </div>

              {/* small */}
              <div className="col-md-4">
                <ThumbBox
                  tag="Reliance Foundation"
                  title="Founded in 2010 under the leadership of Nita M. Ambani"
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/videos/3.png"
                  video
                />
              </div>
              <div className="col-md-4">
                <ThumbBox
                  tag="Retail"
                  title="AJIO at Lakmé Fashion Week "
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/videos/4.png"
                  video
                />
              </div>
              <div className="col-md-4">
                <ThumbBox
                  tag="Jio"
                  title="Deep Indoor Coverage, Jio TRUE 5G offers"
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/videos/5.png"
                  video
                />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="photos" title="Photo Gallery">
          <div className="galleryArea">
            <div className="row">
              {/* small */}
              <div className="col-md-4">
                <ThumbBox
                  tag="NMACC"
                  title="The Studio Theatre"
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/photos/1.png"
                  photo
                />
              </div>
              <div className="col-md-4">
                <ThumbBox
                  tag="Reliance Foundation"
                  title="Health Outreach Programme "
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/photos/2.png"
                  photo
                />
              </div>
              <div className="col-md-4">
                <ThumbBox
                  tag="Jio"
                  title="Yoga poses &breathing exercises"
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/photos/3.png"
                  photo
                />
              </div>

              {/* Large */}
              <div className="col-md-6">
                <ThumbBox
                  tag="Reliance Industries"
                  title="At Reliance, we are constantly aligning our ambitions with India’s dreams."
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/photos/4.png"
                  isLarge
                  photo
                />
              </div>
              <div className="col-md-6">
                <ThumbBox
                  tag="Reliance Foundation"
                  title="Making a difference with technology"
                  date="Aug 29, 2024"
                  time="97 Mins"
                  img="/img/photos/5.png"
                  isLarge
                  photo
                />
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default HomeGalleryTab;
