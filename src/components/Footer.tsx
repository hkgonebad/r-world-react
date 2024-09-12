import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Top Footer */}
      <div className="topFooter">
        <div className="container">
          <div className="row">
            {/*  */}
            <div className="col ">
              <div className="tfLinks tfBox">
                {/* <h4>
                  <Link to={"/"}>Home</Link>
                </h4> */}
                <Link to={"/"}>
                  <h4>Home</h4>
                </Link>
              </div>

              <div className="tfLinks tfBox">
                {/* <h4>
                  <Link to={"/feed"}>My Feed</Link>
                </h4> */}
                <Link to={"/feed"}>
                  <h4>My Feed</h4>
                </Link>
              </div>

              <div className="tfLinks tfBox">
                {/* <a>News Room</a> */}
                <Link to={"/news"}>
                  <h4>News Room</h4>
                </Link>
              </div>
            </div>

            {/*  */}
            <div className="col ">
              <div className="tfLinks tfBox">
                <h4>Info Pages</h4>
                <ul>
                  <li>
                    <Link to={"glossary"}>Glossary of Terms</Link>
                  </li>
                  <li>
                    <Link to={"newsletters"}>Newsletters</Link>
                  </li>
                  <li>
                    <Link to={"communication"}>Communication Guidelines</Link>
                  </li>
                  <li>
                    <Link to={"events"}>Events</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/*  */}
            <div className="col ">
              <div className="tfLinks tfBox">
                <h4>Other</h4>
                <ul>
                  <li>
                    <Link to={"privacy"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"terms"}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <a>R-World News Governance</a>
                  </li>
                  <li>
                    <a>10 Tenets</a>
                  </li>
                </ul>
              </div>
            </div>

            {/*  */}
            <div className="col ">
              <div className="tfLinks tfBox">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a>support@rworld.com</a>
                  </li>
                </ul>
              </div>
            </div>

            {/*  */}
            <div className="col ">
              <div className="tfLinks tfBox">
                <h4>Social Media</h4>
                <div className="socialLinks">
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <FaXTwitter />
                  </a>
                  <a href="">
                    <FaInstagram />
                  </a>
                  <a href="">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottomFooter">
        <div className="container">
          <div className="bfCopyright">
            <p>© 2024 Reliance Industries Limited. All Rights Reserved.</p>
          </div>
          <div className="bfExtra">
            <p>The site is best viewed in Google Chrome and Microsoft Edge.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
