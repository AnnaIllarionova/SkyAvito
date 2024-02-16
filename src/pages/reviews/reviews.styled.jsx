import styled from "styled-components";
import { device } from "../../components/media-sizes/media-sizes";
import { Link } from "react-router-dom";

export const ContainerModal = styled.div`
  opacity: 2;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: fixed;
  z-index: 6;

  @media ${device.mobile} {
    background-color: #ffffff;
  }
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
    border-radius: 0;
  }
`;

export const ModalContentAdv = styled(ModalContent)`
  width: 600px;
  padding: 20px 50px 42px 50px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 320px;
    height: 85vh;
    padding: 30px 20px 30px;
    border-radius: 0;
    overflow-y: auto;
  }
`;

export const ModalTitleDiv = styled.div`
@media ${device.mobile} {
  position: relative;
}
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 15px;

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    margin:0;
   
  }
`;

export const ModalLinkBack = styled.div`
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

  &:hover:after,
  &:hover::before {
    background-color: #009ee4;
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
  height: 610px;

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
  display: flex;
  flex-direction: column;
  width: 652px;

  @media ${device.mobile} {
    margin-top: 22px;
    width: 279px;
  }
`;

export const ModalFormNewArtAdv = styled(ModalFormNewArt)`
  width: 500px;

  @media ${device.mobile} {
    margin-top: 22px;
    width: 279px;
  }
`;

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  @media ${device.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
`;

export const FormNewArtBlockAdv = styled(FormNewArtBlock)`
  margin-bottom: 20px;
`;
export const FormNewArtBlockAdvBottom = styled(FormNewArtBlock)`
  margin-bottom: 30px;
  overflow-x: auto;
`;

export const FormNewArtLabel = styled.label`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;

  @media ${device.mobile} {
    color: #000000;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: left;
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
    border-radius: 20px;
    font-size: 16px;
    line-height: 1;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;
export const FormNewArtAreaName = styled(FormNewArtArea)`
  height: 50px;
`;
export const FormNewArtAreaDescription = styled(FormNewArtArea)`
  height: 200px;
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
    line-height: 46px;
  }
`;

export const ModalReviews = styled.div`
  margin-top: 30px;
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
  border-radius: 50%;
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

export const ReviewTitleAuth = styled.p`
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ReviewTitleAuthLink = styled(Link)`
  font-size: 24px;
  line-height: 32px;
  color: #009ee4;
  margin-bottom: 20px;
`;

export const CommentsNoResults = styled.p`
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

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: red;
`;
