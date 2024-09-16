import HomeAdBanner from "../components/home/HomeAdBanner";
import HomeAdBanner2 from "../components/home/HomeAdBanner2";
import HomeGalleryTab from "../components/home/HomeGalleryTab";
import HomeLatestNews from "../components/home/HomeLatestNews";
import HomeSlider from "../components/home/HomeSlider";
import Sidebar from "../containers/Sidebar";

import TagSelectionModal from "../components/home/TagSelectionModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const availableTags = [
    "Reliance Industries",
    "ADAS, AV, & Safety",
    "EV Battery",
    "Supply Chain",
    "Manufacturing",
    "Sustainable & EV Supply Chain",
    "EV Strategy",
    "Charging & Infrastructure",
    "Regulatory & Policy",
    "Fleet & Trucking",
    "Consumer Trends",
    "Workforce",
    "Financial Results",
    "Lifestyle",
    "Partnerships and M&A",
    "Products",
    "Mobility & Transport",
    "China Strategy",
    "Aerospace & Defense",
    "Evironment",
    "Finance",
  ];

  const handleClose = () => setShowModal(false);

  return (
    <>
      <HomeSlider />

      <section className="homeBlock mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <HomeLatestNews />

              <HomeAdBanner />

              <HomeGalleryTab />

              <HomeAdBanner2 />
            </div>

            <div className="col-md-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <TagSelectionModal show={showModal} handleClose={handleClose} availableTags={availableTags} />
    </>
  );
};

export default Home;
