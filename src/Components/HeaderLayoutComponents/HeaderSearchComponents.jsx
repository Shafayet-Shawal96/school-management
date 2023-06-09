import React, { useState, useEffect } from "react";
import cssClass from "./HeaderSearchComponents.module.css";

const inputTwoClass = `${cssClass.input_full} ${cssClass.transition_delay}`;
const headerSearchTwoClass = `${cssClass.header_search_close} ${cssClass.transition_delay}`;

function HeaderSearchComponents() {
  const [clickAnimation, setClickAnimation] = useState(false);
  const [inputField, setInputField] = useState("");
  const [hover, setHover] = useState(false);

  const inputOnChange = (e) => {
    setInputField(e.target.value);
  };

  const addAnimation = (e) => {
    setClickAnimation(true);
    setTimeout(() => {
      setHover(true);
    }, 2000);
  };

  useEffect(() => {
    const otherClickEvent = (e) => {
      const searchElements = [].slice.call(
        document
          .querySelector(`div[class*="${cssClass.header_search}"]`)
          .getElementsByTagName("*"),
        0
      );

      if (!Object.values(searchElements).includes(e.target)) {
        setClickAnimation(false);
        setInputField("");
        setHover(false);
      }
    };

    document.addEventListener("click", otherClickEvent);

    return () => {
      document.removeEventListener("click", otherClickEvent);
    };
  }, []);

  return (
    <div
      className={`${cssClass.header_search} ${
        clickAnimation ? cssClass.header_full : headerSearchTwoClass
      }`}
      onClick={addAnimation}
    >
      <div
        className={`${cssClass.flex_container} ${
          clickAnimation ? cssClass.flex_container_color : ""
        }`}
      >
        <input
          className={`${cssClass.input} ${clickAnimation ? inputTwoClass : ""}`}
          type="text"
          value={inputField}
          placeholder="Search"
          onChange={inputOnChange}
        />
        <button
          className={`${cssClass.icon_button} ${
            clickAnimation ? cssClass.icon_button_white : ""
          } ${hover ? cssClass.icon_button_hover : ""}`}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default React.memo(HeaderSearchComponents);
