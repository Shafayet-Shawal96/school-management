import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import LoginRegisterArea from "../Components/LoginRegisterPage/LoginRegisterArea";

const breadcrumbObj = {
  title: "Login/Register",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "login/Register",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function LoginRegisterPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <LoginRegisterArea />
      <BrandCarouselComponent />
      <FooterLayout />
    </Fragment>
  );
}

export default LoginRegisterPage;
