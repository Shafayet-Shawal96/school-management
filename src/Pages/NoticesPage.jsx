import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import EventArea from "../Layout/NoticesPageLayout/EventArea";

const breadcrumbObj = {
  title: "Notices",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Notices",
  overlayClass: "breadcrumb-overly-3",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-5.jpg)`,
  },
};

function NoticesPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventArea />
    </Fragment>
  );
}

export default NoticesPage;
