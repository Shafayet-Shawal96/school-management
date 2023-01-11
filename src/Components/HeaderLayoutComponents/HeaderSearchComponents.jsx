import React, { useState } from "react";
import cssClass from "./HeaderSearchComponents.module.css";

const twoClass = `${cssClass.input_full} ${cssClass.transition_delay}`;

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
        isHover ? cssClass.header_full : cssClass.transition_delay
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cssClass.flex_container}>
        <input
          className={`${cssClass.input} ${isHover ? twoClass : ""}`}
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
