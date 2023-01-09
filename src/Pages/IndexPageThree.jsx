import React, { Fragment } from "react";

import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";

import Modal from "../Layout/IndexPageThreeLayout/Modal";
import SliderArea from "../Layout/IndexPageThreeLayout/SliderArea";
import BannerArea from "../Layout/IndexPageThreeLayout/BannerArea";
import ProductArea from "../Layout/IndexPageThreeLayout/ProductArea";
import BestSaleArea from "../Layout/IndexPageThreeLayout/BestSaleArea";
import DiscountArea from "../Layout/IndexPageThreeLayout/DiscountArea";
import PopularProductArea from "../Layout/IndexPageThreeLayout/PopularProductArea";

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
