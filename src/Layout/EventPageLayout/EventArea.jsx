import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SkeletonElements from "../../Components/Skeletons/SkeletonElements";
import { updateEventState } from "../../Store/EventsSlice";

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
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.eventsSlice.allEvents);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(updateEventState(1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="event-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          {allEvents.length !== 0
            ? allEvents.map((singleEvent) => (
                <EventCard key={singleEvent.id} singleEvent={singleEvent} />
              ))
            : [1, 2, 3].map((id) => <SkeletonElements key={id} />)}
        </div>
      </div>
    </div>
  );
}
// We can use React.memo for better loading this component
export default EventArea;
