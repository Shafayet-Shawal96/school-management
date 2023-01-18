import React from "react";
import cssClasses from "./SkeletonElements.module.css";

function SkeletonElements({ type }) {
  let allcssClasses = `${cssClasses.skeleton}`;
  if (type === "text") {
    allcssClasses = `${cssClasses.skeleton} ${cssClasses.skeleton_text}`;
  }
  if (type === "title") {
    allcssClasses = `${cssClasses.skeleton} ${cssClasses.skeleton_title}`;
  }
  if (type === "avatar") {
    allcssClasses = `${cssClasses.skeleton} ${cssClasses.skeleton_avatar}`;
  }
  if (type === "thumbnail") {
    allcssClasses = `${cssClasses.skeleton} ${cssClasses.skeleton_thumbnail}`;
  }
  return <div className={allcssClasses}></div>;
}

export default SkeletonElements;
