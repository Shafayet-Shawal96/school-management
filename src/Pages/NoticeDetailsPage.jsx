import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import NoticeArea from "../Layout/NoticeDetailsPageLayout/NoticeArea";

const breadcrumbObj = {
  title: "Notice Details",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Notice Details",
  overlayClass: "breadcrumb-overly-3",
  breadcrumbImage: {
    backgroundImage: `url(../assets/img/bg/breadcrumb-bg-5.jpg)`,
  },
};

function NoticeDetailsPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <NoticeArea />
    </Fragment>
  );
}

export default NoticeDetailsPage;

// import React, { Fragment, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setNoticeDetails } from "../Store/NoticeDetailsPageSlice";

// import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

// import NoticeArea from "../Layout/NoticeDetailsPageLayout/NoticeArea";

// const authorDetails = {
//   id: 1,
//   name: "Adrin Azra",
//   image: "./assets/img/blog/author.jpg",
//   info: "Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusm od tempor incidi dunt utlabordolore magna aliqua. Ut enim fugiat nulpariaatatnoproident, sunt in culpa qui officia deserunt m utperspiciatiund.",
// };

// const breadcrumbObj = {
//   title: "Notice Details",
//   subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//               eiusmod tempor incididunt ut labore .`,
//   pageName: "Notice Details",
//   overlayClass: "breadcrumb-overly-3",
//   breadcrumbImage: {
//     backgroundImage: `url(./assets/img/bg/breadcrumb-bg-5.jpg)`,
//   },
// };

// const noticeDetails = {
//   id: 1,
//   eventImage: "./assets/img/blog/blog-details.jpg",
//   publishDate: "June, 24th 2016",
//   category: "Education",
//   title: "Aempor incididt ut bore dolore magna aliqua.",
//   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
// };

// const allEvents = [
//   {
//     id: 1,
//     eventImage: "./assets/img/blog/blog-15.jpg",
//     publishDate: "June, 24th 2016",
//     category: "Education",
//     title: "Testing is a great thing.",
//     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
//   },
//   {
//     id: 2,
//     eventImage: "./assets/img/blog/blog-16.jpg",
//     publishDate: "July, 24th 2017",
//     category: "Alumini",
//     title: "A variation of the ordinary.",
//     text: "doloremque laudan tium, totam ersps uns iste natus labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
//   },
//   {
//     id: 3,
//     eventImage: "./assets/img/blog/blog-14.jpg",
//     publishDate: "Feb, 27th 2017",
//     category: "Convocation",
//     title: "In publishing and graphic.",
//     text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
//   },
//   {
//     id: 4,
//     eventImage: "./assets/img/blog/blog-15.jpg",
//     publishDate: "Jan, 29th 2017",
//     category: "BBA",
//     title: "Learn English in ease.",
//     text: " ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehendervoluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, suculpa qui officia deserunt mollit anim id est laborumut perspiciatis unde omnis iste natus errovoluptatem magni dolores eos qui ratione voluptatem sequi nescNeque porro quisquam est, qui dolorem ipsum quia doloamet, consectetur, adipisci velit, sed quia non numquammodi tempora incidunt ut labore et dolore maliquam quaerat voluptatem.",
//   },
// ];

// function NoticeDetailsPage() {
//   const dispatch = useDispatch();
//   const noticeObject = useSelector((state) => state.noticeDetails.noticeObject);
//   useEffect(() => {
//     dispatch(setNoticeDetails());
//   }, [dispatch]);

//   return (
//     <Fragment>
//       <BreadcrumbArea
//         breadcrumbObj={
//           noticeObject.length !== 0 ? noticeObject[0] : breadcrumbObj
//         }
//       />
//       <NoticeArea
//         noticeDetails={
//           noticeObject.length !== 0 ? noticeObject[1] : noticeDetails
//         }
//         authorDetails={
//           noticeObject.length !== 0 ? noticeObject[2] : authorDetails
//         }
//         allEvents={noticeObject.length !== 0 ? noticeObject[3] : allEvents}
//       />
//     </Fragment>
//   );
// }

// export default NoticeDetailsPage;
