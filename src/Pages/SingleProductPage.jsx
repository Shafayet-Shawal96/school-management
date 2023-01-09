import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import DescriptiveReviewArea from "../Components/SingleProductPageComponents/DescriptiveReviewArea";
import Modal from "../Components/SingleProductPageComponents/Modal";
import RelatedCourse from "../Components/SingleProductPageComponents/RelatedCourse";
import SingleProductArea from "../Components/SingleProductPageComponents/SingleProductArea";
import BreadcrumbArea from "../Layout/BreadcrumbArea";

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
