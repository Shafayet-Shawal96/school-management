import React from "react";

function NextArrowComponent({ onClick }) {
  return (
    <span className="e-navigation e-navigation-next active" onClick={onClick}>
      <i className="fa fa-angle-right"></i>
    </span>
  );
}

export default NextArrowComponent;
