import React from "react";
import CourseSliderOwl from "./CourseSliderOwl";

function TableContent() {
  return (
    <div className="tab-content jump">
      <div className="tab-pane active" id="course-categorie-1">
        <CourseSliderOwl />
      </div>
      <div className="tab-pane" id="course-categorie-2">
        <CourseSliderOwl />
      </div>
      <div className="tab-pane" id="course-categorie-3">
        <CourseSliderOwl />
      </div>
      <div className="tab-pane" id="course-categorie-4">
        <CourseSliderOwl />
      </div>
      <div className="view-all text-center mt-20">
        <a className="default-btn" href="course.html">
          VIEW ALL
        </a>
      </div>
    </div>
  );
}

export default TableContent;
