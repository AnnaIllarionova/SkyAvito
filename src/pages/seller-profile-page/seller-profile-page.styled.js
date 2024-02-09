import styled from "styled-components";
import { device } from "../../components/media-sizes/media-sizes";

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media ${device.mobile} {
    padding: 85px 0px 84px;
  }
`;

export const MainCenterBlock = styled.div`
  margin: 0 auto;

  @media ${device.mobile} {
    margin: 0 auto;
    padding: 0 20px;
  }
`;
export const SellerTitleDiv = styled.div`
  @media ${device.mobile} {
    position: relative;
  }
`;

export const LinkBack = styled.div`
  @media ${device.mobile} {
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 0;
    cursor: pointer;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
  }
`;

export const MainProfileSell = styled.div`
  width: 100%;
  padding: 0 0 70px;

  @media ${device.mobile} {
    width: 100%;
    padding: 0 0 40px;
  }
`;

export const MainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #000000;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`;

export const ProfileSellContent = styled.div`
  width: 100%;

  @media ${device.tablet} {
    max-width: 834px;
    width: 100%;
  }

  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
  }
`;

export const ProfileSellSeller = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }

  @media ${device.mobile} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SellerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;

  @media ${device.mobile} {
    display: none;
    margin-right: 0px;
  }
`;

export const SellerRight = styled.div`
  width: auto;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SellerImgDiv = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: block;
  overflow: hidden;

  @media ${device.mobile} {
    display: none;
  }
`;

export const SellerImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const SellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`;

export const SellerCityAndInfo = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;

export const SellerImgMobBlock = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
  }
`;

export const SellerImgMobDiv = styled.div`
  @media ${device.mobile} {
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #f0f0f0;
  }
`;

export const SellerImgMob = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
`;

export const UsersTitleNoResults = styled.p`
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
