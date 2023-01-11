import React, { useState } from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <>
      <span></span>
      <span></span>
      <span></span>
    </>
  );
}

function MobileMenu() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const updateMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

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
    <div className="mobile-menu-area">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <Link
            to="#nav"
            className={`meanmenu-reveal ${menu ? "meanclose" : ""}`}
            style={
              menu
                ? { textAlign: "center", textIndent: "0px", fontSize: "18px" }
                : {}
            }
            onClick={updateMenu}
          >
            {menu ? "X" : <Button />}
          </Link>
          <nav className="mean-nav">
            <ul
              className="menu-overflow"
              style={{ display: menu ? "block" : "none" }}
            >
              <li>
                <Link to="index.html">Home</Link>
                <ul style={{ display: subMenu === 1 ? "block" : "none" }}>
                  <li>
                    <Link to="index.html">home version 1</Link>
                  </li>
                  <li>
                    <Link to="index.html">home version 2</Link>
                  </li>
                  <li>
                    <Link to="index.html">home version 3</Link>
                  </li>
                </ul>
                <Link
                  className={`mean-expand ${
                    subMenu === 1 ? "mean-clicked" : ""
                  }`}
                  id={1}
                  to="#"
                  style={{ fontSize: "18px" }}
                  onClick={updateSubMenu}
                >
                  {subMenu === 1 ? "-" : "+"}
                </Link>
              </li>
              <li>
                <Link to="shop.html">About</Link>
              </li>
              <li>
                <Link to="index.html">Shop</Link>
                <ul style={{ display: subMenu === 2 ? "block" : "none" }}>
                  <li>
                    <Link to="index.html">Category 1</Link>
                  </li>
                  <li>
                    <Link to="index.html">Category 2</Link>
                  </li>
                  <li>
                    <Link to="index.html">Category 3</Link>
                  </li>
                  <li>
                    <Link to="index.html">Category 4</Link>
                  </li>
                </ul>
                <Link
                  className={`mean-expand ${
                    subMenu === 2 ? "mean-clicked" : ""
                  }`}
                  id={2}
                  to="#"
                  style={{ fontSize: "18px" }}
                  onClick={updateSubMenu}
                >
                  {subMenu === 2 ? "-" : "+"}
                </Link>
              </li>
              <li>
                <Link to="index.html">Pages</Link>
                <ul style={{ display: subMenu === 3 ? "block" : "none" }}>
                  <li>
                    <Link to="index.html">Course Page</Link>
                  </li>
                  <li>
                    <Link to="index.html">Event Page</Link>
                  </li>
                  <li>
                    <Link to="index.html">Shop Page</Link>
                  </li>
                  <li>
                    <Link to="index.html">Course Details</Link>
                  </li>
                  <li>
                    <Link to="index.html">Event Details</Link>
                  </li>
                  <li>
                    <Link to="index.html">Single Product</Link>
                  </li>
                  <li>
                    <Link to="index.html">Cart Page</Link>
                  </li>
                  <li>
                    <Link to="index.html">Checkout</Link>
                  </li>
                  <li>
                    <Link to="index.html">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="index.html">Login / Register</Link>
                  </li>
                </ul>
                <Link
                  className={`mean-expand ${
                    subMenu === 3 ? "mean-clicked" : ""
                  }`}
                  id={3}
                  to="#"
                  style={{ fontSize: "18px" }}
                  onClick={updateSubMenu}
                >
                  {subMenu === 3 ? "-" : "+"}
                </Link>
              </li>
              <li>
                <Link to="index.html">Blog</Link>
                <ul style={{ display: subMenu === 4 ? "block" : "none" }}>
                  <li>
                    <Link to="index.html">Blog</Link>
                  </li>
                  <li>
                    <Link to="index.html">Blog Details</Link>
                  </li>
                </ul>
                <Link
                  className={`mean-expand ${
                    subMenu === 4 ? "mean-clicked" : ""
                  }`}
                  id={4}
                  to="#"
                  style={{ fontSize: "18px" }}
                  onClick={updateSubMenu}
                >
                  {subMenu === 4 ? "-" : "+"}
                </Link>
              </li>
              <li>
                <Link to="shop.html">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push"></div>
        <nav id="mobile-menu-active" style={{ display: "none" }}>
          <ul className="menu-overflow">
            <li>
              <Link to="index.html">HOME</Link>
              <ul>
                <li>
                  <Link to="index.html">home version 1</Link>
                </li>
                <li>
                  <Link to="index-2.html">home version 2</Link>
                </li>
                <li>
                  <Link to="index-3.html">home version 3</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="about-us.html">About</Link>
            </li>
            <li>
              <Link to="shop.html">Shop</Link>
              <ul>
                <li>
                  <Link to="#">Categories 01</Link>
                  <ul>
                    <li>
                      <Link to="shop.html">bag</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pen</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Erasers</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Glue sticks</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Lunchbox </Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pencil box </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Categories 02</Link>
                  <ul>
                    <li>
                      <Link to="shop.html">bag</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pen</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Erasers</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Glue sticks</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Lunchbox </Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pencil box </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Categories 03</Link>
                  <ul>
                    <li>
                      <Link to="shop.html">bag</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pen</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Erasers</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Glue sticks</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Lunchbox </Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pencil box </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Categories 04</Link>
                  <ul>
                    <li>
                      <Link to="shop.html">bag</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pen</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Erasers</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Glue sticks</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Lunchbox </Link>
                    </li>
                    <li>
                      <Link to="shop.html">Pencil box </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Pages</Link>
              <ul>
                <li>
                  <Link to="course.html">course page</Link>
                </li>
                <li>
                  <Link to="event.html">event page</Link>
                </li>
                <li>
                  <Link to="shop.html">shop page</Link>
                </li>
                <li>
                  <Link to="course-details.html">course details</Link>
                </li>
                <li>
                  <Link to="event-details.html">event details</Link>
                </li>
                <li>
                  <Link to="single-product.html">single product</Link>
                </li>
                <li>
                  <Link to="cart.html">cart page</Link>
                </li>
                <li>
                  <Link to="checkout.html">checkout</Link>
                </li>
                <li>
                  <Link to="wishlist.html">wishlist</Link>
                </li>
                <li>
                  <Link to="login-register.html">login / register</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="about-us.html">About us</Link>
            </li>
            <li>
              <Link to="blog.html">Blog</Link>
              <ul>
                <li>
                  <Link to="blog.html">blog</Link>
                </li>
                <li>
                  <Link to="blog-details.html">blog details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact.html">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
