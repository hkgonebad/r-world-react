import { FiPlayCircle } from "react-icons/fi";
import Slider from "react-slick";
import colors from "../../config/colors";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slider">
      <div className="container">
        <Slider {...settings} className="homeSlider">
          <div className="hsItem isVideo">
            <div className="hsBox row">
              <div className="col-md-4">
                <div className="captions">
                  <span className="tag badge" style={{ backgroundColor: colors.jio }}>
                    Jio
                  </span>

                  <h3>Get your Jio SIM in no time</h3>
                  {/* <p>Now order your Jio SIM and activate it yourself anytime, anywhere.</p> */}
                  <small>Aug 29, 2024 | 97 Mins</small>

                  {/* <a href="#" className="btn ">
                  <FiPlayCircle className="icon" />
                  Watch Now
                </a> */}
                </div>
              </div>
              <div className="col-md-8">
                <div className="hsImg">
                  <FiPlayCircle className="hsIcon" />
                  <img src="/img/slider/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="hsItem">
            <div className="hsBox row">
              <div className="col-md-4">
                <div className="captions">
                  <span className="tag badge" style={{ backgroundColor: colors.nmacc }}>
                    NMACC
                  </span>

                  <h3>Get your Netflix Subscription</h3>
                  {/* <p>Now order your Jio SIM and activate it yourself anytime, anywhere.</p> */}
                  <small>Aug 29, 2024 | 97 Mins</small>

                  {/* <a href="#" className="btn ">
                  <FiPlayCircle className="icon" />
                  Watch Now
                </a> */}
                </div>
              </div>
              <div className="col-md-8">
                <div className="hsImg">
                  <img src="/img/slider/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
