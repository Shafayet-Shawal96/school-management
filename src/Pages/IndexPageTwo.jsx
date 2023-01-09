import React, { Fragment } from "react";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import FunFact from "../Layout/GlobalLayout/FunFact";

import AboutUs from "../Layout/IndexPageTwoLayout/AboutUs";
import ChooseUs from "../Layout/IndexPageTwoLayout/ChooseUs";
import SliderArea from "../Layout/IndexPageTwoLayout/SliderArea";
import AdmissionArea from "../Layout/IndexPageTwoLayout/AdmissionArea";
import BlogEventArea from "../Layout/IndexPageTwoLayout/BlogEventArea";

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
