import HomeAdBanner from "../components/HomeAdBanner";
import HomeAdBanner2 from "../components/HomeAdBanner2";
import HomeGalleryTab from "../components/HomeGalleryTab";
import HomeLatestNews from "../components/HomeLatestNews";
import HomeSlider from "../components/HomeSlider";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <HomeSlider />

      <section className="block">
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
    </>
  );
};

export default Home;
