import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const UIObject = useSelector((state) => state.UISlice.UI);
  const authorDetails = UIObject[0].authorDetails;
  const notices = UIObject[0].notices;
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
