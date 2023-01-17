import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import EventDetailArea from "../Layout/EventDetailsPageLayout/EventDetailArea";
import { useSelector } from "react-redux";

function EventDetailsPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.NoticesPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventDetailArea />
    </Fragment>
  );
}

export default EventDetailsPage;
