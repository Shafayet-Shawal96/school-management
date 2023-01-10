import React, { useState } from "react";
import cssClass from "./HeaderSearchComponents.module.css";

function HeaderSearchComponents() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className={`${cssClass.header_search} ${
        isHover ? cssClass.header_full : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cssClass.flex_container}>
        <input
          className={`${cssClass.input} ${isHover ? cssClass.full : ""}`}
          type="text"
          placeholder="Search"
        />
        <button className={cssClass.icon_button}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default HeaderSearchComponents;
