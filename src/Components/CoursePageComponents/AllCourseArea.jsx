import React, { Fragment } from "react";
import CourseSlider from "./CourseSlider";

function AllCourseArea() {
  return (
    <Fragment>
      <div className="course-area bg-img pt-130">
        <div className="container">
          <div className="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              <span>Undergraduate</span> Courses
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <CourseSlider />
        </div>
      </div>
      <div className="course-area bg-img">
        <div className="container">
          <div className="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              Graduate <span>Courses</span>
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <CourseSlider />
        </div>
      </div>
      <div className="course-area bg-img">
        <div className="container">
          <div className="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              <span>Diploma</span> Courses
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <CourseSlider />
        </div>
      </div>
    </Fragment>
  );
}

export default AllCourseArea;
