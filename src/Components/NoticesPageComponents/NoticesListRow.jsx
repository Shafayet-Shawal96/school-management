import React from "react";
import { Link } from "react-router-dom";

const authorDetails = {
  id: 1,
  name: "Shawal",
  image: "./assets/img/blog/author.jpg",
  info: "Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt utlabordolore magna aliqua. Ut enim fugiat nulpariaatatnoproident, sunt in culpa qui officia deserunt m utperspiciatiund.",
};

const notices = [
  {
    id: 1,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    publishDate: "June, 24th 2016",
    category: "Education",
    title: "Testing is a great thing.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 2,
    noticeImage: "./assets/img/blog/blog-16.jpg",
    publishDate: "July, 24th 2017",
    category: "Alumini",
    title: "A variation of the ordinary.",
    text: "doloremque laudan tium, totam ersps uns iste natus labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 3,
    noticeImage: "./assets/img/blog/blog-14.jpg",
    publishDate: "Feb, 27th 2017",
    category: "Convocation",
    title: "In publishing and graphic.",
    text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 4,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    publishDate: "Jan, 29th 2017",
    category: "BBA",
    title: "Learn English in ease.",
    text: " ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 5,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    publishDate: "June, 24th 2016",
    category: "Education",
    title: "Testing is a great thing.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 6,
    noticeImage: "./assets/img/blog/blog-16.jpg",
    publishDate: "July, 24th 2017",
    category: "Alumini",
    title: "A variation of the ordinary.",
    text: "doloremque laudan tium, totam ersps uns iste natus labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 7,
    noticeImage: "./assets/img/blog/blog-14.jpg",
    publishDate: "Feb, 27th 2017",
    category: "Convocation",
    title: "In publishing and graphic.",
    text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 8,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    publishDate: "Jan, 29th 2017",
    category: "BBA",
    title: "Learn English in ease.",
    text: " ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 9,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    publishDate: "June, 24th 2016",
    category: "Education",
    title: "Testing is a great thing.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
];

function NoticeCard({ id, notice, authorName }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="single-blog mb-30">
        <div className="blog-img">
          <Link to={`/notices/${id}`}>
            <img src={notice.noticeImage} alt="" />
          </Link>
        </div>
        <div className="blog-content-wrap">
          <span>{notice.category}</span>
          <div className="blog-content">
            <h4>
              <Link to={`/notices/${id}`}>{notice.title}</Link>
            </h4>
            <p>{`${notice.text.slice(0, 50)} ...`}</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-user"></i>
                    {authorName}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <Link to={`/notices/${id}`}>
              <i className="fa fa-calendar-o"></i> {notice.publishDate}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoticesListRow() {
  return (
    <div className="col-xl-9 col-lg-8">
      <div className="blog-all-wrap mr-40">
        <div className="row">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              id={notice.id}
              notice={notice}
              authorName={authorDetails.name}
            />
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

export default NoticesListRow;
