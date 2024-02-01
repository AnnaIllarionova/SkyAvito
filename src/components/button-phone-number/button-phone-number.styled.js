import styled from "styled-components";
import { device } from "../media-sizes/media-sizes";

export const ArticleButtonBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ArticleButton = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;

  &:hover {
    background-color: #0080c1;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const ArticleButtonRedact = styled(ArticleButton)`
  width: 189px;
  margin-right: 10px;

  @media ${device.tablet} {
    width: 225px;
    margin-right: 0;
  }
`;

export const ArticleButtonRemove = styled(ArticleButton)`
  width: 225px;

  @media ${device.tablet} {
    width: 225px;
  }
`;

export const ArticleButtonPhone = styled.button`
display: flex;
flex-direction: column;
padding: 10px 37px;
 border: 1px solid #009ee4;
align-items: center;
border-radius: 6px;
background: #009EE4;

&:hover {
  background-color: #0080c1;
}
`

export const ArticleButtonText = styled.p`
color: #FFF;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 140%;
`

export const ArticleButtonTextNumbers = styled(ArticleButtonText)`
font-size: 14px;
font-weight: 400;`