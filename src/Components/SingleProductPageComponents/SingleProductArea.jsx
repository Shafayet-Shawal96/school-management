import React from "react";
import ProductDetailsComponent from "./ProductDetailsComponent";
import ProductDetailsContentComponent from "./ProductDetailsContentComponent";

function SingleProductArea() {
  return (
    <div className="single-product-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ProductDetailsComponent />
          </div>
          <div className="col-lg-6 col-md-7">
            <ProductDetailsContentComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductArea;
