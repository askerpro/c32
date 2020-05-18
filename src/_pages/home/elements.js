import styled from "styled-components";

export const Toolbar = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
`;

export const SelectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 979px) {
    width: 100%;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 979px) {
    flex: 1 0 100%;
    margin-bottom: 12px;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  font: inherit;
  color: currentColor;
  height: 1.1876em;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  padding: 18px 12px;
  margin-right: 6px;
  @media screen and (max-width: 979px) {
    margin-right: unset;
  }
`;

export const OrderIconWrapper = styled.button`
  cursor: pointer;
  margin-left: 12px;
  background: transparent;
  border: 0;
`;

export const StyledForm = styled.form`
  @media screen and (max-width: 979px) {
    width: 100%;
  }
`;
