import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EventCard({ singleEvent }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-event mb-55 event-gray-bg">
        <div className="event-img">
          <Link to={`/events/${singleEvent.id}`}>
            <img src={singleEvent.eventCardImage} alt="" />
          </Link>
          <div className="event-date-wrap">
            <span className="event-date">{singleEvent.eventDate.day}</span>
            <span>{singleEvent.eventDate.month}</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <Link to={`/events/${singleEvent.id}`}>{singleEvent.title}</Link>
          </h3>
          <p>{`${singleEvent.text.slice(0, 50)} ...`}</p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>{singleEvent.location}</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>{singleEvent.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventArea() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const allEvents = UIObject[0].allEvents;
  return (
    <div className="event-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          {allEvents.map((singleEvent) => (
            <EventCard key={singleEvent.id} singleEvent={singleEvent} />
          ))}
        </div>
        <div className="pro-pagination-style text-center mt-25">
          <ul>
            <li>
              <Link className="prev" to="#">
                <i className="fa fa-angle-double-left"></i>
              </Link>
            </li>
            <li>
              <Link className="active" to="#">
                1
              </Link>
            </li>
            <li>
              <Link to="#">2</Link>
            </li>
            <li>
              <Link className="next" to="#">
                <i className="fa fa-angle-double-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventArea;
