import React from "react";
import { Link, useParams } from "react-router-dom";
import RelatedNotices from "../../Components/NoticeDetailsPageComponents/RelatedNotices";

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
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "June, 24th 2016",
    category: "Education",
    title: "Testing is a great thing.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 2,
    noticeImage: "./assets/img/blog/blog-16.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "July, 24th 2017",
    category: "Alumini",
    title: "A variation of the ordinary.",
    text: "doloremque laudan tium, totam ersps uns iste natus labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 3,
    noticeImage: "./assets/img/blog/blog-14.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "Feb, 27th 2017",
    category: "Convocation",
    title: "In publishing and graphic.",
    text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 4,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "Jan, 29th 2017",
    category: "BBA",
    title: "Learn English in ease.",
    text: " ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 5,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "June, 24th 2016",
    category: "Education",
    title: "Testing is a great thing.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 6,
    noticeImage: "./assets/img/blog/blog-16.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "July, 24th 2017",
    category: "Alumini",
    title: "A variation of the ordinary.",
    text: "doloremque laudan tium, totam ersps uns iste natus labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 7,
    noticeImage: "./assets/img/blog/blog-14.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "Feb, 27th 2017",
    category: "Convocation",
    title: "In publishing and graphic.",
    text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 8,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "Jan, 29th 2017",
    category: "BBA",
    title: "Learn English in ease.",
    text: " ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
  {
    id: 9,
    noticeImage: "./assets/img/blog/blog-15.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "June, 24th 2016",
    category: "Education",
    title: "Testing is a great thing.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
];

function NoticeArea() {
  const params = useParams();
  const notice = notices.find(
    (notice) => notice.id === Number(params.noticeId)
  );
  return (
    <div className="event-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="blog-details-wrap mr-40">
              <div className="blog-details-top">
                <img src={`.${notice.bgImage}`} alt="" />
                <div className="blog-details-content-wrap">
                  <div className="b-details-meta-wrap">
                    <div className="b-details-meta">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i>
                          {notice.publishDate}
                        </li>
                        <li>
                          <i className="fa fa-user"></i> {authorDetails.name}
                        </li>
                      </ul>
                    </div>
                    <span>{notice.category}</span>
                  </div>
                  <h3>{notice.title}</h3>
                  <p>{notice.text}</p>
                </div>
              </div>
              <div className="blog-author">
                <div className="author-img">
                  <img src={`.${authorDetails.image}`} alt="" />
                </div>
                <div className="author-content">
                  <div className="author-content-top">
                    <div className="blog-designation">
                      <h5>{authorDetails.name}</h5>
                      <span>Author</span>
                    </div>
                    <div className="author-social">
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
                  </div>
                  <p>{authorDetails.info}</p>
                </div>
              </div>
              <RelatedNotices category={notice.category} />
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
                  <img src="assets/img/banner/banner-4.jpg" alt="" />
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
                        <img src="assets/img/blog/recent-post-1.jpg" alt="" />
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
                        <img src="assets/img/blog/recent-post-2.jpg" alt="" />
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
                        <img src="assets/img/blog/recent-post-1.jpg" alt="" />
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
                        <img src="assets/img/blog/recent-post-2.jpg" alt="" />
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

export default NoticeArea;
