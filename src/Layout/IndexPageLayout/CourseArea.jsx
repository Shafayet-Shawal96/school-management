import React from "react";
import CourseOwlSlider from "../../Components/IndexPageComponents/CourseOwlSlider";

function CourseArea() {
  return (
    <div className="course-area pt-130 pb-10">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            {" "}
            <span>Our</span> Courses
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <CourseOwlSlider />
      </div>
    </div>
  );
}

export default CourseArea;
