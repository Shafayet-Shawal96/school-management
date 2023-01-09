import React, { Fragment } from "react";

import AboutUs from "../Layout/IndexPageLayout/AboutUs";
import ChooseUs from "../Layout/IndexPageLayout/ChooseUs";
import BlogArea from "../Layout/IndexPageLayout/BlogArea";
import EventArea from "../Layout/IndexPageLayout/EventArea";
import SliderArea from "../Layout/IndexPageLayout/SliderArea";
import CourseArea from "../Layout/IndexPageLayout/CourseArea";
import TeacherArea from "../Layout/IndexPageLayout/TeacherArea";
import RegisterArea from "../Layout/IndexPageLayout/RegisterArea";
import AchievemetArea from "../Layout/IndexPageLayout/AchievemetArea";

function IndexPage() {
  return (
    <Fragment>
      <SliderArea />
      <ChooseUs />
      <AboutUs />
      <CourseArea />
      <AchievemetArea />
      <RegisterArea />
      <TeacherArea />
      <EventArea />
      <BlogArea />
    </Fragment>
  );
}

export default IndexPage;
