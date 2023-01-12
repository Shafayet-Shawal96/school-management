import React, { Fragment } from "react";
import cssClass from "./NewMobileMenu.module.css";

function MobileMenuButton({ menu, updateMenu }) {
  return (
    <Fragment>
      <div className={cssClass.mobile_menu_btn} onClick={updateMenu}>
        <span
          className={`${cssClass.span_top} ${
            menu ? cssClass.span_top_change : ""
          }`}
        ></span>
        <span
          className={`${cssClass.span_middle} ${
            menu ? cssClass.span_middle_change : ""
          }`}
        ></span>
        <span
          className={`${cssClass.span_bottom} ${
            menu ? cssClass.span_bottom_change : ""
          }`}
        ></span>
      </div>
    </Fragment>
  );
}

export default MobileMenuButton;
