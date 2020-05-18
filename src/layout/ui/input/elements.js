import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Wrapper = styled.div`
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
  width: 100%;
`;

export const InputWrapper = styled.div`
  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  position: relative;
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  background-color: rgba(0, 0, 0, 0.09);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  &:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;

    :hover& {
      border-bottom: 1px solid rgba(0, 0, 0, 0.87);
    }
  }

  &:after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: ${({ focused }) => (focused ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary};
    pointer-events: none;
  }
`;

export const IconWrapper = styled.span`
  margin-left: 12px;
  margin-top: 3px;
  line-height: unset;
  & svg {
    fill: currentColor;
  }
`;

export const Input = styled.input`
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  -webkit-tap-highlight-color: transparent;
  padding: 27px 12px 10px;

  &:focus {
    outline: 0;
  }
`;

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.00938em;
  display: block;
  transform-origin: top left;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  transform: translate(12px, 20px) scale(1);
  pointer-events: none;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  ${({ shrink }) =>
    shrink &&
    css`
      transform: translate(12px, 10px) scale(0.75);
      transform-origin: top left;
    `}
  ${({ startIcon }) =>
    startIcon &&
    css`
      margin-left: 36px;
    `}
`;

Label.propTypes = {
  shrink: PropTypes.bool,
  startIcon: PropTypes.bool,
};
