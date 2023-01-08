import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbObj = {
  title: "Wishlist",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Wishlist",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg.jpg)`,
  },
};

function WishlistPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="cart-main-area pt-130 pb-130">
        <div className="container">
          <h3 className="cart-page-title">Your cart items</h3>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form action="/">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Until Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>Add To Cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="/">
                            <img src="assets/img/cart/cart-1.png" alt="" />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/">Color Box</a>
                        </td>
                        <td className="product-price-cart">
                          <span className="amount">$260.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="cart-plus-minus">
                            <input
                              className="cart-plus-minus-box"
                              type="text"
                              name="qtybutton"
                              value="2"
                            />
                          </div>
                        </td>
                        <td className="product-subtotal">$110.00</td>
                        <td className="product-wishlist-cart">
                          <a href="/">add to cart</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="/">
                            <img src="assets/img/cart/cart-2.png" alt="" />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/">Color Box</a>
                        </td>
                        <td className="product-price-cart">
                          <span className="amount">$150.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="cart-plus-minus">
                            <input
                              className="cart-plus-minus-box"
                              type="text"
                              name="qtybutton"
                              value="2"
                            />
                          </div>
                        </td>
                        <td className="product-subtotal">$150.00</td>
                        <td className="product-wishlist-cart">
                          <a href="/">add to cart</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="/">
                            <img src="assets/img/cart/cart-1.png" alt="" />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="/">Color Box </a>
                        </td>
                        <td className="product-price-cart">
                          <span className="amount">$170.00</span>
                        </td>
                        <td className="product-quantity">
                          <div className="cart-plus-minus">
                            <input
                              className="cart-plus-minus-box"
                              type="text"
                              name="qtybutton"
                              value="2"
                            />
                          </div>
                        </td>
                        <td className="product-subtotal">$170.00</td>
                        <td className="product-wishlist-cart">
                          <a href="/">add to cart</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <BrandCarouselComponent />

      <FooterLayout />
    </Fragment>
  );
}

export default WishlistPage;
