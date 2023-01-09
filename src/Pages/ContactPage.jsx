import React, { Fragment } from "react";
import ContactArea from "../Components/ContactPageComponents/ContactArea";
import ContactInfoArea from "../Components/ContactPageComponents/ContactInfoArea";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";

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
