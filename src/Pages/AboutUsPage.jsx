import React, { Fragment } from "react";
import AchivementArea from "../Components/AboutUsPageComponents/AchivementArea";
import FunFact from "../Components/AboutUsPageComponents/FunFact";
import TeacherArea from "../Components/AboutUsPageComponents/TeacherArea";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import ChooseArea from "../Components/AboutUsPageComponents/ChooseArea";
import VideoArea from "../Components/AboutUsPageComponents/VideoArea";

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
