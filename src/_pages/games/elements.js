import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  padding-top: 40px;
  @media screen and (max-width: 979px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 980px) {
    flex-direction: row;
    max-width: 980px;
    margin: 0 auto;
  }
`;

export const Content = styled.div``;

export const ThumbWrapper = styled.div`
  position: relative;
  border-radius: 6px;
  background: hsla(0, 0%, 100%, 0.05);
  margin-left: 16px;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;
  :last-of-type {
    :after {
      content: "View all";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #00000033;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    :hover {
      :after {
        background-color: #00000066;
      }
    }
  }
  @media screen and (max-width: 979px) {
    width: 264px;
    height: 148px;
    :first-of-type {
      margin-left: 0px;
    }
  }

  @media screen and (min-width: 980px) {
    margin-top: 16px;
    width: 184px;
    height: 102px;
  }
`;

export const Thumb = styled.img`
  left: 0%;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Media = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  max-width: 100%;
  margin-bottom: 24px;
  @media screen and (max-width: 979px) {
    overflow-x: scroll;
  }
  @media screen and (min-width: 980px) {
    align-content: flex-start;
    flex-wrap: wrap;
    flex-basis: 400px;
    flex-shrink: 0;
    margin-left: 16px;
  }
`;

export const Name = styled.h1`
  margin-top: 0;
  font-size: 48px;
`;

export const Actions = styled.div`
  margin-top: 24px;
`;

export const Label = styled.label`
  display: block;
  opacity: 0.7;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 22px;
`;

export const CarouselWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
