import React from "react";
import EventOwlSlider from "../../Components/IndexPageComponents/EventOwlSlider";

const eventArea = {
  eventAreaImage: {
    backgroundImage: `url(./assets/img/bg/bg-3.jpg)`,
  },
  heading: "Our Event",
  paragraphText:
    " tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
};

function EventArea() {
  return (
    <div
      className="event-area bg-img default-overlay pt-130 pb-130"
      style={eventArea.eventAreaImage}
    >
      <div className="container">
        <div className="section-title mb-75">
          <h2>{eventArea.heading}</h2>
          <p>{eventArea.paragraphText}</p>
        </div>
        <EventOwlSlider />
      </div>
    </div>
  );
}

export default EventArea;
