import React, { useState, useEffect } from "react";
import cssClass from "./HeaderSearchComponents.module.css";

const twoClass = `${cssClass.input_full} ${cssClass.transition_delay}`;

function HeaderSearchComponents() {
  const [clickAnimation, setClickAnimation] = useState(false);
  const [inputField, setInputField] = useState("");

  const inputOnChange = (e) => {
    setInputField(e.target.value);
  };

  const addAnimation = (e) => {
    setClickAnimation(true);
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
        clickAnimation ? cssClass.header_full : cssClass.transition_delay
      }`}
      onClick={addAnimation}
    >
      <div className={cssClass.flex_container}>
        <input
          className={`${cssClass.input} ${clickAnimation ? twoClass : ""}`}
          type="text"
          value={inputField}
          placeholder="Search"
          onChange={inputOnChange}
        />
        <button className={cssClass.icon_button}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default React.memo(HeaderSearchComponents);
