import React from "react";
import { Link } from "react-router-dom";
import cssClasses from "./SkeletonElements.module.css";

function SkeletonElements() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-event mb-55 event-gray-bg">
        <div className="event-img">
          <Link to="#">
            <div
              className={`${cssClasses.skeleton_img} ${cssClasses.shining}`}
            />
          </Link>
          <div className="event-date-wrap">
            <span className={`event-date ${cssClasses.skeleton_day}`}></span>
            <span
              className={`event-date ${cssClasses.skeleton_month}`}
            ></span>{" "}
          </div>
        </div>
        <div className="event-content">
          <h3 className={`${cssClasses.skeleton_title} ${cssClasses.shining}`}>
            <Link to="#"></Link>
          </h3>
          <p
            className={`${cssClasses.skeleton_text} ${cssClasses.shining}`}
          ></p>
          <div className="event-meta-wrap">
            <div className={`event-meta ${cssClasses.flex_center}`}>
              <i className="fa fa-location-arrow"></i>
              <span
                className={`${cssClasses.skeleton_location} ${cssClasses.shining}`}
              ></span>
            </div>
            <div className={`event-meta ${cssClasses.flex_center}`}>
              <i className="fa fa-clock-o"></i>
              <span
                className={`${cssClasses.skeleton_time} ${cssClasses.shining}`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonElements;
