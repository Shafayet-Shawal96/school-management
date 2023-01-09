import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import CartMainArea from "../Components/CartPageComponents/CartMainArea";

const breadcrumbObj = {
  title: "Cart",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Cart",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function CartPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <CartMainArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default CartPage;
