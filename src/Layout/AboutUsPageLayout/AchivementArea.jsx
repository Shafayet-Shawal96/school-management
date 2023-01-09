import React from "react";
import TestimonialSliderComponent from "../../Components/GlobalComponents/TestimonialSliderComponent";

function AchivementArea() {
  return (
    <div className="achievement-area pt-130 pb-115">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            What <span>People Say</span>
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <TestimonialSliderComponent />
        <div className="testimonial-text-img">
          <img alt="" src="assets/img/icon-img/testi-text.png" />
        </div>
      </div>
    </div>
  );
}

export default AchivementArea;
