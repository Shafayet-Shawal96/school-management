import React, { Fragment } from "react";
import CourseSlider from "../Components/CoursePageComponents/CourseSlider";
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

function CoursePage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="course-area bg-img pt-130">
        <div className="container">
          <div className="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              <span>Undergraduate</span> Courses
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <CourseSlider />
        </div>
      </div>
      <div className="course-area bg-img">
        <div className="container">
          <div className="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              Graduate <span>Courses</span>
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <CourseSlider />
        </div>
      </div>
      <div className="course-area bg-img">
        <div className="container">
          <div className="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              <span>Diploma</span> Courses
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <CourseSlider />
        </div>
      </div>
      <BrandCarouselComponent />
      <FooterLayout />
    </Fragment>
  );
}

export default CoursePage;
