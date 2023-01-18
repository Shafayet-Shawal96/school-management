import React from "react";
import { Link } from "react-router-dom";

const teacherContent = [
  {
    id: 1,

    cardHeadingOneFront: "Robi Khan",
    cardHeadingTwoFront: "Lecturer",
    cardHeadingOneBack: "Fawd Khan",
    cardHeadingTwoBack: "Lecturer",
    cardParagraphBack: "Tempor incididunt magna aliqua.",
  },
  {
    id: 2,

    cardHeadingOneFront: "tobi Khan",
    cardHeadingTwoFront: "Lecturer",
    cardHeadingOneBack: "Fawd Khan",
    cardHeadingTwoBack: "Lecturer",
    cardParagraphBack: "Tempor incididunt magna aliqua.",
  },
  {
    id: 3,

    cardHeadingOneFront: "cobi Khan",
    cardHeadingTwoFront: "Lecturer",
    cardHeadingOneBack: "Fawd Khan",
    cardHeadingTwoBack: "Lecturer",
    cardParagraphBack: "Tempor incididunt magna aliqua.",
  },
  {
    id: 4,

    cardHeadingOneFront: "jobi Khan",
    cardHeadingTwoFront: "Lecturer",
    cardHeadingOneBack: "Fawd Khan",
    cardHeadingTwoBack: "Lecturer",
    cardParagraphBack: "Tempor incididunt magna aliqua.",
  },
  {
    id: 5,

    cardHeadingOneFront: "uobi Khan",
    cardHeadingTwoFront: "Lecturer",
    cardHeadingOneBack: "Fawd Khan",
    cardHeadingTwoBack: "Lecturer",
    cardParagraphBack: "Tempor incididunt magna aliqua.",
  },
];

const teacheContentUpper = {
  heading: "Best Teacher",
  paragraphText:
    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
};

function SingleTeacher({ item }) {
  return (
    <div className="custom-col-5">
      <div className="single-teacher mb-30">
        <div className="teacher-img">
          <img src="assets/img/teacher/teacher-1.jpg" alt="" />
        </div>
        <div className="teacher-content-visible">
          <h4>{item.cardHeadingOneFront}</h4>
          <h5>{item.cardHeadingTwoFront}</h5>
        </div>
        <div className="teacher-content-wrap">
          <div className="teacher-content">
            <h4>{item.cardHeadingOneBack}</h4>
            <h5>{item.cardHeadingTwoBack}</h5>
            <p>{item.cardParagraphBack}</p>
            <div className="teacher-social">
              <ul>
                <li>
                  <Link className="facebook" to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="youtube-play" to="#">
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </li>
                <li>
                  <Link className="twitter" to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link className="google-plus" to="#">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeacherArea() {
  return (
    <div className="teacher-area pt-130 pb-100">
      <div className="container">
        <div className="section-title mb-75">
          <h2>{teacheContentUpper.heading}</h2>

          <p>{teacheContentUpper.paragraphText}</p>
        </div>
        <div className="custom-row">
          {teacherContent.map((item) => (
            <SingleTeacher key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherArea;
