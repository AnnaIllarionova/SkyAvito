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

//   &:hover::before {
//     border-top: 2px solid #0080c1;
//     border-left: 2px solid #0080c1;
//   }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 13px;
      cursor: pointer;
    }
  }
`;

