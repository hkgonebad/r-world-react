import { FiPlayCircle } from "react-icons/fi";
import Slider from "react-slick";

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
          <div className="hsItem">
            <div className="hsBox">
              <img src="/public/img/slider/1.jpg" alt="" />
              <div className="captions">
                <span className="tag badge">Jio</span>
                <h3>Get your Jio SIM in no time</h3>
                <p>Now order your Jio SIM and activate it yourself anytime, anywhere.</p>
                <small>Aug 29, 2024 | 97 Mins</small>

                <a href="#" className="btn ">
                  <FiPlayCircle />
                  Watch Now
                </a>
              </div>
            </div>
          </div>

          <div className="hsItem">
            <div className="hsBox">
              <img src="/public/img/slider/1.jpg" alt="" />
              <div className="captions">
                <span className="tag badge">Jio</span>
                <h3>Get your Jio SIM in no time</h3>
                <p>Now order your Jio SIM and activate it yourself anytime, anywhere.</p>
                <small>Aug 29, 2024 | 97 Mins</small>

                <a href="#" className="btn ">
                  <FiPlayCircle />
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
