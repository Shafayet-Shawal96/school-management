import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonialContent = [
  {
    id: 1,
    testiContentImage: {
      backgroundImage: `url(./assets/img/bg/testi.png)`,
    },
    testiBackImage: "assets/img/testimonial/testi-b1.jpg",
    testiSmallImage: "assets/img/testimonial/testi-s2.jpg",
    paragraphText:
      " Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magnaaliqua. Ut enim fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit",
    nameHeading: "AYESHA HOQUE",
    departmenHeading: "Students Of AMMT Department",
  },

  {
    id: 2,
    testiContentImage: {
      backgroundImage: `url(./assets/img/bg/testi.png)`,
    },
    testiBackImage: "assets/img/testimonial/testi-b1.jpg",
    testiSmallImage: "assets/img/testimonial/testi-s2.jpg",
    paragraphText:
      " Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magnaaliqua. Ut enim fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit",
    nameHeading: "sokina HOQUE",
    departmenHeading: "Students Of AMMT Department",
  },
  {
    id: 3,
    testiContentImage: {
      backgroundImage: `url(./assets/img/bg/testi.png)`,
    },
    testiBackImage: "assets/img/testimonial/testi-b1.jpg",
    testiSmallImage: "assets/img/testimonial/testi-s2.jpg",
    paragraphText:
      " Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magnaaliqua. Ut enim fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit",
    nameHeading: "ambia HOQUE",
    departmenHeading: "Students Of AMMT Department",
  },
  {
    id: 4,
    testiContentImage: {
      backgroundImage: `url(./assets/img/bg/testi.png)`,
    },
    testiBackImage: "assets/img/testimonial/testi-b1.jpg",
    testiSmallImage: "assets/img/testimonial/testi-s2.jpg",
    paragraphText:
      " Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magnaaliqua. Ut enim fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit",
    nameHeading: "jokina HOQUE",
    departmenHeading: "Students Of AMMT Department",
  },
];

function TestimonialSlider({ item }) {
  return (
    <div className="testi-content-wrap">
      <div className="testi-big-img">
        <img alt="" src={item.testiBackImage} />
      </div>
      <div className="row g-0">
        <div className="ms-auto col-lg-6 col-md-6">
          <div
            className="testi-content bg-img default-overlay"
            style={item.testiContentImage}
          >
            <div className="quote-style quote-left">
              <i className="fa fa-quote-left"></i>
            </div>
            <p>{item.paragraphText}</p>
            <div className="testi-info">
              <h5>{item.nameHeading}</h5>
              <span>{item.departmenHeading}</span>
            </div>
            <div className="quote-style quote-right">
              <i className="fa fa-quote-right"></i>
            </div>
            <div className="testi-arrow">
              <img alt="" src="assets/img/icon-img/testi-icon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialSliderComponent() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settingsText = {
    arrows: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavfor: ".testimonial-image-slider",
  };
  const settingsImage = {
    dots: false,
    centerMode: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavfor: ".testimonial-text-slider",
    focusOnSelect: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="testimonial-slider-wrap mt-45">
      <Slider
        {...settingsText}
        className="testimonial-text-slider"
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
      >
        {testimonialContent.map((item) => (
          <TestimonialSlider key={item.id} item={item} />
        ))}
      </Slider>
      <Slider
        {...settingsImage}
        className="testimonial-image-slider"
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
      >
        {testimonialContent.map((item) => (
          <div key={item.id} className="sin-testi-image">
            <img src={item.testiSmallImage} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSliderComponent;
