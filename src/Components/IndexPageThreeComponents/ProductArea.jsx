import React from "react";
import ProductSlick from "./ProductSlick";

function ProductArea() {
  return (
    <div className="producta-area pb-130">
      <div className="container">
        <div className="section-title mb-75 mrg-bottom-small">
          <h2>
            New <span>Arrival</span>
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <ProductSlick />
      </div>
    </div>
  );
}

export default ProductArea;
