import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function CourseSliderOwl() {
  return (
    <OwlCarousel
      className="course-slider-active-2 nav-style-1 owl-carousel"
      loop={true}
      nav={true}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={4}
      margin={30}
      dots={false}
      navText={[
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ]}
      responsive={{
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      }}
    >
      <div className="course-categorie-bundle">
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-5.jpg" alt="" />
            </a>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Courses Title Here</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-9.jpg" alt="" />
            </a>
            <span className="new-course">New Course</span>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Courses Title Here</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="course-categorie-bundle">
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-6.jpg" alt="" />
            </a>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Grphic Design & Multimedia</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-10.jpg" alt="" />
            </a>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Grphic Design & Multimedia</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="course-categorie-bundle">
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-7.jpg" alt="" />
            </a>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Computer Engineering</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-11.jpg" alt="" />
            </a>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Computer Engineering</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="course-categorie-bundle">
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-8.jpg" alt="" />
            </a>
            <span className="new-course">New Course</span>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Fashion & Technology</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-12.jpg" alt="" />
            </a>
            <span className="new-course">New Course</span>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Fashion & Technology</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="course-categorie-bundle">
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-7.jpg" alt="" />
            </a>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Apparel Manufacturing</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
        <div className="single-course mb-30">
          <div className="course-img">
            <a href="course-details.html">
              <img src="assets/img/course/course-8.jpg" alt="" />
            </a>
          </div>
          <div className="course-content course-content-2">
            <h4>
              <a href="course-details.html">Apparel Manufacturing</a>
            </h4>
            <p>
              Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.{" "}
            </p>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default CourseSliderOwl;
