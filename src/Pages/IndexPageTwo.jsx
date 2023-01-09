import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import AdmissionArea from "../Components/IndexPageTwoComponents/AdmissionArea";
import ChooseUs from "../Components/IndexPageTwoComponents/ChooseUs";
import FunFact from "../Components/IndexPageTwoComponents/FunFact";
import SliderArea from "../Components/IndexPageTwoComponents/SliderArea";
import AboutUs from "../Components/IndexPageTwoComponents/SliderArea";
import BlogEventArea from "../Components/IndexPageTwoComponents/SliderArea";

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
