import styled from "styled-components";
import { device } from "../../components/media-sizes/media-sizes";

//MainPage
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
 

  @media ${device.mobile} {
    padding: 85px 10px 84px;
  }
`;

export const MainTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;


  @media ${device.mobile} {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;

`;

