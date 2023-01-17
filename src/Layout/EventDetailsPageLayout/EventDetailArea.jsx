import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BookSeatForm from "../../Components/EventDetailsPageComponents/BookSeatForm";
import EventGallarySlide from "../../Components/EventDetailsPageComponents/EventGallarySlide";

function EventDetailArea() {
  const params = useParams();
  const UIObject = useSelector((state) => state.UISlice.UI);
  const allEvents = UIObject[0].allEvents;
  const singleEvent = allEvents.find(
    (singleEvent) => singleEvent.id === Number(params.eventId)
  );

  return (
    <div className="event-details-area pt-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="event-left-wrap mr-40">
              <div className="event-description">
                <div className="description-date-social mb-45">
                  <div className="description-date-time">
                    <div className="description-date">
                      <span className="event-date">
                        {singleEvent.eventDate.day}
                      </span>
                      <span>{singleEvent.eventDate.month}</span>
                    </div>
                    <div className="description-meta-wrap">
                      <div className="description-meta">
                        <i className="fa fa-location-arrow"></i>
                        <span>{singleEvent.location}</span>
                      </div>
                      <div className="description-meta">
                        <i className="fa fa-clock-o"></i>
                        <span>{singleEvent.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="description-social-wrap">
                    <div className="description-social">
                      <ul>
                        <li>
                          <Link className="facebook" to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="instagram" to="#">
                            <i className="fa fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="twitter" to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="google" to="#">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="description-btn">
                      <Link to="#">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <img src={`.${singleEvent.eventDetailsImage}`} alt="" />
                <h3>{singleEvent.title}</h3>
                <p>{singleEvent.text}</p>
                <div className="event-gallery text-center mt-40">
                  <EventGallarySlide sliderImages={singleEvent.sliderImages} />
                  <h4>View Our Event Gallery</h4>
                </div>
                <BookSeatForm />
                {/* <div className="location-area mt-80">
                  <div id="location">
                    <Map />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar-style">
              <div className="sidebar-search mb-40">
                <div className="sidebar-title mb-40">
                  <h4>Search</h4>
                </div>
                <form>
                  <input type="text" placeholder="Search" />
                  <button>
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="sidebar-about mb-40">
                <div className="sidebar-title mb-15">
                  <h4>About Us</h4>
                </div>
                <p>
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolors eos qui ratione voluptatem sad.
                </p>
                <Link to="#">
                  <img src="/assets/img/banner/banner-4.jpg" alt="" />
                </Link>
                <div className="sidebar-social">
                  <ul>
                    <li>
                      <Link className="facebook" to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="youtube" to="#">
                        <i className="fa fa-youtube-play"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="google" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-recent-post mb-35">
                <div className="sidebar-title mb-40">
                  <h4>Recent Post</h4>
                </div>
                <div className="recent-post-wrap">
                  <div className="single-recent-post">
                    <div className="recent-post-img">
                      <Link to="#">
                        <img src="/assets/img/blog/recent-post-1.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <h5>
                        <Link to="#">Blog title will be here.</Link>
                      </h5>
                      <span>Blog Category</span>
                      <p>Datat non proident qui offici.hafw adec qart.</p>
                    </div>
                  </div>
                  <div className="single-recent-post">
                    <div className="recent-post-img">
                      <Link to="#">
                        <img src="/assets/img/blog/recent-post-2.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <h5>
                        <Link to="#">Blog title will be here.</Link>
                      </h5>
                      <span>Blog Category</span>
                      <p>Datat non proident qui offici.hafw adec qart.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-category mb-40">
                <div className="sidebar-title mb-40">
                  <h4>Course Category</h4>
                </div>
                <div className="category-list">
                  <ul>
                    <li>
                      <Link to="#">
                        MBA <span>04</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Graduate <span>08</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Under Graduate <span>04</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        BBA <span>06</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Engineering <span>04</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-recent-course-wrap mb-40">
                <div className="sidebar-title mb-40">
                  <h4>Recent Courses</h4>
                </div>
                <div className="sidebar-recent-course">
                  <div className="sin-sidebar-recent-course">
                    <div className="sidebar-recent-course-img">
                      <Link to="#">
                        <img src="/assets/img/blog/recent-post-1.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="sidebar-recent-course-content">
                      <h4>
                        <Link to="#">Course Title</Link>
                      </h4>
                      <ul>
                        <li>Credits : 125</li>
                        <li className="duration-color">Duration : 4yrs</li>
                      </ul>
                      <p>Datat non proident qui offici.hafw adec qart.</p>
                    </div>
                  </div>
                  <div className="sin-sidebar-recent-course">
                    <div className="sidebar-recent-course-img">
                      <Link to="#">
                        <img src="/assets/img/blog/recent-post-2.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="sidebar-recent-course-content">
                      <h4>
                        <Link to="#">Course Title</Link>
                      </h4>
                      <ul>
                        <li>Credits : 125</li>
                        <li className="duration-color">Duration : 4yrs</li>
                      </ul>
                      <p>Datat non proident qui offici.hafw adec qart.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-tag-wrap">
                <div className="sidebar-title mb-40">
                  <h4>Tag</h4>
                </div>
                <div className="sidebar-tag">
                  <ul>
                    <li>
                      <Link to="#">Loremsite</Link>
                    </li>
                    <li>
                      <Link to="#">Loreipsum</Link>
                    </li>
                    <li>
                      <Link to="#">Dolar</Link>
                    </li>
                    <li>
                      <Link to="#">Site ament dollar</Link>
                    </li>
                    <li>
                      <Link to="#">Loremsite</Link>
                    </li>
                    <li>
                      <Link to="#">Dummy Text</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailArea;
