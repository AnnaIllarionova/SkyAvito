import styled from "styled-components";
import { device } from "./components/media-sizes/media-sizes";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    background-color: #FFFFFF;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  @media ${device.mobile} {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #FFFFFF;
  }
`;
