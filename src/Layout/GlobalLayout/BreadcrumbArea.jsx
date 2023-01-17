import React from "react";
import { Link } from "react-router-dom";

function BreadcrumbArea({ breadcrumbObj }) {
  const overlayClasses = `breadcrumb-top default-overlay bg-img ${breadcrumbObj.overlayClass} pt-100 pb-95`;
  return (
    <div className="breadcrumb-area">
      <div className={overlayClasses} style={breadcrumbObj.breadcrumbImage}>
        <div className="container">
          <h2>{breadcrumbObj.pageName}</h2>
          <p>{breadcrumbObj.pageDetail}</p>
        </div>
      </div>
      <div className="breadcrumb-bottom">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>

              <span>
                <i className="fa fa-angle-double-right"></i>
                {breadcrumbObj.pageName}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BreadcrumbArea;
