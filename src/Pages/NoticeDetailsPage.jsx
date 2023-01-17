import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import NoticeArea from "../Layout/NoticeDetailsPageLayout/NoticeArea";

function NoticeDetailsPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.NoticeDetailsPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <NoticeArea />
    </Fragment>
  );
}

export default NoticeDetailsPage;
