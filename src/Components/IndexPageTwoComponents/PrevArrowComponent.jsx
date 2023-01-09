import React from "react";

function PrevArrowComponent({ onClick }) {
  return (
    <span class="e-navigation e-navigation-prev " onClick={onClick}>
      <i class="fa fa-angle-left"></i>
    </span>
  );
}

export default PrevArrowComponent;
