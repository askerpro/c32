import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 0.3s;
  will-change: transform;
  transform: translateY(100%);
  ${({ open }) =>
    open &&
    css`
      transform: translateY(0%);
    `}
`;

Wrapper.propTypes = {
  open: PropTypes.bool.isRequired,
};

export const BackDrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000000ee;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  :hover {
    background-color: #fff;
    color: #000;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    fill: currentColor;
  }
  z-index: 2;
  @media screen and (max-width: 979px) {
    right: unset;
    top: unset;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
`;
