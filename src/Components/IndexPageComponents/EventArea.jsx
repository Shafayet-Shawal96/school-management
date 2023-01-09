import React from "react";
import EventOwlSlider from "./EventOwlSlider";

const eventAreaImage = {
  backgroundImage: `url(./assets/img/bg/bg-3.jpg)`,
};

function EventArea() {
  return (
    <div
      className="event-area bg-img default-overlay pt-130 pb-130"
      style={eventAreaImage}
    >
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            <span>Our</span> Event
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <EventOwlSlider />
      </div>
    </div>
  );
}

export default EventArea;
