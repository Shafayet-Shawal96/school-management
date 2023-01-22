import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import { useSelector } from "react-redux";
import EventAreaObserver from "../Layout/EventPageLayout/EventAreaObserver";

function EventPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.EventPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      {/* <EventArea /> */}
      {/* <EventAreaStoreLess /> */}
      <EventAreaObserver />
    </Fragment>
  );
}

export default EventPage;
