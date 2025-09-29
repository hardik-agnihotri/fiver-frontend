import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../cat-card/CatCard";

const Slide = ({ children,title ,slidesToShow, arrowsScroll }) => {
  //   console.log(item);
  return (
    <div className="slide">
      <div className="container">
        <h2>{title}</h2>
        <Slider arrows={false} slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
