import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import EventArea from "../Components/BlogDetailPageComponents/EventArea";

const breadcrumbObj = {
  title: "Blog Details",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Blog Details",
  overlayClass: "breadcrumb-overly-3",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-5.jpg)`,
  },
};

function BlogDetailPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default BlogDetailPage;
