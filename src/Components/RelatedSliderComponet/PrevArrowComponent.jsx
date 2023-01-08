import React from "react";

function PrevArrowComponent({ onClick }) {
  return (
    <span class="b-navigation b-navigation-prev " onClick={onClick}>
      <i class="fa fa-angle-left"></i>
    </span>
  );
}

export default PrevArrowComponent;
