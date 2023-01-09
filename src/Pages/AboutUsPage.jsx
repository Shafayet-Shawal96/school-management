import React, { Fragment } from "react";

import BreadcrumbArea from "../Layout/GlobalLayout/BreadcrumbArea";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import FunFact from "../Layout/GlobalLayout/FunFact";
import VideoArea from "../Layout/AboutUsPageLayout/VideoArea";
import ChooseArea from "../Layout/AboutUsPageLayout/ChooseArea";
import TeacherArea from "../Layout/AboutUsPageLayout/TeacherArea";
import AchivementArea from "../Layout/AboutUsPageLayout/AchivementArea";

const breadcrumbObj = {
  title: "About Us",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "About Page",
  overlayClass: "",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg.jpg)`,
  },
};

function AboutUsPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <ChooseArea />
      <VideoArea />
      <TeacherArea />
      <FunFact />
      <AchivementArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default AboutUsPage;
