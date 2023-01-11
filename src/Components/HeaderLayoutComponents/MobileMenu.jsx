import React, { useState } from "react";
import cssClass from "./MobileMenu.module.css";
import NewMobileMenu from "./MobileMenuButton";

function MobileMenu() {
  // const [menu, setMenu] = useState(false);
  // const [subMenu, setSubMenu] = useState(false);

  // const updateMenu = (e) => {
  //   e.preventDefault();
  //   setMenu(!menu);
  // };

  // const updateSubMenu = (e) => {
  //   e.preventDefault();
  //   const id = Number(e.target.id);
  //   if (subMenu === id) {
  //     setSubMenu(false);
  //   } else {
  //     setSubMenu(id);
  //   }
  // };

  return (
    <div>
      {/* <div className="mobile-menu-area">
        <div className="mobile-menu mean-container">
          <div className="mean-bar">
            <a
              href="#nav"
              className={`meanmenu-reveal ${menu ? "meanclose" : ""} `}
              style={
                menu
                  ? { textAlign: "center", textIndent: "0px", fontSize: "18px" }
                  : {}
              }
              onClick={updateMenu}
            >
              <NewMobileMenu />
            </a>
            <nav className="mean-nav">
              <ul
                className="menu-overflow"
                style={{ display: menu ? "block" : "none" }}
              >
                <li>
                  <a href="index.html">Home</a>
                  <ul style={{ display: subMenu === 1 ? "block" : "none" }}>
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
                  <a
                    className={`mean-expand ${
                      subMenu === 1 ? "mean-clicked" : ""
                    }`}
                    id={1}
                    href="/"
                    style={{ fontSize: "18px" }}
                    onClick={updateSubMenu}
                  >
                    {subMenu === 1 ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="shop.html">About</a>
                </li>
                <li>
                  <a href="index.html">Shop</a>
                  <ul style={{ display: subMenu === 2 ? "block" : "none" }}>
                    <li>
                      <a href="index.html">Category 1</a>
                    </li>
                    <li>
                      <a href="index.html">Category 2</a>
                    </li>
                    <li>
                      <a href="index.html">Category 3</a>
                    </li>
                    <li>
                      <a href="index.html">Category 4</a>
                    </li>
                  </ul>
                  <a
                    className={`mean-expand ${
                      subMenu === 2 ? "mean-clicked" : ""
                    }`}
                    id={2}
                    href="/"
                    style={{ fontSize: "18px" }}
                    onClick={updateSubMenu}
                  >
                    {subMenu === 2 ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="index.html">Pages</a>
                  <ul style={{ display: subMenu === 3 ? "block" : "none" }}>
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
                  <a
                    className={`mean-expand ${
                      subMenu === 3 ? "mean-clicked" : ""
                    }`}
                    id={3}
                    href="/"
                    style={{ fontSize: "18px" }}
                    onClick={updateSubMenu}
                  >
                    {subMenu === 3 ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="index.html">Blog</a>
                  <ul style={{ display: subMenu === 4 ? "block" : "none" }}>
                    <li>
                      <a href="index.html">Blog</a>
                    </li>
                    <li>
                      <a href="index.html">Blog Details</a>
                    </li>
                  </ul>
                  <a
                    className={`mean-expand ${
                      subMenu === 4 ? "mean-clicked" : ""
                    }`}
                    id={4}
                    href="/"
                    style={{ fontSize: "18px" }}
                    onClick={updateSubMenu}
                  >
                    {subMenu === 4 ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="shop.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mean-push"></div>
          <nav id="mobile-menu-active" style={{ display: "none" }}>
            <ul className="menu-overflow">
              <li>
                <a href="index.html">HOME</a>
                <ul>
                  <li>
                    <a href="index.html">home version 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">home version 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">home version 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about-us.html">About</a>
              </li>
              <li>
                <a href="shop.html">Shop</a>
                <ul>
                  <li>
                    <a href="/">Categories 01</a>
                    <ul>
                      <li>
                        <a href="shop.html">bag</a>
                      </li>
                      <li>
                        <a href="shop.html">Pen</a>
                      </li>
                      <li>
                        <a href="shop.html">Erasers</a>
                      </li>
                      <li>
                        <a href="shop.html">Glue sticks</a>
                      </li>
                      <li>
                        <a href="shop.html">Lunchbox </a>
                      </li>
                      <li>
                        <a href="shop.html">Pencil box </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Categories 02</a>
                    <ul>
                      <li>
                        <a href="shop.html">bag</a>
                      </li>
                      <li>
                        <a href="shop.html">Pen</a>
                      </li>
                      <li>
                        <a href="shop.html">Erasers</a>
                      </li>
                      <li>
                        <a href="shop.html">Glue sticks</a>
                      </li>
                      <li>
                        <a href="shop.html">Lunchbox </a>
                      </li>
                      <li>
                        <a href="shop.html">Pencil box </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Categories 03</a>
                    <ul>
                      <li>
                        <a href="shop.html">bag</a>
                      </li>
                      <li>
                        <a href="shop.html">Pen</a>
                      </li>
                      <li>
                        <a href="shop.html">Erasers</a>
                      </li>
                      <li>
                        <a href="shop.html">Glue sticks</a>
                      </li>
                      <li>
                        <a href="shop.html">Lunchbox </a>
                      </li>
                      <li>
                        <a href="shop.html">Pencil box </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Categories 04</a>
                    <ul>
                      <li>
                        <a href="shop.html">bag</a>
                      </li>
                      <li>
                        <a href="shop.html">Pen</a>
                      </li>
                      <li>
                        <a href="shop.html">Erasers</a>
                      </li>
                      <li>
                        <a href="shop.html">Glue sticks</a>
                      </li>
                      <li>
                        <a href="shop.html">Lunchbox </a>
                      </li>
                      <li>
                        <a href="shop.html">Pencil box </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Pages</a>
                <ul>
                  <li>
                    <a href="course.html">course page</a>
                  </li>
                  <li>
                    <a href="event.html">event page</a>
                  </li>
                  <li>
                    <a href="shop.html">shop page</a>
                  </li>
                  <li>
                    <a href="course-details.html">course details</a>
                  </li>
                  <li>
                    <a href="event-details.html">event details</a>
                  </li>
                  <li>
                    <a href="single-product.html">single product</a>
                  </li>
                  <li>
                    <a href="cart.html">cart page</a>
                  </li>
                  <li>
                    <a href="checkout.html">checkout</a>
                  </li>
                  <li>
                    <a href="wishlist.html">wishlist</a>
                  </li>
                  <li>
                    <a href="login-register.html">login / register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about-us.html">About us</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog.html">blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">blog details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div> */}
    </div>
  );
}

export default MobileMenu;
