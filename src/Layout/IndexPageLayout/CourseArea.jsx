import React from "react";
import CourseOwlSlider from "../../Components/IndexPageComponents/CourseOwlSlider";
const courseContent = {
  heading: "Our Courses",
  paragraphText:
    " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
};

function CourseArea() {
  return (
    <div className="course-area pt-130 pb-10">
      <div className="container">
        <div className="section-title mb-75">
          <h2>{courseContent.heading}</h2>
          <p>{courseContent.paragraphText}</p>
        </div>
        <CourseOwlSlider />
      </div>
    </div>
  );
}

export default CourseArea;
