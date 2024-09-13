import Marquee from "react-fast-marquee";
import { FiArrowUp, FiPlay } from "react-icons/fi";
import logo from "/img/ril-logo.svg";

const HeaderTicker = () => {
  return (
    <div className=" container">
      <div className="hTicker ">
        {/* Play Button */}
        <div className="htPlay">
          <a href="">
            <span>Watch Now</span>
            <b>
              <FiPlay />
            </b>
          </a>
        </div>

        {/* Marquee: https://www.react-fast-marquee.com/documentation */}
        <div className="htMarquee">
          <Marquee pauseOnHover={true}>
            <span>47th Reliance Industries Live Annual General Meeting</span>
            <span>Nurturing Aspirations - Transforming Lives</span>
            <span>47th Reliance Industries Live Annual General Meeting</span>
          </Marquee>
        </div>

        {/* Stock */}
        <div className="htStocks">
          <img src={logo} alt="" />
          <span className="htStock hts-success">
            <b className="htArrow">
              <FiArrowUp />
            </b>
            <span>NSE: 2926.85 (0.28 %)</span>
          </span>
          <span className="htStock hts-danger">
            <b className="htArrow">
              <FiArrowUp />
            </b>
            <span>BSE: 2926.85 (0.24 %)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTicker;
