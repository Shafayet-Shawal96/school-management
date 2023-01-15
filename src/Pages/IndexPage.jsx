import React, { Fragment } from "react";

import AboutUs from "../Layout/IndexPageLayout/AboutUs";
import ChooseUs from "../Layout/IndexPageLayout/ChooseUs";
import NewsFeedArea from "../Layout/IndexPageLayout/NewsFeedArea";
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
      <NewsFeedArea />
      <AchievemetArea />
      <EventArea />
      <CourseArea />
      <RegisterArea />
      <TeacherArea />
    </Fragment>
  );
}

export default IndexPage;
