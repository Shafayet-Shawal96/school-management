import React from "react";
import { Link } from "react-router-dom";

const newsFeedAreaImage = {
  backgroundImage: `url(./assets/img/bg/bg-3.jpg)`,
};

function NewsFeedArea() {
  return (
    <div
      className="blog-area pt-130 pb-100 bg-img default-overlay pt-130 pb-130"
      style={newsFeedAreaImage}
    >
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            Our <span>Newsfeed</span>
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src="/assets/img/blog/blog-1.jpg" alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">
                      Testing is a great thing.
                    </Link>
                  </h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i> Adrin Azra
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i> 15
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i> Jun, 24th 2018
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src="/assets/img/blog/blog-2.jpg" alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">
                      A variation of the ordinary.
                    </Link>
                  </h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i> Tayeb Jon
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i> 12
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i> Feb, 18th 2017
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src="/assets/img/blog/blog-3.jpg" alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">
                      In publishing and graphic.
                    </Link>
                  </h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i> Rifat Al
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i> 20
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i> Oct, 14th 2018
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src="/assets/img/blog/blog-4.jpg" alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">Learn English in ease.</Link>
                  </h4>
                  <p>doloremque laudan tium, totam ersps uns iste natus</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i>Md Tamim
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i> 08
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i> Jun, 21th 2017
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeedArea;
