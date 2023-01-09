import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import CartMainArea from "../Components/WishlistPageComponents/CartMainArea";

const breadcrumbObj = {
  title: "Wishlist",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Wishlist",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg.jpg)`,
  },
};

function WishlistPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <CartMainArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default WishlistPage;
