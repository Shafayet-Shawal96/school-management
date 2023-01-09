import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import EventDetailArea from "../Layout/EventDetailsPageLayout/EventDetailArea";

const breadcrumbObj = {
  title: "Event Details",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Event Details",
  overlayClass: "breadcrumb-overly-2",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-2.jpg)`,
  },
};

function EventDetailsPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventDetailArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default EventDetailsPage;
