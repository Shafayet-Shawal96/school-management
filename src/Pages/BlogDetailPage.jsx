import React, { Fragment } from "react";
import EventArea from "../Components/BlogDetailPageComponents/EventArea";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";

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
