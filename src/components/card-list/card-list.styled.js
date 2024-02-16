import styled from "styled-components";
import { device } from "../media-sizes/media-sizes";

export const CardTitleNoResults = styled.p`
  white-space: nowrap;
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;

  @media ${device.mobile} {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    height: 0px;
    background-color: #05abf473;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media ${device.mobile} {
    width: 100%;
    margin: 0 auto;
    overflow-y: scroll;
    // overflow: hidden;
    // position: fixed;
    // right: 0;
    // left: 0;
    // top: 134px;
    // bottom: 84px;
  }
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  // overflow-y: auto;
  // scrollbar-color: #ffffff #2e2e2e;
  // scrollbar-width: thin;
  // scrollbar-width: 0px;
  height: 922px;

  

  @media ${device.laptop} {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media ${device.mobile} {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;



export const CardsItem = styled.div`
  margin: 0;

  @media ${device.mobile} {
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  @media ${device.mobile} {
    width: 137px;
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const CardContent = styled.div`
@media ${device.mobile} {
  padding-left: 10px;
  padding-right: 10px;
}
`

export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  @media ${device.mobile} {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.mobile} {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const CardPlace = styled(CardDate)`
  margin-bottom: 4px;
`;
