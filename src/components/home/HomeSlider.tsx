import { FiPlayCircle } from "react-icons/fi";
import Slider from "react-slick";
import colors from "../../config/colors";

const sliderData = [
  {
    tag: "Jio",
    color: colors.jio,
    title: "Get your Jio SIM in no time",
    date: "Aug 29, 2024",
    duration: "97 Mins",
    imgSrc: "/img/slider/2.jpg",
    isVideo: true,
  },
  {
    tag: "NMACC",
    color: colors.nmacc,
    title: "Get your Jio SIM in no time",
    date: "Aug 29, 2024",
    duration: "97 Mins",
    imgSrc: "/img/slider/1.jpg",
    isVideo: false,
  },
];

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
          {sliderData.map((slide, index) => (
            <div key={index} className={`hsItem ${slide.isVideo ? "isVideo" : ""}`}>
              <div className="hsBox row">
                <div className="col-md-4">
                  <div className="captions">
                    <span className="tag badge" style={{ backgroundColor: slide.color }}>
                      {slide.tag}
                    </span>
                    <h3>{slide.title}</h3>
                    <small>{`${slide.date} | ${slide.duration}`}</small>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="hsImg">
                    {slide.isVideo && <FiPlayCircle className="hsIcon" strokeWidth={1} />}
                    <img src={slide.imgSrc} alt={slide.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="hsItem">
            <div className="hsBox row">
              <img src="/img/slider/test.png" />
            </div>
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
