import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import RelatedCourse from "../../Components/CourseDetailsPageComponents/RelatedCourse";

function CourseDetailArea() {
  const [tab, setTab] = useState(1);
  const params = useParams();
  const UIObject = useSelector((state) => state.UISlice.UI);
  const courses = UIObject[0].courses;
  const course = courses.find(
    (course) => course.id === Number(params.courseId)
  );

  const updateTab = (e) => {
    e.preventDefault();
    setTab(Number(e.target.id));
  };

  return (
    <div className="course-details-area pt-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="course-left-wrap mr-40">
              <div className="apply-area">
                <img src={course.detailsImg} alt="" />
                <div className="course-apply-btn">
                  <Link to="#" className="default-btn">
                    APPLY NOW
                  </Link>
                </div>
              </div>
              <div className="course-tab-list nav pt-40 pb-25 mb-35">
                <Link
                  onClick={updateTab}
                  id={1}
                  className={`${tab === 1 ? "active" : ""}`}
                  to="#"
                >
                  <h4 id={1}>Over View </h4>
                </Link>
                <Link
                  onClick={updateTab}
                  id={2}
                  className={`${tab === 2 ? "active" : ""}`}
                  to="#"
                >
                  <h4 id={2}>Instructor </h4>
                </Link>
                <Link
                  onClick={updateTab}
                  id={3}
                  className={`${tab === 3 ? "active" : ""}`}
                  to="#"
                >
                  <h4 id={3}> Reviews </h4>
                </Link>
              </div>
              <div className="tab-content jump">
                <div className={`tab-pane ${tab === 1 ? "active" : ""}`}>
                  <div className="over-view-content">
                    <h4>COURSE DETAILS</h4>
                    <h5>Course Name : {course.name}</h5>
                    <p>{course.para1}</p>
                    <div className="over-view-list">
                      {course.overviewList.map((item) => (
                        <div className="sin-over-view-list" key={item.id}>
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>{item.point}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="course-details-img">
                      <img src={course.extraImg} />
                    </div>
                    <div className="course-summary-wrap">
                      <div className="single-course-summary">
                        <h4>Total Students</h4>
                        <span>
                          <i className="fa fa-user"></i> {course.totalStudent}
                        </span>
                      </div>
                      <div className="single-course-summary">
                        <h4>Course Duration</h4>
                        <span>
                          <i className="fa fa-clock-o"></i> {course.duration}
                        </span>
                      </div>
                      <div className="single-course-summary">
                        <h4>Course Credits</h4>
                        <span>
                          <i className="fa fa-diamond"></i> {course.credits}
                        </span>
                      </div>
                      <div className="single-course-summary">
                        <h4>Total Semester</h4>
                        <span>
                          <i className="fa fa-book"></i> {course.totalSemester}
                        </span>
                      </div>
                    </div>
                    <p>{course.para2}</p>
                  </div>
                </div>
                <div className={`tab-pane ${tab === 2 ? "active" : ""}`}>
                  <div className="over-view-content">
                    <h4>INSTRUCTOR</h4>
                    <h5>{course.instructor}</h5>
                    <p>{course.para1}</p>
                    <div className="over-view-list">
                      {course.overviewList.map((item) => (
                        <div className="sin-over-view-list" key={item.id}>
                          <div className="course-list-icon">
                            <i className="fa fa-check"></i> .
                          </div>
                          <div className="course-list-content">
                            <p>{item.point}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="course-details-img">
                      <img src={course.extraImg} />
                    </div>
                    <div className="course-summary-wrap">
                      <div className="single-course-summary">
                        <h4>Total Students</h4>
                        <span>
                          <i className="fa fa-user"></i> {course.totalStudent}
                        </span>
                      </div>
                      <div className="single-course-summary">
                        <h4>Course Duration</h4>
                        <span>
                          <i className="fa fa-clock-o"></i> {course.duration}
                        </span>
                      </div>
                      <div className="single-course-summary">
                        <h4>Course Credits</h4>
                        <span>
                          <i className="fa fa-diamond"></i> {course.credits}
                        </span>
                      </div>
                      <div className="single-course-summary">
                        <h4>Total Semester</h4>
                        <span>
                          <i className="fa fa-book"></i> {course.totalSemester}
                        </span>
                      </div>
                    </div>
                    <p>{course.para2}</p>
                  </div>
                </div>
              </div>
              <RelatedCourse />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar-style sidebar-res-mrg-none">
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

export default CourseDetailArea;
