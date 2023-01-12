import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginRegisterArea() {
  const [login, setLogin] = useState(true);

  const updateLogin = (e) => {
    e.preventDefault();
    const id = Number(e.target.id);
    if (id === 1) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="login-register-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 ms-auto me-auto">
            <div className="login-register-wrapper">
              <div className="login-register-tab-list nav">
                <Link
                  id={1}
                  href="/"
                  className={login ? "active" : ""}
                  onClick={updateLogin}
                >
                  <h4 id={1}> login </h4>
                </Link>
                <Link
                  id={2}
                  href="/"
                  className={login ? "" : "active"}
                  onClick={updateLogin}
                >
                  <h4 id={2}> register </h4>
                </Link>
              </div>
              <div className="tab-content">
                <div id="lg1" className={`tab-pane ${login ? "active" : ""}`}>
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
                          <button className="default-btn" type="submit">
                            <span>Login</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="lg2" className={`tab-pane ${login ? "" : "active"}`}>
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
                        <input
                          name="user-email"
                          placeholder="Email"
                          type="email"
                        />
                        <div className="button-box">
                          <button className="default-btn" type="submit">
                            <span>Register</span>
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

export default LoginRegisterArea;
