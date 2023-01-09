import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BannerArea from "../Components/IndexPageThreeComponents/BannerArea";
import BestSaleArea from "../Components/IndexPageThreeComponents/BestSaleArea";
import DiscountArea from "../Components/IndexPageThreeComponents/DiscountArea";
import Modal from "../Components/IndexPageThreeComponents/Modal";
import PopularProductArea from "../Components/IndexPageThreeComponents/PopularProductArea";
import ProductArea from "../Components/IndexPageThreeComponents/ProductArea";
import SliderArea from "../Components/IndexPageThreeComponents/SliderArea";

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
