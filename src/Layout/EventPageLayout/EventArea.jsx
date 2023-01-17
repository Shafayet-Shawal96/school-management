import React from "react";
import { Link } from "react-router-dom";

const allEvents = [
  {
    id: 1,
    eventCardImage: "./assets/img/event/event-5.jpg",
    eventDetailsImage: "./assets/img/event/event-details.jpg",
    sliderImages: [
      { id: 1, img: "./assets/img/event/event-gallery-1.jpg" },
      { id: 2, img: "./assets/img/event/event-gallery-2.jpg" },
    ],
    eventDate: { day: "1st", month: "Dec" },
    title: "Global Conference on Business.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dorepre enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem snesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    location: "Mascot Plaza, Uttara",
    time: "05:30 am",
  },
  {
    id: 2,
    eventCardImage: "./assets/img/event/event-6.jpg",
    eventDetailsImage: "./assets/img/event/event-details.jpg",
    sliderImages: [
      { id: 1, img: "./assets/img/event/event-gallery-1.jpg" },
      { id: 2, img: "./assets/img/event/event-gallery-2.jpg" },
    ],
    eventDate: { day: "2nd", month: "Dec" },
    title: "Academic Conference Maui.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dorepre enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem snesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    location: "Shuvastu, Badda",
    time: "07:20 am",
  },
  {
    id: 3,
    eventCardImage: "./assets/img/event/event-7.jpg",
    eventDetailsImage: "./assets/img/event/event-details.jpg",
    sliderImages: [
      { id: 1, img: "./assets/img/event/event-gallery-1.jpg" },
      { id: 2, img: "./assets/img/event/event-gallery-2.jpg" },
    ],
    eventDate: { day: "3rd", month: "Dec" },
    title: "Social Sciences & Education.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dorepre enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem snesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    location: "Banashree, Rampura",
    time: "10:18 am",
  },
  {
    id: 4,
    eventCardImage: "./assets/img/event/event-8.jpg",
    eventDetailsImage: "./assets/img/event/event-details.jpg",
    sliderImages: [
      { id: 1, img: "./assets/img/event/event-gallery-1.jpg" },
      { id: 2, img: "./assets/img/event/event-gallery-2.jpg" },
    ],
    eventDate: { day: "3rd", month: "Dec" },
    title: "Aempor incididunt ut labore ejam.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dorepre enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem snesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    location: "New Market, Uttara",
    time: "09:15 am",
  },
  {
    id: 5,
    eventCardImage: "./assets/img/event/event-9.jpg",
    eventDetailsImage: "./assets/img/event/event-details.jpg",
    sliderImages: [
      { id: 1, img: "./assets/img/event/event-gallery-1.jpg" },
      { id: 2, img: "./assets/img/event/event-gallery-2.jpg" },
    ],
    eventDate: { day: "1st", month: "Dec" },
    title: "Arts Humanities Social Sciences",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dorepre enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem snesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    location: "Mascot Plaza, Uttara",
    time: "10:00 am",
  },
  {
    id: 6,
    eventCardImage: "./assets/img/event/event-5.jpg",
    eventDetailsImage: "./assets/img/event/event-details.jpg",
    sliderImages: [
      { id: 1, img: "./assets/img/event/event-gallery-1.jpg" },
      { id: 2, img: "./assets/img/event/event-gallery-2.jpg" },
    ],
    eventDate: { day: "1st", month: "Dec" },
    title: "Global Conference on Business.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dorepre enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu antium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem snesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    location: "Mascot Plaza, Uttara",
    time: "05:30 am",
  },
];

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
