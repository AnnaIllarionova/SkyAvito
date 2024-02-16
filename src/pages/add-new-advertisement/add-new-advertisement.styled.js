import styled from "styled-components";
import { device } from "../../components/media-sizes/media-sizes";

export const FormNewArtP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
  }
`;

export const FormNewArtSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);

  @media ${device.mobile} {
    display: block;
    margin-left: 0px;
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const FormNewArtInput = styled.input`
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;

export const FormNewArtBarImg = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  // overflow: hidden;

  @media ${device.mobile} {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px -5px 10px;
    // overflow: hidden;
  }
`;

export const FormNewArtImg = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  @media ${device.mobile} {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`;

export const FormNewArtAddImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;

  @media ${device.mobile} {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormNewArtImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  &::before {
    transform: rotate(90deg);
  }
`;

export const FormNewArtInputPrice = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  @media ${device.mobile} {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    width: 100%;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const FormNewArtInputPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #ffffff;

  &:after {
    content: "₽";
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }

  @media ${device.mobile} {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;

    &:after {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const CloseButton = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: -10px;
  left: 77px;
  z-index: 10;
  cursor: pointer;
`;

export const CloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 2px;
    border-radius: 2px;
    background-color: #000000;
    top: 47%;
    right: -4px;
    transform: rotate(-45deg);
  }

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 2px;
    border-radius: 2px;
    background-color: #000000;
    top: 47%;
    right: -4px;
    transform: rotate(45deg);
  }

  &:hover:after,
  &:hover::before {
    background-color: #009ee4;
  }

  @media ${device.mobile} {
    // display: none;
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin: 10px 0px 10px;
`;
