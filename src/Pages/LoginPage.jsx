import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import LoginArea from "../Layout/LoginPageLayout/LoginArea";

function LoginPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.LoginPage;

  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <LoginArea />
    </Fragment>
  );
}

export default LoginPage;
