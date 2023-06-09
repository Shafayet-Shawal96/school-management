import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import EventArea from "../Layout/NoticesPageLayout/EventArea";

function NoticesPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.NoticesPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <EventArea />
    </Fragment>
  );
}

export default NoticesPage;
