import React from "react";
import ProductDecSlickSlider from "./ProductDecSlickSlider";

function ProductDetailsComponent() {
  return (
    <div className="product-details-img">
      <img
        className="zoompro"
        src="assets/img/product-details/product-detalis-l2.jpg"
        data-zoom-image="assets/img/product-details/single-product-bl2.jpg"
        alt="zoom"
      />
      <ProductDecSlickSlider />
    </div>
  );
}

export default ProductDetailsComponent;
