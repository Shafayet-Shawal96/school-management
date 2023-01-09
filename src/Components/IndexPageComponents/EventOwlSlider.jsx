import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function EventOwlSlider() {
  return (
    <OwlCarousel
      className="event-active owl-carousel nav-style-1"
      loop={true}
      margin={30}
      nav={true}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={3}
      dots={false}
      navText={[
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ]}
      responsive={{
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      }}
    >
      <div className="single-event event-white-bg">
        <div className="event-img">
          <a href="event-details.html">
            <img src="assets/img/event/event-1.jpg" alt="" />
          </a>
          <div className="event-date-wrap">
            <span className="event-date">1st</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <a href="event-details.html">Aempor incididunt ut labore ejam.</a>
          </h3>
          <p>
            Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde
            omnis iste natus error .
          </p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>Mascot Plaza ,Uttara</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>11:00 am</span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-event event-white-bg">
        <div className="event-img">
          <a href="event-details.html">
            <img src="assets/img/event/event-2.jpg" alt="" />
          </a>
          <div className="event-date-wrap">
            <span className="event-date">10th</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <a href="event-details.html">Global Conference on Business.</a>
          </h3>
          <p>
            Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde
            omnis iste natus error .
          </p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>Shubastu ,Dadda</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>08:30 am</span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-event event-white-bg">
        <div className="event-img">
          <a href="event-details.html">
            <img src="assets/img/event/event-3.jpg" alt="" />
          </a>
          <div className="event-date-wrap">
            <span className="event-date">1st</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <a href="event-details.html">Academic Conference Maui.</a>
          </h3>
          <p>
            Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde
            omnis iste natus error .
          </p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>Banasree ,Rampura</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>10:00 am</span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-event event-white-bg">
        <div className="event-img">
          <a href="event-details.html">
            <img src="assets/img/event/event-2.jpg" alt="" />
          </a>
          <div className="event-date-wrap">
            <span className="event-date">1st</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <a href="event-details.html">Social Sciences & Education.</a>
          </h3>
          <p>
            Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde
            omnis iste natus error .
          </p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>Shubastu ,Badda</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>10:30 am</span>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default EventOwlSlider;
