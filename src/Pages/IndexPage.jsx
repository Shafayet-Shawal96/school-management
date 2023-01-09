import React, { Fragment } from "react";
import AboutUs from "../Components/IndexPageComponents/AboutUs";
import AchievemetArea from "../Components/IndexPageComponents/AchievemetArea";
import BlogArea from "../Components/IndexPageComponents/BlogArea";
import ChooseUs from "../Components/IndexPageComponents/ChooseUs";
import CourseArea from "../Components/IndexPageComponents/CourseArea";
import EventArea from "../Components/IndexPageComponents/EventArea";
import RegisterArea from "../Components/IndexPageComponents/RegisterArea";
import SliderArea from "../Components/IndexPageComponents/SliderArea";
import TeacherArea from "../Components/IndexPageComponents/TeacherArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

function IndexPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <SliderArea />
      <ChooseUs />
      <AboutUs />
      <CourseArea />
      <AchievemetArea />
      <RegisterArea />
      <TeacherArea />
      <EventArea />
      <BlogArea />
      <FooterLayout />
    </Fragment>
  );
}

export default IndexPage;
