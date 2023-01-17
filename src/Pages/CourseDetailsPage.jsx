import React, { Fragment } from "react";
import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import CourseDetailArea from "../Layout/CourseDetailsPageLayout/CourseDetailArea";
import { useSelector } from "react-redux";

function CourseDetailsPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.CourseDetailsPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <CourseDetailArea />
    </Fragment>
  );
}

export default CourseDetailsPage;
