import React from "react";
import { Link } from "react-router-dom";

function ProductDetailsContentComponent() {
  return (
    <div className="product-details-content pl-30">
      <h2>Product Name</h2>
      <div className="pro-details-rating-wrap">
        <div className="pro-details-rating">
          <i className="zmdi zmdi-star"></i>
          <i className="zmdi zmdi-star"></i>
          <i className="zmdi zmdi-star"></i>
          <i className="zmdi zmdi-star"></i>
          <i className="zmdi zmdi-star"></i>
        </div>
        <span>(1 customer review)</span>
      </div>
      <h3>$329</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunca augue
        quis neque ultrices placerat sit amet quis mauris. Integer urna libero,
        aliquet neque posu ullamcorper fringilla dolor. Maecenas id mattis
        magna.{" "}
      </p>
      <div className="pro-details-size-color2 mt-30">
        <div className="pro-details-color2-wrap">
          <span>Color</span>
          <div className="pro-details-color2-content">
            <ul>
              <li className="blue"></li>
              <li className="maroon active"></li>
              <li className="gray"></li>
              <li className="green"></li>
              <li className="yellow"></li>
              <li className="white"></li>
            </ul>
          </div>
        </div>
        <div className="pro-details-size2">
          <span>Size</span>
          <div className="pro-details-size2-content">
            <ul>
              <li>
                <Link to="#">s</Link>
              </li>
              <li>
                <Link to="#">m</Link>
              </li>
              <li>
                <Link to="#">l</Link>
              </li>
              <li>
                <Link to="#">xl</Link>
              </li>
              <li>
                <Link to="#">xxl</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pro-details-quality mt-50 mb-45">
        <div className="cart-plus-minus">
          <input
            className="cart-plus-minus-box"
            type="text"
            name="qtybutton"
            defaultValue={2}
          />
        </div>
        <div className="pro-details-cart">
          <Link className="default-btn btn-hover" to="#">
            Add To Cart
          </Link>
        </div>
        <div className="pro-details-wishlist">
          <Link className=" btn-hover" to="#">
            <i className="fa fa-heart-o"></i>
          </Link>
        </div>
      </div>
      <div className="pro-details-info-wrap">
        <div className="pro-details-info-list">
          <ul>
            <li className="pro-details-info-title">SKU</li>
            <li>00010002</li>
          </ul>
        </div>
        <div className="pro-details-info-list">
          <ul>
            <li className="pro-details-info-title">Categories</li>
            <li>
              <Link to="#">Women,</Link>
            </li>
            <li>
              <Link to="#">Dress</Link>
            </li>
          </ul>
        </div>
        <div className="pro-details-info-list">
          <ul>
            <li className="pro-details-info-title">Tags</li>
            <li>
              <Link to="#">Clothing,</Link>
            </li>
            <li>
              <Link to="#">Summer</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="pro-details-social">
        <ul>
          <li>
            <Link className="facebook" to="#">
              <i className="fa fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link className="youtube" to="#">
              <i className="fa fa-youtube-play"></i>
            </Link>
          </li>
          <li>
            <Link className="twitter" to="#">
              <i className="fa fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link className="google" to="#">
              <i className="fa fa-google-plus"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailsContentComponent;
