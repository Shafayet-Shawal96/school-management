import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import Modal from "../Layout/SinglePageLayout/Modal";
import RelatedCourse from "../Layout/SinglePageLayout/RelatedCourse";
import SingleProductArea from "../Layout/SinglePageLayout/SingleProductArea";
import DescriptiveReviewArea from "../Layout/SinglePageLayout/DescriptiveReviewArea";

const breadcrumbObj = {
  title: "Product Details",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Product Details",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function SingleProductPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <SingleProductArea />
      <DescriptiveReviewArea />
      <RelatedCourse />
      <BrandCarouselComponent />
      {/* <!-- Modal --> */}
      <Modal />
      {/* <!-- Modal end --> */}
    </Fragment>
  );
}

export default SingleProductPage;
