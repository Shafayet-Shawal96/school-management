import React, { useEffect, useState } from "react";
import cssClass from "./MobileMenu.module.css";
import { Link } from "react-router-dom";
import headerLayoutCss from "../../Layout/GlobalLayout/HeaderLayout.module.css";

function MobileMenu({ menu, mainHeader }) {
  const [subMenu, setSubMenu] = useState(menu);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    setSubMenu(false);
    setBump(true);

    const timer = setTimeout(() => {
      setBump(false);
    }, 1000);
    const body_element = document.querySelector("#body");
    if (menu) {
      mainHeader.current.classList.add(headerLayoutCss.mobile_menu_open);
      body_element.classList.add("scroll_disable");
    } else {
      mainHeader.current.classList.remove(headerLayoutCss.mobile_menu_open);
      body_element.classList.remove("scroll_disable");
    }
    return () => {
      clearTimeout(timer);
    };
  }, [menu, mainHeader]);

  // useEffect(() => {
  //   setBump(true);

  //   const timer = setTimeout(() => {
  //     setBump(false);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [menu]);

  const updateSubMenu = (e) => {
    e.preventDefault();
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
      <nav className={`${cssClass.nav} ${bump ? cssClass.nav_animate : ""}`}>
        <ul className={cssClass.menu_items}>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <Link to="/">HOME</Link>
              <Link
                id={1}
                to="#"
                onClick={updateSubMenu}
                className={`${cssClass.arrow} ${
                  subMenu === 1 ? cssClass.arrow_rotate : ""
                }`}
              >
                <i id={1} className="zmdi zmdi-chevron-up"></i>
              </Link>
            </div>
            {/* <div className={cssClass.separator}></div> */}
            <ul
              className={`${cssClass.menu_subitems} ${
                subMenu === 1 ? cssClass.menu_subitems_show_home : ""
              }`}
            >
              <li>
                <Link to="/">home version 1</Link>
              </li>
              <li>
                <Link to="/index-two">home version 2</Link>
              </li>
              <li>
                <Link to="/index-three">home version 3</Link>
              </li>
            </ul>
            {/* {subMenu === 1 && <div className={cssClass.separator}></div>} */}
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <Link to="/about">ABOUT</Link>
            </div>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <Link to="/shop">SHOP</Link>
            </div>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <Link to="#">PAGES</Link>
              <Link
                id={2}
                to="#"
                onClick={updateSubMenu}
                className={`${cssClass.arrow} ${
                  subMenu === 2 ? cssClass.arrow_rotate : ""
                }`}
              >
                <i id={2} className="zmdi zmdi-chevron-up"></i>
              </Link>
            </div>
            <ul
              className={`${cssClass.menu_subitems} ${
                subMenu === 2 ? cssClass.menu_subitems_show_pages : ""
              }`}
            >
              <li>
                <Link to="/course">Course Page</Link>
              </li>
              <li>
                <Link to="/event">Event Page</Link>
              </li>
              <li>
                <Link to="/shop">Shop Page</Link>
              </li>
              <li>
                <Link to="/course-details">Course Details</Link>
              </li>
              <li>
                <Link to="/event-details">Event Details</Link>
              </li>
              <li>
                <Link to="/single-product">Single Product</Link>
              </li>
              <li>
                <Link to="/cart">Cart Page</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/login-register">Login / Register</Link>
              </li>
            </ul>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <Link to="/course">COURSES / PROGRAMMES</Link>
            </div>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <Link to="/blog">BLOG</Link>
              <Link
                id={3}
                to="/"
                onClick={updateSubMenu}
                className={`${cssClass.arrow} ${
                  subMenu === 3 ? cssClass.arrow_rotate : ""
                }`}
              >
                <i id={3} className="zmdi zmdi-chevron-up"></i>
              </Link>
            </div>
            <ul
              className={`${cssClass.menu_subitems} ${
                subMenu === 3 ? cssClass.menu_subitems_show_blog : ""
              }`}
            >
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/blog-detail">Blog Detail</Link>
              </li>
            </ul>
          </li>
          <li className={cssClass.menu_item}>
            <div className={cssClass.manu_item_header}>
              <Link to="/contact">CONTACT</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
