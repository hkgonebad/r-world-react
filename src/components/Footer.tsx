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
                <h4>
                  <Link to={"/"}>Home</Link>
                </h4>
              </div>

              <div className="tfLinks tfBox">
                <h4>
                  <a>My Feed</a>
                </h4>
              </div>

              <div className="tfLinks tfBox">
                <h4>
                  <a>News Room</a>
                </h4>
              </div>
            </div>

            {/*  */}
            <div className="col ">
              <div className="tfLinks tfBox">
                <h4>Media Hub</h4>
                <ul>
                  <li>
                    <a>Image Gallery</a>
                  </li>
                  <li>
                    <a>Video Gallery</a>
                  </li>
                  <li>
                    <a>Info Pages</a>
                  </li>
                  <li>
                    <a>Events</a>
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
                    <a>R-World News & Governance</a>
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

            {/*  */}
            <div className="col ">
              <div className="tfLinks tfBox">
                <h4>Refers</h4>
                <h5>(Global Corporate Security)</h5>
                <small>We have you and your family covered 24 x 7</small>
                <a href="tel:18008899009">1800-8899-009</a>

                <small>from any Jio Sim card</small>
                <a href="tel:50009">50009</a>
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
