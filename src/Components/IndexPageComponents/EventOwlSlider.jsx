import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const eventContent = [
  {
    id: 1,
    eventImage: "assets/img/event/event-1.jpg",
    eventDate: "1st",
    eventDateTwo: "Dec",
    eventHeading: "bempor incididunt ut labore ejam.",
    eventParagraphText:
      "Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .",
    eventFooter: "Mascot Plaza ,Uttara",
    eventFooterTime: "11:00 am",
  },
  {
    id: 2,
    eventImage: "assets/img/event/event-1.jpg",
    eventDate: "1st",
    eventDateTwo: "Dec",
    eventHeading: "cempor incididunt ut labore ejam.",
    eventParagraphText:
      "Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .",
    eventFooter: "Mascot Plaza ,Uttara",
    eventFooterTime: "11:00 am",
  },
  {
    id: 3,
    eventImage: "assets/img/event/event-1.jpg",
    eventDate: "1st",
    eventDateTwo: "Dec",
    eventHeading: "dempor incididunt ut labore ejam.",
    eventParagraphText:
      "Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .",
    eventFooter: "Mascot Plaza ,Uttara",
    eventFooterTime: "11:00 am",
  },
  {
    id: 4,
    eventImage: "assets/img/event/event-1.jpg",
    eventDate: "1st",
    eventDateTwo: "Dec",
    eventHeading: "lempor incididunt ut labore ejam.",
    eventParagraphText:
      "Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde omnis iste natus error .",
    eventFooter: "Mascot Plaza ,Uttara",
    eventFooterTime: "12:00 am",
  },
];
function SingleEvent({ item }) {
  return (
    <div className="single-event event-white-bg">
      <div className="event-img">
        <a href="event-details.html">
          <img src={item.eventImage} alt="" />
        </a>
        <div className="event-date-wrap">
          <span className="event-date">{item.eventDate}</span>
          <span>{item.eventDateTwo}</span>
        </div>
      </div>
      <div className="event-content">
        <h3>
          <a href="event-details.html">{item.eventHeading}</a>
        </h3>
        <p>{item.eventParagraphText}</p>
        <div className="event-meta-wrap">
          <div className="event-meta">
            <i className="fa fa-location-arrow"></i>
            <span>{item.eventFooter}</span>
          </div>
          <div className="event-meta">
            <i className="fa fa-clock-o"></i>
            <span>{item.eventFooterTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
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
      {eventContent.map((item) => (
        <SingleEvent key={item.id} item={item} />
      ))}
    </OwlCarousel>
  );
}

export default EventOwlSlider;
