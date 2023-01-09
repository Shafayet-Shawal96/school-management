import React, { Fragment } from "react";

import AboutUs from "../Components/IndexPageComponents/AboutUs";
import ChooseUs from "../Components/IndexPageComponents/ChooseUs";
import BlogArea from "../Components/IndexPageComponents/BlogArea";
import EventArea from "../Components/IndexPageComponents/EventArea";
import SliderArea from "../Components/IndexPageComponents/SliderArea";
import CourseArea from "../Components/IndexPageComponents/CourseArea";
import TeacherArea from "../Components/IndexPageComponents/TeacherArea";
import RegisterArea from "../Components/IndexPageComponents/RegisterArea";
import AchievemetArea from "../Components/IndexPageComponents/AchievemetArea";

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
