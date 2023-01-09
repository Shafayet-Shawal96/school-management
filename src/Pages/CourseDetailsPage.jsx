import React, { Fragment } from "react";
import CourseDetailArea from "../Components/CourseDetailsPageComponents/CourseDetailArea";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";

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
      <CourseDetailArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default CourseDetailsPage;
