import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import AllCourseArea from "../Layout/CoursePageLayout/AllCourseArea";
import { useSelector } from "react-redux";

function CoursesPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.CoursesPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <AllCourseArea />
    </Fragment>
  );
}

export default CoursesPage;
