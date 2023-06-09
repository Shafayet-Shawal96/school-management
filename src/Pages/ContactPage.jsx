import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import ContactArea from "../Layout/ContactPageLayout/ContactArea";
import ContactInfoArea from "../Layout/ContactPageLayout/ContactInfoArea";
import { useSelector } from "react-redux";

function ContactPage() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const breadcrumbObj = UIObject[0].breadcrumbObj.ContactPage;
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <ContactArea />
      <ContactInfoArea />
    </Fragment>
  );
}

export default ContactPage;
