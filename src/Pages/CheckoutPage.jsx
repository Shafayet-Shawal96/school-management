import React, { Fragment } from "react";
import CheckoutArea from "../Components/CheckoutPageComponents/CheckoutArea";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";

const breadcrumbObj = {
  title: "Checkout",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Checkout",
  overlayclassName: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function CheckoutPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <CheckoutArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default CheckoutPage;
