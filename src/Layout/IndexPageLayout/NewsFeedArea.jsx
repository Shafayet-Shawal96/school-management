import React from "react";
import { Link } from "react-router-dom";

const newsFeedAreaImage = {
  backgroundImage: `url(./assets/img/bg/bg-3.jpg)`,
};
const newsFeedContent = {
  newsFeedAreaImage: {
    backgroundImage: "url(./assets/img/bg/bg-3.jpg)",
  },
  heading: "Our Newsfeed",
  paragraphText:
    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  newsCardImage: "assets/img/blog/blog-1.jpg",
  cardHeading: "Testing is a great thing.",
  cardParagraphText: "doloremque laudan tium, totam ersps uns iste natus",
  cardText: "Adrin Azra",
  cardNumber: "15",
  cardDate: "Jun, 24th 2018",
};

function NewsFeedArea() {
  return (
    <div
      className="blog-area pt-130 pb-100 bg-img default-overlay pt-130 pb-130"
      style={newsFeedAreaImage}
    >
      <div className="container">
        <div className="section-title mb-75">
          <h2>{newsFeedContent.heading}</h2>
          <p>{newsFeedContent.paragraphText}</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src={newsFeedContent.newsCardImage} alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">
                      {newsFeedContent.cardHeading}
                    </Link>
                  </h4>
                  <p>{newsFeedContent.cardParagraphText}</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i>
                          {newsFeedContent.cardText}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i>
                          {newsFeedContent.cardNumber}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i>{" "}
                    {newsFeedContent.cardDate}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src={newsFeedContent.newsCardImage} alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">
                      {newsFeedContent.cardHeading}
                    </Link>
                  </h4>
                  <p>{newsFeedContent.cardParagraphText}</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i>
                          {newsFeedContent.cardText}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i>
                          {newsFeedContent.cardNumber}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i>{" "}
                    {newsFeedContent.cardDate}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src={newsFeedContent.newsCardImage} alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">
                      {newsFeedContent.cardHeading}
                    </Link>
                  </h4>
                  <p>{newsFeedContent.cardParagraphText}</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i>
                          {newsFeedContent.cardText}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i>
                          {newsFeedContent.cardNumber}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i>{" "}
                    {newsFeedContent.cardDate}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src={newsFeedContent.newsCardImage} alt="" />
                </Link>
              </div>
              <div className="blog-content-wrap">
                <span>Education</span>
                <div className="blog-content">
                  <h4>
                    <Link to="blog-details.html">
                      {newsFeedContent.cardHeading}
                    </Link>
                  </h4>
                  <p>{newsFeedContent.cardParagraphText}</p>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-user"></i>
                          {newsFeedContent.cardText}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-comments-o"></i>
                          {newsFeedContent.cardNumber}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-date">
                  <Link to="#">
                    <i className="fa fa-calendar-o"></i>{" "}
                    {newsFeedContent.cardDate}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6">
            <div className="single-blog mb-30">
              <div className="blog-img">
                <Link to="blog-details.html">
                  <img src="assets/img/blog/blog-2.jpg" alt="" />
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NewsFeedArea;
