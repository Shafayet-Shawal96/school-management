import React, { Fragment } from "react";
import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import CourseDetailArea from "../Layout/CourseDetailsPageLayout/CourseDetailArea";

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
