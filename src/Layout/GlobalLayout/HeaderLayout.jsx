import React from "react";
import { Link } from "react-router-dom";
const headerImage = {
  backgroundImage: `url(./assets/img/icon-img/header-shape.png)`,
};

function HeaderLayout() {
  const win = window;
  win.addEventListener("scroll", function () {
    const header = document.querySelector(".sticky-bar");
    const scroll = win.scrollY;
    if (scroll < 200) {
      header.classList.remove("stick");
    } else {
      header.classList.add("stick");
    }
  });

  return (
    <header className="header-area">
      <div className="header-top bg-img" style={headerImage}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-12 col-sm-8">
              <div className="header-contact">
                <ul>
                  <li>
                    <i className="fa fa-phone"></i> +98 558 547 589
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i>
                    <Link to="#">education@email.com</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-12 col-sm-4">
              <div className="login-register">
                <ul>
                  <li>
                    <Link to="/login-register">Login</Link>
                  </li>
                  <li>
                    <Link to="/login-register">Register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom sticky-bar clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-4">
              <div className="logo">
                <Link to="/">
                  <img alt="" src="assets/img/logo/logo.png" />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-6 col-8">
              <div className="menu-cart-wrap">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>

                        <ul className="submenu">
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
                      </li>
                      <li>
                        <Link to="/about">ABOUT</Link>
                      </li>
                      <li className="mega-menu-position top-hover">
                        <Link to="/shop">
                          SHOP <i className="fa fa-angle-down"></i>
                        </Link>

                        <ul className="mega-menu">
                          <li>
                            <ul>
                              <li className="mega-menu-title">
                                <a href="/">Categories 01</a>
                              </li>
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
                            <ul>
                              <li className="mega-menu-title">
                                <a href="/">Categories 02</a>
                              </li>
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
                            <ul>
                              <li className="mega-menu-title">
                                <a href="/">Categories 03</a>
                              </li>
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
                            <ul>
                              <li className="mega-menu-title">
                                <a href="/">Categories 04</a>
                              </li>
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
                        <Link to="#">
                          PAGES <i className="fa fa-angle-down"></i>
                        </Link>

                        <ul className="submenu">
                          <li>
                            <Link to="/course">course page</Link>
                          </li>
                          <li>
                            <Link to="/event">event page</Link>
                          </li>
                          <li>
                            <Link to="/shop">shop page</Link>
                          </li>
                          <li>
                            <Link to="/course-details">course details</Link>
                          </li>
                          <li>
                            <Link to="/event-details">event details</Link>
                          </li>
                          <li>
                            <Link to="/single-product">single product</Link>
                          </li>
                          <li>
                            <Link to="/cart">cart page</Link>
                          </li>
                          <li>
                            <Link to="/checkout">checkout</Link>
                          </li>
                          <li>
                            <Link to="/wishlist">wishlist</Link>
                          </li>
                          <li>
                            <Link to="/course">course page</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/course">COURSES / PROGRAMMES</Link>
                      </li>
                      <li>
                        <Link to="/blog">BLOG</Link>

                        <ul className="submenu">
                          <li>
                            <Link to="/blog">BLOG</Link>
                          </li>
                          <li>
                            <Link to="/blog-detail">blog details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">CONTACT</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="cart-search-wrap">
                  <div className="cart-wrap">
                    <button className="icon-cart">
                      <i className="fa fa-cart-plus"></i>
                      <span className="count-style">02</span>
                    </button>
                    <div className="shopping-cart-content">
                      <ul>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="/">
                              <img alt="" src="assets/img/cart/cart-1.png" />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="/">Color Box </a>
                            </h4>
                            <h6>Qty: 02</h6>
                            <span>$260.00</span>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="/">
                              <i className="fa fa-times-circle"></i>
                            </a>
                          </div>
                        </li>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="/">
                              <img alt="" src="assets/img/cart/cart-2.png" />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="/">Color Box </a>
                            </h4>
                            <h6>Qty: 02</h6>
                            <span>$260.00</span>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="/">
                              <i className="fa fa-times-circle"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-total">
                        <h4>
                          Shipping : <span>$20.00</span>
                        </h4>
                        <h4>
                          Total : <span className="shop-total">$260.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-btn">
                        <a className="default-btn btn-hover" href="cart.html">
                          view cart
                        </a>
                        <a
                          className="default-btn btn-hover"
                          href="checkout.html"
                        >
                          checkout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header-search">
                    <button className="search-toggle">
                      <i className="fa fa-search"></i>
                    </button>
                    <div className="search-content">
                      <form action="/">
                        <input type="text" placeholder="Search" />
                        <button>
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-area">
            <div className="mobile-menu">
              <nav id="mobile-menu-active">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;