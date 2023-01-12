import React from "react";
import { Link } from "react-router-dom";
import RelatedCourse from "../../Components/AboutUsPageComponents/RelatedCourse";

function EventArea() {
  return (
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
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <blockquote>
                    <i className="quote-top fa fa-quote-left"></i>
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                    sed do eiusm od tempor incidi dunt ut labore et dolore magna
                    aliqua. Ut enim fugiat nulla pariaatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit
                    <i className="quote-bottom fa fa-quote-right"></i>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <div className="blog-share-tags">
                    <div className="blog-share">
                      <div className="blog-btn">
                        <Link to="#">
                          <i className="fa fa-share-alt"></i>
                        </Link>
                      </div>
                      <div className="blog-social">
                        <ul>
                          <li>
                            <Link className="facebook" to="#">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link className="instagram" to="#">
                              <i className="fa fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link className="twitter" to="#">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link className="google" to="#">
                              <i className="fa fa-google-plus"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-tag">
                      <ul>
                        <li>
                          <Link to="#">Loremsite</Link>
                        </li>
                        <li>
                          <Link to="#">Loreipsum</Link>
                        </li>
                        <li>
                          <Link to="#">Dolar</Link>
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
                          <Link className="facebook" to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="instagram" to="#">
                            <i className="fa fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="twitter" to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="google" to="#">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit,
                    sed do eiusm od tempor incidi dunt ut labore et dolore magna
                    aliqua. Ut enim fugiat nulla pariaatat non proident, sunt in
                    culpa qui officia deserunt m ut perspiciatis und.
                  </p>
                </div>
              </div>
              <RelatedCourse />
              <div className="blog-comment">
                <div className="blog-comment-btn mb-80 commrnt-toggle">
                  <Link to="#">VIEW COMMENT</Link>
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
                      <Link to="#">Reply</Link>
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
                      <Link to="#">Reply</Link>
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
                      <Link to="#">Reply</Link>
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
                <Link to="#">
                  <img src="assets/img/banner/banner-4.jpg" alt="" />
                </Link>
                <div className="sidebar-social">
                  <ul>
                    <li>
                      <Link className="facebook" to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="youtube" to="#">
                        <i className="fa fa-youtube-play"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="google" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
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
                      <Link to="#">
                        <img src="assets/img/blog/recent-post-1.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <h5>
                        <Link to="#">Blog title will be here.</Link>
                      </h5>
                      <span>Blog Category</span>
                      <p>Datat non proident qui offici.hafw adec qart.</p>
                    </div>
                  </div>
                  <div className="single-recent-post">
                    <div className="recent-post-img">
                      <Link to="#">
                        <img src="assets/img/blog/recent-post-2.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <h5>
                        <Link to="#">Blog title will be here.</Link>
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
                      <Link to="#">
                        MBA <span>04</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Graduate <span>08</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Under Graduate <span>04</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        BBA <span>06</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Engineering <span>04</span>
                      </Link>
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
                      <Link to="#">
                        <img src="assets/img/blog/recent-post-1.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="sidebar-recent-course-content">
                      <h4>
                        <Link to="#">Course Title</Link>
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
                      <Link to="#">
                        <img src="assets/img/blog/recent-post-2.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="sidebar-recent-course-content">
                      <h4>
                        <Link to="#">Course Title</Link>
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
                      <Link to="#">Loremsite</Link>
                    </li>
                    <li>
                      <Link to="#">Loreipsum</Link>
                    </li>
                    <li>
                      <Link to="#">Dolar</Link>
                    </li>
                    <li>
                      <Link to="#">Site ament dollar</Link>
                    </li>
                    <li>
                      <Link to="#">Loremsite</Link>
                    </li>
                    <li>
                      <Link to="#">Dummy Text</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventArea;
