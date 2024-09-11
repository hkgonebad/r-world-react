import Marquee from "react-fast-marquee";
import { FiArrowDown, FiArrowUp, FiPlayCircle } from "react-icons/fi";

const HeaderTicker = () => {
  return (
    <div className="hTicker">
      {/* Play Button */}
      <div className="htPlay">
        <a href="">
          <span>Watch Now</span>
          <b>
            <FiPlayCircle />
          </b>
        </a>
      </div>

      {/* Marquee: https://www.react-fast-marquee.com/documentation */}
      <div className="htMarquee">
        <Marquee pauseOnHover={true}>
          <span>
            I can be a React component, multiple React components, or just some text.I can be a React component,
            multiple React components, or just some text.
          </span>
          <span>
            I can be a React component, multiple React components, or just some text.I can be a React component,
            multiple React components, or just some text.
          </span>
        </Marquee>
      </div>

      {/* Stock */}
      <div className="htStocks">
        <img src="" alt="" />
        <span className="htStock hts-success">
          <FiArrowUp />
          <span>NSE: 2926.85 (0.28 %)</span>
        </span>
        <span className="htStock hts-danger">
          <FiArrowDown />
          <span>BSE: 2926.85 (0.24 %)</span>
        </span>
      </div>
    </div>
  );
};

export default HeaderTicker;
