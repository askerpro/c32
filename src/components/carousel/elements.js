import {
  Dot,
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import styled, { css } from "styled-components";

export const StyledCarousel = styled(CarouselProvider)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 979px) {
    justify-content: center;
  }
  @media screen and (min-width: 980px) {
    justify-content: space-between;
  }
`;

export const StyledSlider = styled(Slider)`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 1;
  height: auto;
  & div {
    height: 100%;
  }
  ul {
    height: 100%;
  }
`;

export const StyledSlide = styled(Slide)`
  & .carousel__slide-focus-ring {
    display: none;
  }
  & img {
    position: relative;
  }
  @media screen and (min-width: 980px) {
    & img {
      object-fit: contain;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
      display: block;
    }
  }
`;

const controlButtonStyles = css`
  width: 50px;
  height: 50px;
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid hsla(0, 0%, 59.2%, 0.05);
  color: #fff;
  background: hsla(0, 0%, 100%, 0.1);
  :hover {
    background: #fff;
    color: #000;
  }
  :disabled {
    visibility: hidden;
  }
  & svg {
    fill: currentColor;
  }
`;

export const ControlButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  margin: 16px;
  flex-shrink: 0;
  @media screen and (max-width: 979px) {
    display: none;
  }
`;

export const StyledNextButton = styled(ButtonNext)`
  ${controlButtonStyles}
  margin-left: 16px;
`;

export const StyledPrevButton = styled(ButtonBack)`
  ${controlButtonStyles}
  & svg {
    margin-left: 3px;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 24px;
  flex-shrink: 0;
`;

export const StyledDot = styled(Dot)`
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
  opacity: 0.5;
  :hover,
  :disabled {
    opacity: 1;
  }
  padding: 0;
  position: relative;
  margin-left: 8px;
  :first-of-type {
    margin-left: unset;
  }
  @media screen and (max-width: 979px) {
    border: 1px solid hsla(0, 0%, 59.2%, 0.05);
    border-radius: 50%;
    & img {
      display: none;
    }
  }
  @media screen and (min-width: 980px) {
    border: none;
    border-radius: 8px;
    width: 100px;
    height: 56px;
  }
`;
