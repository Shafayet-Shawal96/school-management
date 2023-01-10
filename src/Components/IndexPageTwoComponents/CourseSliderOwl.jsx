import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function CourseSliderOwl({ children }) {
  return (
    <OwlCarousel
      className="course-slider-active-2 nav-style-1 owl-carousel"
      loop={true}
      nav={true}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={4}
      margin={30}
      dots={false}
      navText={[
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ]}
      responsive={{
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      }}
    >
      {children}
    </OwlCarousel>
  );
}

export default CourseSliderOwl;
