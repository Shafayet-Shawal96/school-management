import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginFn } from "../../Store/LoginSlice";
import ReCAPTCHA from "react-google-recaptcha";

function LoginArea() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [captchaisValid, setCaptchaisValid] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (captchaisValid) {
      dispatch(loginFn());
      navigate("/", { replace: true });
      return;
    }
    alert("Try captcha again");
  };

  function onChange(value) {
    setCaptchaisValid(true);
    // console.log("Captcha value:", value);
  }

  return (
    <div className="login-register-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 ms-auto me-auto">
            <div className="login-register-wrapper">
              <div className="login-register-tab-list nav">
                <Link to="#" className="active">
                  <h4> login </h4>
                </Link>
              </div>
              <div className="tab-content">
                <div id="lg1" className="tab-pane active">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form action="/" method="post">
                        <input
                          type="text"
                          name="user-name"
                          placeholder="Username"
                        />
                        <input
                          type="password"
                          name="user-password"
                          placeholder="Password"
                        />
                        <div className="button-box">
                          <div className="login-toggle-btn">
                            <input type="checkbox" />
                            <label>Remember me</label>
                            <Link to="#">Forgot Password?</Link>
                          </div>
                          <ReCAPTCHA
                            sitekey="6LetUAYkAAAAAP8NGg6xnMR6Pn2YTz6fBm2IuDqF"
                            onChange={onChange}
                          />
                          <button
                            onClick={handleLogin}
                            className="default-btn"
                            type="submit"
                          >
                            <span>Login</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginArea;
