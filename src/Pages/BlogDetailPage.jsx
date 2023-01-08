import React, { Fragment } from "react";
import RelatedSliderComponent from "../Components/RelatedSliderComponent";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";
import BrandCarouselComponent from "../Components/BrandCarouselComponent";

const breadcrumbImage = {
  backgroundImage: `url(./assets/img/bg/breadcrumb-bg-5.jpg)`,
};

function BlogDetailPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <div className="breadcrumb-area">
        <div
          className="breadcrumb-top default-overlay bg-img breadcrumb-overly-3 pt-100 pb-95"
          style={breadcrumbImage}
        >
          <div className="container">
            <h2>Blog Details</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .
            </p>
          </div>
        </div>
        <div className="breadcrumb-bottom">
          <div className="container">
            <ul>
              <li>
                <a href="/">Home</a>{" "}
                <span>
                  <i className="fa fa-angle-double-right"></i>Blog Details
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="event-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="blog-details-wrap mr-40">
                <div className="blog-details-top">
                  <img src="assets/img/blog/blog-details.jpg" alt="" />
                  <div className="blog-details-content-wrap">
                    <div className="b-details-meta-wrap">
                      <div className="b-details-meta">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o"></i> June, 24th 2016
                          </li>
                          <li>
                            <i className="fa fa-user"></i> Adrin Azra
                          </li>
                          <li>
                            <i className="fa fa-comments-o"></i> 10
                          </li>
                        </ul>
                      </div>
                      <span>Education</span>
                    </div>
                    <h3>Aempor incididt ut bore dolore magna aliqua.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </p>
                    <blockquote>
                      <i className="quote-top fa fa-quote-left"></i>
                      Lorem ipsum dolor sit amet, conse ctetur adipi sicing
                      elit, sed do eiusm od tempor incidi dunt ut labore et
                      dolore magna aliqua. Ut enim fugiat nulla pariaatat non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum. Sed ut perspiciatis unde omnis iste natus
                      error sit
                      <i className="quote-bottom fa fa-quote-right"></i>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </p>
                    <div className="blog-share-tags">
                      <div className="blog-share">
                        <div className="blog-btn">
                          <a href="/">
                            <i className="fa fa-share-alt"></i>
                          </a>
                        </div>
                        <div className="blog-social">
                          <ul>
                            <li>
                              <a className="facebook" href="/">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a className="instagram" href="/">
                                <i className="fa fa-instagram"></i>
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
                      <div className="blog-tag">
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-author mt-80">
                  <div className="author-img">
                    <img src="assets/img/blog/author.jpg" alt="" />
                  </div>
                  <div className="author-content">
                    <div className="author-content-top">
                      <div className="blog-designation">
                        <h5>AYESHA HOQUE</h5>
                        <span>Author</span>
                      </div>
                      <div className="author-social">
                        <ul>
                          <li>
                            <a className="facebook" href="/">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a className="instagram" href="/">
                              <i className="fa fa-instagram"></i>
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
                    <p>
                      Lorem ipsum dolor sit amet, conse ctetur adipi sicing
                      elit, sed do eiusm od tempor incidi dunt ut labore et
                      dolore magna aliqua. Ut enim fugiat nulla pariaatat non
                      proident, sunt in culpa qui officia deserunt m ut
                      perspiciatis und.
                    </p>
                  </div>
                </div>
                <div className="related-course pt-70">
                  <div className="related-title mb-45">
                    <h3>Related Blog</h3>
                    <p>
                      Hempor incididunt ut labore et dolore mm, itation ullamco
                      laboris <br />
                      nisi ut aliquip.{" "}
                    </p>
                  </div>
                  <RelatedSliderComponent />
                </div>
                <div className="blog-comment">
                  <div className="blog-comment-btn mb-80 commrnt-toggle">
                    <a href="/">VIEW COMMENT</a>
                  </div>
                  <div className="blog-comment-content-wrap">
                    <h4>COMMENT</h4>
                    <div className="single-blog-comment">
                      <div className="blog-comment-img">
                        <img src="assets/img/blog/blog-comment.jpg" alt="" />
                      </div>
                      <div className="blog-comment-content">
                        <h5>AYESHA HOQUE</h5>
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipi sicing
                          elit, sed do eiusm od tempor incidi dunt ut
                          laboperspiciatis und.
                        </p>
                        <a href="/">Reply</a>
                      </div>
                    </div>
                    <div className="single-blog-comment child-comment">
                      <div className="blog-comment-img">
                        <img src="assets/img/blog/blog-comment-2.jpg" alt="" />
                      </div>
                      <div className="blog-comment-content">
                        <h5>AYESHA HOQUE</h5>
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipi sicing
                          elit, sed do eiusm od tempor incidi dunt ut
                          laboperspiciatis und.
                        </p>
                        <a href="/">Reply</a>
                      </div>
                    </div>
                    <div className="single-blog-comment">
                      <div className="blog-comment-img">
                        <img src="assets/img/blog/blog-comment-3.jpg" alt="" />
                      </div>
                      <div className="blog-comment-content">
                        <h5>AYESHA HOQUE</h5>
                        <p>
                          Lorem ipsum dolor sit amet, conse ctetur adipi sicing
                          elit, sed do eiusm od tempor incidi dunt ut
                          laboperspiciatis und.
                        </p>
                        <a href="/">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leave-comment-area">
                  <h3>Leave A Comment</h3>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="leave-form">
                          <input placeholder="Name" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="leave-form">
                          <input placeholder="Email" type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="leave-form leave-btn">
                          <textarea placeholder="Message"></textarea>
                          <input type="submit" value="POST YOUR COMMENT" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-style">
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
      <FooterLayout />
    </Fragment>
  );
}

export default BlogDetailPage;
