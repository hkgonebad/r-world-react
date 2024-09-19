import { useState } from "react";
import { OTPInput, SlotProps } from "input-otp";
import logo from "/img/logo-light.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showOtp, setShowOtp] = useState(false); // State to show/hide OTP section

  const handleLogin = () => {
    // Simulate login validation
    // After successful login, show OTP section
    setShowOtp(true);
  };

  return (
    <main>
      <section className="login">
        <div className="container">
          <div className="loginIntro">
            <img src={logo} alt="Reliance Logo" />
            <h2>The World of Reliance</h2>
            <p>Right here for you</p>
          </div>

          <div className="loginForm">
            {!showOtp && ( // Only show login form when OTP section is hidden
              <>
                <h2 className="wTitle">Login</h2>
                <p>Explore news and more from across Reliance.</p>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Domain ID"
                    name="username"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="lOr">- OR -</div>

                <div className="form-group">
                  <label htmlFor="mobile">Registered Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Mobile Number"
                    name="mobile"
                    autoComplete="off"
                    className="form-control"
                  />
                </div>

                <div className="btns">
                  <a href="#!" className="forgot btn btn-link">
                    Forgot Password
                  </a>
                  <button className="btn btn-primary btn-rounded" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </>
            )}

            {showOtp && ( // Show OTP section only after login button is clicked
              <>
                <a href="#!" className="btn btn-link backBtn" onClick={() => setShowOtp(false)}>
                  <FiArrowLeft /> Back to Login
                </a>
                <h2 className="wTitle">Enter OTP</h2>
                <p>A 6-digit code has been sent to your registered email ID and mobile number</p>

                <div className="form-group">
                  <label htmlFor="otp">OTP</label>
                  <OTPInput
                    maxLength={6}
                    id="otp"
                    containerClassName="otpInput"
                    render={({ slots }) => (
                      <div className="d-flex gap-2 mb-3">
                        {slots.slice(0, 6).map((slot, idx) => (
                          <Slot key={idx} {...slot} />
                        ))}
                      </div>
                    )}
                  />
                </div>

                <div className="btns">
                  <a href="#!" className="forgot btn btn-link">
                    Resend OTP
                  </a>
                  <Link className="btn btn-primary btn-rounded" to={"/"}>
                    Verify OTP
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

function Slot(props: SlotProps) {
  return (
    <div className={`form-control text-center otpInputBox ${props.isActive ? "border-primary" : ""}`}>
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="caret-blink fakeCaret">
      <div className="" />
    </div>
  );
}

export default Login;
