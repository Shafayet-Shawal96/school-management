import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import LoginRegisterArea from "../Components/LoginRegisterPage/LoginRegisterArea";
import BreadcrumbArea from "../Layout/BreadcrumbArea";

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
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <LoginRegisterArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default LoginRegisterPage;
