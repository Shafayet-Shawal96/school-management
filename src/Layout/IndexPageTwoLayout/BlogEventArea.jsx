import React from "react";
import BlogSlickSlider from "../../Components/IndexPageTwoComponents/BlogSlickSlider";
import EventSlickSlider from "../../Components/IndexPageTwoComponents/EventSlickSlider";

function BlogEventArea() {
  return (
    <div className="blog-event-area pt-130 pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title-3 mb-45 mrg-bottom-small">
              <h2>
                Our <span>Blog</span>
              </h2>
              <p>
                Hempor incididunt ut labore et dolore mm, <br /> itation ullamco
                laboris nisi ut aliquip.{" "}
              </p>
            </div>
            <BlogSlickSlider />
          </div>
          <div className="col-lg-6">
            <div className="section-title-3 mb-45 ml-70">
              <h2>
                <span>Up Coming</span> Event
              </h2>
              <p>
                Hempor incididunt ut labore et dolore mm, <br /> itation ullamco
                laboris nisi ut aliquip.{" "}
              </p>
            </div>
            <EventSlickSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogEventArea;
