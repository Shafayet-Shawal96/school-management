import React from "react";
import CourseSliderOwl from "./CourseSliderOwl";

function TableContent({ tabStatus }) {
  console.log(tabStatus);
  return (
    <div className="tab-content jump">
      <div className={`tab-pane ${tabStatus === 1 ? "active" : ""}`}>
        <CourseSliderOwl>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-5.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-9.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-6.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-10.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-11.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-12.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </CourseSliderOwl>
      </div>
      <div className={`tab-pane ${tabStatus === 2 ? "active" : ""}`}>
        <CourseSliderOwl>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-11.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-6.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-10.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-12.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-5.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-9.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </CourseSliderOwl>
      </div>
      <div className={`tab-pane ${tabStatus === 3 ? "active" : ""}`}>
        <CourseSliderOwl>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-10.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-9.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-12.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-5.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-11.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-6.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </CourseSliderOwl>
      </div>
      <div className={`tab-pane ${tabStatus === 4 ? "active" : ""}`}>
        <CourseSliderOwl>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-12.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-5.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Courses Title Here</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-10.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-7.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-9.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-8.jpg" alt="" />
                </a>
                <span className="new-course">New Course</span>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-11.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="single-course mb-30">
              <div className="course-img">
                <a href="course-details.html">
                  <img src="assets/img/course/course-6.jpg" alt="" />
                </a>
              </div>
              <div className="course-content course-content-2">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  Veniam, nisi ut aliquiptempor incid idunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </CourseSliderOwl>
      </div>
      <div className="view-all text-center mt-20">
        <a className="default-btn" href="course.html">
          VIEW ALL
        </a>
      </div>
    </div>
  );
}

export default TableContent;
