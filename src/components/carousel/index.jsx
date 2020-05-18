import React from "react";
import { Slider, Slide } from "pure-react-carousel";
import ArrowNextIcon from "./media/arrow_forward_ios-black-18dp.svg";
import ArrowPrevIcon from "./media/arrow_back_ios-black-18dp.svg";

import PropTypes from "prop-types";
import * as E from "./elements";

const MyCarousel = ({ children, currentSlide }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <E.StyledCarousel
      naturalSlideWidth={100}
      naturalSlideHeight={45}
      totalSlides={childrenArray.length}
      currentSlide={currentSlide}
      isIntrinsicHeight={true}
      dragEnabled={false}
    >
      <E.ControlButtonsWrapper>
        <E.StyledPrevButton>
          <ArrowPrevIcon />
        </E.StyledPrevButton>
        <E.StyledNextButton>
          <ArrowNextIcon />
        </E.StyledNextButton>
      </E.ControlButtonsWrapper>
      <E.StyledSlider>
        {childrenArray.map((child, i) => (
          <E.StyledSlide index={i} key={i}>
            {child}
          </E.StyledSlide>
        ))}
      </E.StyledSlider>
      <E.DotsWrapper>
        {childrenArray.map((child, i) => (
          <E.StyledDot slide={i} key={i}>
            {child}
          </E.StyledDot>
        ))}
      </E.DotsWrapper>
    </E.StyledCarousel>
  );
};

MyCarousel.propTypes = {
  children: PropTypes.element.isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default MyCarousel;
