import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import EventArea from "../Components/ShopPageComponents/EventArea";
import Modal from "../Components/ShopPageComponents/Modal";
import BreadcrumbArea from "../Layout/BreadcrumbArea";

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
