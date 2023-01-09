import React from "react";
import TableContent from "./TableContent";

function AdmissionArea() {
  return (
    <div className="admission-area pt-125 pb-130 bg-img-position">
      <div className="container">
        <div className="admission-title text-center">
          <h2>Admission Going On</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
          <div className="apply-btn">
            <a className="default-btn" href="/">
              APPLY NOW
            </a>
          </div>
        </div>
        <div className="admission-tab-list nav pt-80 pb-60">
          <a className="active" href="/course-categorie-1" data-bs-toggle="tab">
            <h4>all </h4>
          </a>
          <a href="/course-categorie-2" data-bs-toggle="tab">
            <h4> Undergraduate Courses </h4>
          </a>
          <a href="/course-categorie-3" data-bs-toggle="tab">
            <h4>Graduate Courses </h4>
          </a>
          <a href="/course-categorie-4" data-bs-toggle="tab">
            <h4>Diploma Courses </h4>
          </a>
        </div>
        <TableContent />
      </div>
    </div>
  );
}

export default AdmissionArea;
