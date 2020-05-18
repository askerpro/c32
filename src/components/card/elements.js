import styled from "styled-components";

export const Card = styled.a`
  display: block;
  width: 100%;
  position: relative;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  :hover {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }
  text-decoration: none;
  color: #2b2b2b;
`;

export const PosterWrapper = styled.div`
  padding-top: 56.25%;
  width: 100%;
  position: relative;
`;

export const Poster = styled.img`
  left: 0%;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const Descriptopn = styled.div`
  font-size: 18px;
  margin-top: 8px;
`;
