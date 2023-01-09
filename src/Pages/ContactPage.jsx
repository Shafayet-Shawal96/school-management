import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import ContactArea from "../Components/ContactPageComponents/ContactArea";
import ContactInfoArea from "../Components/ContactPageComponents/ContactInfoArea";

const breadcrumbObj = {
  title: "Contact Us",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Contact Us",
  overlayClass: "breadcrumb-overly-5",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-6.jpg)`,
  },
};

function ContactPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <ContactArea />
      <ContactInfoArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default ContactPage;
