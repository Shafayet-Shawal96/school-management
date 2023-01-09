import React from "react";
import ProductaActiveSlickSlider from "../../Components/SingleProductPageComponents/ProductaActiveSlickSlider";

function RelatedCourse() {
  return (
    <div className="related-course">
      <div className="container">
        <div className="related-title mb-45 related-mrg-small">
          <h3>Related products</h3>
          <p>
            Hempor incididunt ut labore et dolore mm, itation ullamco laboris
            <br />
            nisi ut aliquip.
          </p>
        </div>
        <ProductaActiveSlickSlider />
      </div>
    </div>
  );
}

export default RelatedCourse;
