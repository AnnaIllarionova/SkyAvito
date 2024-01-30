import styled from "styled-components";
import { device } from "../../components/media-sizes/media-sizes";

export const ContainerModal = styled.div`
  opacity: 2;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (800px / 2));
  top: 60px;
  opacity: 1;

  @media ${device.mobile} {
    position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  height: auto;
  padding: 20px 12px 57px 50px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 15px;

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;

    &::before {
      content: "";
      display: block;
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
  }
`;

export const ModalButtonClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`;

export const ModalButtonCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    transform: rotate(-45deg);
  }

  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    transform: rotate(45deg);
  }

  &:hover:after, &:hover::before {
    background-color: #009EE4;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const ModalScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;


  &::-webkit-scrollbar {
    width: 5px;
    height: 0px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
  }
`;

export const ModalFormNewArt = styled.form`
  margin-top: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 652px;

  @media ${device.mobile} {
    margin-top: 22px;
  }
`;

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 14px;

  @media ${device.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
`;

export const FormNewArtLabel = styled.label`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;

  @media ${device.mobile} {
    display: none;
  }
`;

export const FormNewArtArea = styled.textarea`
  padding: 10px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 100px;
  max-height: 100px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  @media ${device.mobile} {
    width: 100%;
    max-height: 107px;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const FormNewArtButtonPub = styled.button`
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }

  @media ${device.mobile} {
    margin-top: 0px;
    width: 100%;
    height: 46px;
    background-color: #009ee4;
  }
`;

export const ModalReviews = styled.div`
  width: 100%;
  height: 495px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ReviewsReview = styled.div`
  display: flex;
  justify-content: flex-start;

`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ReviewLeft = styled.div`
  margin-right: 12px;
`;

export const ReviewImgDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  
`;

export const ReviewImg = styled.img`
  
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ReviewRight = styled.div`
  display: block;
`;

export const FontTitles = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;

export const ReviewName = styled(FontTitles)`
  margin-bottom: 12px;
  font-weight: 600;
`;

export const ReviewNameSpan = styled.span`
  margin-left: 10px;
  color: #5f5f5f;
  font-size: 16px;
  line-height: 32px;
`;

export const ReviewTitle = styled(FontTitles)`
  font-weight: 600;
`;

export const ReviewText = styled(FontTitles)`
  font-weight: 400;
  line-height: 24px;
`;

// export const = styled.div``;
