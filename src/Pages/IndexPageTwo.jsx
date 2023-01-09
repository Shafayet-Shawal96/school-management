import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import AdmissionArea from "../Components/IndexPageTwoComponents/AdmissionArea";
import ChooseUs from "../Components/IndexPageTwoComponents/ChooseUs";
import SliderArea from "../Components/IndexPageTwoComponents/SliderArea";
import AboutUs from "../Components/IndexPageTwoComponents/AboutUs";
import BlogEventArea from "../Components/IndexPageTwoComponents/BlogEventArea";
import FunFact from "../Components/AboutUsPageComponents/FunFact";

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
