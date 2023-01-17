import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";

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
  {
    id: 7,
    noticeImage: "./assets/img/blog/blog-14.jpg",
    bgImage: "./assets/img/blog/blog-details.jpg",
    publishDate: "Feb, 27th 2017",
    category: "Education",
    title: "In publishing and graphic.",
    text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
  },
];

const authorDetails = {
  id: 1,
  name: "Shawal",
  image: "./assets/img/blog/author.jpg",
  info: "Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt utlabordolore magna aliqua. Ut enim fugiat nulpariaatatnoproident, sunt in culpa qui officia deserunt m utperspiciatiund.",
};

function SingleEvent({ notice, authorName }) {
  return (
    <div className="single-blog">
      <div className="blog-img">
        <a href="/">
          <img src={`.${notice.noticeImage}`} alt="" />
        </a>
      </div>
      <div className="blog-content-wrap">
        <span>{notice.category}</span>
        <div className="blog-content">
          <h4>
            <a href="/">{notice.title}</a>
          </h4>
          <p>{`${notice.text.slice(0, 50)} ...`}</p>
          <div className="blog-meta">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-user"></i>
                  {authorName}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-date">
          <a href="/">
            <i className="fa fa-calendar-o"></i> {notice.publishDate}
          </a>
        </div>
      </div>
    </div>
  );
}

function RelatedSliderComponent({ category }) {
  // const filterednotices = notices.filter(
  //   (notice) => notice.category === category
  // );
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 1200.5,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991.5,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.5,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420.5,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="related-slider-active related-blog-slide pb-80"
    >
      {notices.map((notice) => (
        <SingleEvent
          key={notice.id}
          notice={notice}
          authorName={authorDetails.name}
        />
      ))}
    </Slider>
  );
}

export default RelatedSliderComponent;
