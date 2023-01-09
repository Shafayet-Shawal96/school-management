import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import Modal from "../Layout/ShopPageLayout/Modal";
import EventArea from "../Layout/ShopPageLayout/EventArea";

const breadcrumbObj = {
  title: "Shop Grid",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Shop Grid",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function ShopPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventArea />
      <BrandCarouselComponent />
      {/* <!-- Modal --> */}
      <Modal />
      {/* <!-- Modal end --> */}
    </Fragment>
  );
}

export default ShopPage;
