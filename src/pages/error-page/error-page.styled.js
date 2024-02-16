import styled from "styled-components";

export const ErrorContent = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #fffff;
  
`;

export const ErrorContainer = styled.div`
  width: 431px;
  height: 366px;
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorNumber = styled.h1`
  color: #000;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings:
    "clig" off,
    "liga" off;
`;

export const ErrorTitle = styled.h3`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export const ErrorText = styled.p`
  color: #b1b1b1;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.054px;
  margin-top: 19px;
  margin-bottom: 36px;
`;

export const ErrorBtnBackToMain = styled.button`
margin-left: 10px;
width: 158px;
height: 50px;
background-color: #009ee4;
border: 1px solid #009ee4;
border-radius: 6px;
font-size: 16px;
line-height: 24px;
color: #ffffff;

&:hover {
  background-color: #0080C1;
}
`;

export const ErrorLinkToMain = styled.a`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.054px;
  padding-right: 45px;
  padding-left: 45px;
  padding-top: 12px;
  padding-bottom: 16px;
  box-sizing: border-box;
`;
export const ErrorSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;
