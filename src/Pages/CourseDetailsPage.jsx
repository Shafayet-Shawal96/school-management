import React, { Fragment } from "react";
import RelatedCourse from "../Components/CourseDetailsPageComponents/RelatedCourse";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbObj = {
  title: "Course Grid",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Course Grid",
  overlayClass: "breadcrumb-overly-2",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-2.jpg)`,
  },
};

function CourseDetailsPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="course-details-area pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="course-left-wrap mr-40">
                <div className="apply-area">
                  <img src="assets/img/banner/course-details.jpg" alt="" />
                  <div className="course-apply-btn">
                    <a href="/" className="default-btn">
                      APPLY NOW
                    </a>
                  </div>
                </div>
                <div className="course-tab-list nav pt-40 pb-25 mb-35">
                  <a
                    className="active"
                    href="/course-details-1"
                    data-bs-toggle="tab"
                  >
                    <h4>Over View </h4>
                  </a>
                  <a href="/course-details-2" data-bs-toggle="tab">
                    <h4>Instructor </h4>
                  </a>
                  <a href="/course-details-3" data-bs-toggle="tab">
                    <h4> Reviews </h4>
                  </a>
                </div>
                <div className="tab-content jump">
                  <div className="tab-pane active" id="course-details-1">
                    <div className="over-view-content">
                      <h4>COURSE DETAILS</h4>
                      <h5>Course Name : Grphic Design & Multimedia</h5>
                      <p>
                        magna aliqua. Ut enim ad minim veniam, nisi ut
                        aliquiptempor incid.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi m aperiam, eaque ipsa quae abaspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                      </p>
                      <div className="over-view-list">
                        <div className="sin-over-view-list">
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet,
                            </p>
                          </div>
                        </div>
                        <div className="sin-over-view-list">
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>
                              {" "}
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet,
                            </p>
                          </div>
                        </div>
                        <div className="sin-over-view-list">
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>
                              Es eos qui ratione voluptatem sequi nesciunt.
                              Neque porro quisquam est,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="course-details-img">
                        <img
                          src="assets/img/banner/course-details-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="course-summary-wrap">
                        <div className="single-course-summary">
                          <h4>Total Students</h4>
                          <span>
                            <i className="fa fa-user"></i> 50
                          </span>
                        </div>
                        <div className="single-course-summary">
                          <h4>Course Duration</h4>
                          <span>
                            <i className="fa fa-clock-o"></i> 4yrs
                          </span>
                        </div>
                        <div className="single-course-summary">
                          <h4>Course Credits</h4>
                          <span>
                            <i className="fa fa-diamond"></i> 125
                          </span>
                        </div>
                        <div className="single-course-summary">
                          <h4>Total Semester</h4>
                          <span>
                            <i className="fa fa-book"></i> 12
                          </span>
                        </div>
                      </div>
                      <p>
                        magna aliqua. Ut enim ad minim veniam, nisi ut
                        aliquiptempor incid.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi m aperiam, eaque ipsa quae abaspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="course-details-2">
                    <div className="over-view-content">
                      <h4>INSTRUCTOR</h4>
                      <h5>Head Of The Department : Ara’af Imtiaz</h5>
                      <p>
                        magna aliqua. Ut enim ad minim veniam, nisi ut
                        aliquiptempor incid.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi m aperiam, eaque ipsa quae abaspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                      </p>
                      <div className="over-view-list">
                        <div className="sin-over-view-list">
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet,
                            </p>
                          </div>
                        </div>
                        <div className="sin-over-view-list">
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>
                              {" "}
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet,
                            </p>
                          </div>
                        </div>
                        <div className="sin-over-view-list">
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>
                              Es eos qui ratione voluptatem sequi nesciunt.
                              Neque porro quisquam est,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="course-details-img">
                        <img
                          src="assets/img/banner/course-details-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="course-summary-wrap">
                        <div className="single-course-summary">
                          <h4>Total Students</h4>
                          <span>
                            <i className="fa fa-user"></i> 50
                          </span>
                        </div>
                        <div className="single-course-summary">
                          <h4>Course Duration</h4>
                          <span>
                            <i className="fa fa-clock-o"></i> 4yrs
                          </span>
                        </div>
                        <div className="single-course-summary">
                          <h4>Course Credits</h4>
                          <span>
                            <i className="fa fa-diamond"></i> 125
                          </span>
                        </div>
                        <div className="single-course-summary">
                          <h4>Total Semester</h4>
                          <span>
                            <i className="fa fa-book"></i> 12
                          </span>
                        </div>
                      </div>
                      <p>
                        magna aliqua. Ut enim ad minim veniam, nisi ut
                        aliquiptempor incid.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi m aperiam, eaque ipsa quae abaspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="course-details-3">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img src="assets/img/blog/recent-post-1.jpg" alt="" />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <div className="review-btn">
                              <a href="/">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla
                              nec, convallis conval lis leo. Maecenas bibendum
                              bibendum larius.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img src="assets/img/blog/recent-post-2.jpg" alt="" />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <div className="review-btn">
                              <a href="/">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla
                              nec, convallis conval lis leo. Maecenas bibendum
                              bibendum larius.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ratting-form-wrapper">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form>
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-20">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-20">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                ></textarea>
                                <input type="submit" value="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <RelatedCourse />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-style sidebar-res-mrg-none">
                <div className="sidebar-search mb-40">
                  <div className="sidebar-title mb-40">
                    <h4>Search</h4>
                  </div>
                  <form>
                    <input type="text" placeholder="Search" />
                    <button>
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="sidebar-about mb-40">
                  <div className="sidebar-title mb-15">
                    <h4>About Us</h4>
                  </div>
                  <p>
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolors eos qui ratione voluptatem sad.
                  </p>
                  <a href="/">
                    <img src="assets/img/banner/banner-4.jpg" alt="" />
                  </a>
                  <div className="sidebar-social">
                    <ul>
                      <li>
                        <a className="facebook" href="/">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="youtube" href="/">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="/">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="google" href="/">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-recent-post mb-35">
                  <div className="sidebar-title mb-40">
                    <h4>Recent Post</h4>
                  </div>
                  <div className="recent-post-wrap">
                    <div className="single-recent-post">
                      <div className="recent-post-img">
                        <a href="/">
                          <img src="assets/img/blog/recent-post-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <h5>
                          <a href="/">Blog title will be here.</a>
                        </h5>
                        <span>Blog Category</span>
                        <p>Datat non proident qui offici.hafw adec qart.</p>
                      </div>
                    </div>
                    <div className="single-recent-post">
                      <div className="recent-post-img">
                        <a href="/">
                          <img src="assets/img/blog/recent-post-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <h5>
                          <a href="/">Blog title will be here.</a>
                        </h5>
                        <span>Blog Category</span>
                        <p>Datat non proident qui offici.hafw adec qart.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-category mb-40">
                  <div className="sidebar-title mb-40">
                    <h4>Course Category</h4>
                  </div>
                  <div className="category-list">
                    <ul>
                      <li>
                        <a href="/">
                          MBA <span>04</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Graduate <span>08</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Under Graduate <span>04</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          BBA <span>06</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Engineering <span>04</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-recent-course-wrap mb-40">
                  <div className="sidebar-title mb-40">
                    <h4>Recent Courses</h4>
                  </div>
                  <div className="sidebar-recent-course">
                    <div className="sin-sidebar-recent-course">
                      <div className="sidebar-recent-course-img">
                        <a href="/">
                          <img src="assets/img/blog/recent-post-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="sidebar-recent-course-content">
                        <h4>
                          <a href="/">Course Title</a>
                        </h4>
                        <ul>
                          <li>Credits : 125</li>
                          <li className="duration-color">Duration : 4yrs</li>
                        </ul>
                        <p>Datat non proident qui offici.hafw adec qart.</p>
                      </div>
                    </div>
                    <div className="sin-sidebar-recent-course">
                      <div className="sidebar-recent-course-img">
                        <a href="/">
                          <img src="assets/img/blog/recent-post-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="sidebar-recent-course-content">
                        <h4>
                          <a href="/">Course Title</a>
                        </h4>
                        <ul>
                          <li>Credits : 125</li>
                          <li className="duration-color">Duration : 4yrs</li>
                        </ul>
                        <p>Datat non proident qui offici.hafw adec qart.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-tag-wrap">
                  <div className="sidebar-title mb-40">
                    <h4>Tag</h4>
                  </div>
                  <div className="sidebar-tag">
                    <ul>
                      <li>
                        <a href="/">Loremsite</a>
                      </li>
                      <li>
                        <a href="/">Loreipsum</a>
                      </li>
                      <li>
                        <a href="/">Dolar</a>
                      </li>
                      <li>
                        <a href="/">Site ament dollar</a>
                      </li>
                      <li>
                        <a href="/">Loremsite</a>
                      </li>
                      <li>
                        <a href="/">Dummy Text</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default CourseDetailsPage;
