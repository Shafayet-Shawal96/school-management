import React, { Fragment } from "react";
import BlogListRow from "../Components/BlogPageComponents/BlogListRow";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbObj = {
  title: "Blog Grid",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Blog Grid",
  overlayClass: "breadcrumb-overly-3",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-5.jpg)`,
  },
};

function BlogPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="event-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <BlogListRow />
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

export default BlogPage;
