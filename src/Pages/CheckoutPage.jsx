import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbObj = {
  title: "Checkout",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Checkout",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function CheckoutPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <BrandCarouselComponent />
      <FooterLayout />
    </Fragment>
  );
}

export default CheckoutPage;
