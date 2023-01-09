import React from "react";

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
                <a href="/">s</a>
              </li>
              <li>
                <a href="/">m</a>
              </li>
              <li>
                <a href="/">l</a>
              </li>
              <li>
                <a href="/">xl</a>
              </li>
              <li>
                <a href="/">xxl</a>
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
          <a className="default-btn btn-hover" href="/">
            Add To Cart
          </a>
        </div>
        <div className="pro-details-wishlist">
          <a className=" btn-hover" href="/">
            <i className="fa fa-heart-o"></i>
          </a>
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
              <a href="/">Women,</a>
            </li>
            <li>
              <a href="/">Dress</a>
            </li>
          </ul>
        </div>
        <div className="pro-details-info-list">
          <ul>
            <li className="pro-details-info-title">Tags</li>
            <li>
              <a href="/">Clothing,</a>
            </li>
            <li>
              <a href="/">Summer</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pro-details-social">
        <ul>
          <li>
            <a className="facebook" href="/">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a className="youtube" href="/">
              <i className="fa fa-youtube-play"></i>
            </a>
          </li>
          <li>
            <a className="twitter" href="/">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a className="google" href="/">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailsContentComponent;
