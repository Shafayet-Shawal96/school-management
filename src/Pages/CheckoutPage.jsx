import React, { Fragment } from "react";
import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import CheckoutArea from "../Layout/CheckoutPageLayout/CheckoutArea";

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
