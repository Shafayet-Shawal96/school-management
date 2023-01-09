import React, { Fragment } from "react";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import FunFact from "../Layout/GlobalLayout/FunFact";

import AboutUs from "../Components/IndexPageTwoComponents/AboutUs";
import ChooseUs from "../Components/IndexPageTwoComponents/ChooseUs";
import SliderArea from "../Components/IndexPageTwoComponents/SliderArea";
import AdmissionArea from "../Components/IndexPageTwoComponents/AdmissionArea";
import BlogEventArea from "../Components/IndexPageTwoComponents/BlogEventArea";

function IndexPageTwo() {
  return (
    <Fragment>
      <SliderArea />
      <AboutUs />
      <ChooseUs />
      <AdmissionArea />
      <FunFact />
      <BlogEventArea />
      <BrandCarouselComponent />
    </Fragment>
  );
}

export default IndexPageTwo;
