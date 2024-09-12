import HomeAdBanner from "../components/home/HomeAdBanner";
import HomeAdBanner2 from "../components/home/HomeAdBanner2";
import HomeGalleryTab from "../components/home/HomeGalleryTab";
import HomeLatestNews from "../components/home/HomeLatestNews";
import HomeSlider from "../components/home/HomeSlider";
import Sidebar from "../containers/Sidebar";

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
