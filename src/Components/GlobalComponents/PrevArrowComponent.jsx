import React from "react";

function PrevArrowComponent({ onClick }) {
  return (
    <span className="b-navigation b-navigation-prev " onClick={onClick}>
      <i className="fa fa-angle-left"></i>
    </span>
  );
}

export default PrevArrowComponent;
