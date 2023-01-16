import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginDeatils } from "../Store/LoginPageSlice";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import LoginRegisterArea from "../Layout/LoginRegisterPageLayout/LoginRegisterArea";

const breadcrumbObj = {
  title: "Login/Register",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "login/Register",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function LoginRegisterPage() {
  const loginObject = useSelector((state) => state.loginPage.loginObject);
  console.log(loginObject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoginDeatils());
  }, [dispatch]);

  return (
    <Fragment>
      <BreadcrumbArea
        breadcrumbObj={
          loginObject.length !== 0 ? loginObject[0] : breadcrumbObj
        }
      />
      <LoginRegisterArea />
    </Fragment>
  );
}

export default LoginRegisterPage;
