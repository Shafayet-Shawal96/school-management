import React, { useEffect, useState } from "react";
import cssClass from "./MobileMenu.module.css";

const arrow = ">";

function MobileMenu({ menu }) {
  const [subMenu, setSubMenu] = useState(menu);

  useEffect(() => {
    setSubMenu(false);
    const body_element = document.querySelector("#body");
    if (menu) {
      body_element.classList.add("scroll_disable");
    } else {
      body_element.classList.remove("scroll_disable");
    }
  }, [menu]);

  const updateSubMenu = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const id = Number(e.target.id);
    if (subMenu === id) {
      setSubMenu(false);
    } else {
      setSubMenu(id);
    }
  };

  return (
    <div
      className={`${cssClass.mobile_menu_area} ${
        menu ? cssClass.mobile_menu_area_show : ""
      }`}
    >
      <nav className={cssClass.nav}>
        <ul className={cssClass.menu_items}>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <a href="index.html">HOME</a>
              <a
                id={1}
                href="/"
                onClick={updateSubMenu}
                className={`${cssClass.arrow} ${
                  subMenu === 1 ? cssClass.arrow_rotate : ""
                }`}
              >
                {arrow}
              </a>
            </div>
            <ul
              className={`${cssClass.menu_subitems} ${
                subMenu === 1 ? cssClass.menu_subitems_show_home : ""
              }`}
            >
              <li>
                <a href="index.html">home version 1</a>
              </li>
              <li>
                <a href="index.html">home version 2</a>
              </li>
              <li>
                <a href="index.html">home version 3</a>
              </li>
            </ul>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <a href="index.html">ABOUT</a>
            </div>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <a href="index.html">SHOP</a>
            </div>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <a href="index.html">PAGES</a>
              <a
                id={2}
                href="/"
                onClick={updateSubMenu}
                className={`${cssClass.arrow} ${
                  subMenu === 2 ? cssClass.arrow_rotate : ""
                }`}
              >
                {arrow}
              </a>
            </div>
            <ul
              className={`${cssClass.menu_subitems} ${
                subMenu === 2 ? cssClass.menu_subitems_show_pages : ""
              }`}
            >
              <li>
                <a href="index.html">Course Page</a>
              </li>
              <li>
                <a href="index.html">Event Page</a>
              </li>
              <li>
                <a href="index.html">Shop Page</a>
              </li>
              <li>
                <a href="index.html">Course Details</a>
              </li>
              <li>
                <a href="index.html">Event Details</a>
              </li>
              <li>
                <a href="index.html">Single Product</a>
              </li>
              <li>
                <a href="index.html">Cart Page</a>
              </li>
              <li>
                <a href="index.html">Checkout</a>
              </li>
              <li>
                <a href="index.html">Wishlist</a>
              </li>
              <li>
                <a href="index.html">Login / Register</a>
              </li>
            </ul>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <a href="index.html">COURSES / PROGRAMMES</a>
            </div>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <a href="index.html">BLOG</a>
              <a
                id={3}
                href="/"
                onClick={updateSubMenu}
                className={`${cssClass.arrow} ${
                  subMenu === 3 ? cssClass.arrow_rotate : ""
                }`}
              >
                {arrow}
              </a>
            </div>
            <ul
              className={`${cssClass.menu_subitems} ${
                subMenu === 3 ? cssClass.menu_subitems_show_blog : ""
              }`}
            >
              <li>
                <a href="index.html">Blog</a>
              </li>
              <li>
                <a href="index.html">Blog Detail</a>
              </li>
            </ul>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <a href="index.html">CONTACT</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
