import React from "react";

function BreadcrumbArea({ breadcrumbObj }) {
  const overlayClasses = `breadcrumb-top default-overlay bg-img ${breadcrumbObj.overlayClass} pt-100 pb-95`;
  return (
    <div className="breadcrumb-area">
      <div className={overlayClasses} style={breadcrumbObj.breadcrumbImage}>
        <div className="container">
          <h2>{breadcrumbObj.title}</h2>
          <p>{breadcrumbObj.subtitle}</p>
        </div>
      </div>
      <div className="breadcrumb-bottom">
        <div className="container">
          <ul>
            <li>
              <a href="/">Home</a>{" "}
              <span>
                <i className="fa fa-angle-double-right"></i>{" "}
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
