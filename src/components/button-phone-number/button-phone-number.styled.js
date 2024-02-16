import styled from "styled-components";
import { device } from "../media-sizes/media-sizes";

export const ArticleButtonBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
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

@media ${device.mobile} {
  width:100%;
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