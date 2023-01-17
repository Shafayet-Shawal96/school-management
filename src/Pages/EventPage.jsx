import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import EventArea from "../Layout/EventPageLayout/EventArea";
import { useSelector } from "react-redux";

function EventPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.EventPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventArea />
    </Fragment>
  );
}

export default EventPage;
