import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CourseSlider from "../../Components/CoursePageComponents/CourseSlider";

function AllCourseArea() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const courses = UIObject[0].courses;
  const undergraduate = courses.filter(
    (course) => course.category === "Undergraduate"
  );
  const graduate = courses.filter((course) => course.category === "Graduate");
  const diploma = courses.filter((course) => course.category === "Diploma");

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
          <CourseSlider courses={undergraduate} />
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
          <CourseSlider courses={graduate} />
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
          <CourseSlider courses={diploma} />
        </div>
      </div>
    </Fragment>
  );
}

export default AllCourseArea;
