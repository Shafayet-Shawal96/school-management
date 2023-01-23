import React, { useRef } from "react";
import { Link } from "react-router-dom";
import cssClasses from "../../Components/Skeletons/SkeletonElements.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const day = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st",
];

const hour = [
  { hour: "12", am_pm: "am" },
  { hour: "01", am_pm: "am" },
  { hour: "02", am_pm: "am" },
  { hour: "03", am_pm: "am" },
  { hour: "04", am_pm: "am" },
  { hour: "05", am_pm: "am" },
  { hour: "06", am_pm: "am" },
  { hour: "07", am_pm: "am" },
  { hour: "08", am_pm: "am" },
  { hour: "09", am_pm: "am" },
  { hour: "10", am_pm: "am" },
  { hour: "11", am_pm: "am" },
  { hour: "12", am_pm: "pm" },
  { hour: "01", am_pm: "pm" },
  { hour: "02", am_pm: "pm" },
  { hour: "03", am_pm: "pm" },
  { hour: "04", am_pm: "pm" },
  { hour: "05", am_pm: "pm" },
  { hour: "06", am_pm: "pm" },
  { hour: "07", am_pm: "pm" },
  { hour: "08", am_pm: "pm" },
  { hour: "09", am_pm: "pm" },
  { hour: "10", am_pm: "pm" },
  { hour: "11", am_pm: "pm" },
];

const minute = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];

function EventCard({ singleEvent }) {
  const imgRef = useRef();
  const time = new Date(singleEvent.time);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-event mb-55 event-gray-bg">
        <div className="event-img">
          <Link to={`/events/${singleEvent.id}`}>
            <div className="image-preview">
              <div
                style={{
                  backgroundImage: `url(${singleEvent.banner})`,
                }}
              />
            </div>
          </Link>
          <div className="event-date-wrap">
            <span className="event-date">{day[time.getDate() - 1]}</span>
            <span>{months[time.getMonth()]}</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <Link to={`/events/${singleEvent.id}`}>{singleEvent.title}</Link>
          </h3>
          <p>{singleEvent.description}</p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>{singleEvent.location}</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>{`${hour[time.getHours()].hour} : ${
                time.getMinutes() < 10
                  ? minute[time.getMinutes()]
                  : time.getMinutes()
              } ${hour[time.getHours()].am_pm}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
