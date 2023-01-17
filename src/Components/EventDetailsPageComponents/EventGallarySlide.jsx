import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function EventGallarySlide({ sliderImages }) {
  return (
    <OwlCarousel
      className="event-gallery-active nav-style-3 owl-carousel"
      loop={true}
      navText={[
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ]}
      margin={30}
      nav={true}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={1}
      dots={false}
      responsive={{
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      }}
    >
      {sliderImages.map((item) => (
        <img key={item.id} src={`.${item.img}`} alt="" />
      ))}
    </OwlCarousel>
  );
}

export default EventGallarySlide;
