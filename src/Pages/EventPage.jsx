import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import EventArea from "../Layout/EventPageLayout/EventArea";

const breadcrumbObj = {
  title: "Event Grid",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Event Grid",
  overlayClass: "breadcrumb-overly-3",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-3.jpg)`,
  },
};

function EventPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventArea />
    </Fragment>
  );
}

export default EventPage;
