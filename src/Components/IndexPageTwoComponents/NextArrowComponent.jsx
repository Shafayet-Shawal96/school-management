import React from "react";

function NextArrowComponent({ onClick }) {
  return (
    <span class="e-navigation e-navigation-next active" onClick={onClick}>
      <i class="fa fa-angle-right"></i>
    </span>
  );
}

export default NextArrowComponent;
