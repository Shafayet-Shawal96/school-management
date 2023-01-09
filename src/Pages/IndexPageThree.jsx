import React, { Fragment } from "react";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import Modal from "../Components/IndexPageThreeComponents/Modal";
import SliderArea from "../Components/IndexPageThreeComponents/SliderArea";
import BannerArea from "../Components/IndexPageThreeComponents/BannerArea";
import ProductArea from "../Components/IndexPageThreeComponents/ProductArea";
import BestSaleArea from "../Components/IndexPageThreeComponents/BestSaleArea";
import DiscountArea from "../Components/IndexPageThreeComponents/DiscountArea";
import PopularProductArea from "../Components/IndexPageThreeComponents/PopularProductArea";

function IndexPageThree() {
  return (
    <Fragment>
      <SliderArea />
      <BannerArea />
      <ProductArea />
      <PopularProductArea />
      <DiscountArea />
      <BestSaleArea />
      <BrandCarouselComponent />
      {/* <!-- Modal --> */}
      <Modal />
      {/* <!-- Modal end --> */}
    </Fragment>
  );
}

export default IndexPageThree;
