import styled from "styled-components";
import { device } from "../../components/media-sizes/media-sizes";
import { Link } from "react-router-dom";

export const Main = styled.main`
  margin: 0 auto;
`;

export const MainArticle = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media ${device.mobile} {
    max-width: 1178px;
    width: 100%;
    margin: 0 auto;
    padding: 0 5px;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  align-items: top;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 55px;
  }
`;

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media ${device.tablet} {
    margin-right: 20px;
  }

  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ArticleFillImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

  }
`;

export const BackMob = styled.div`
@media ${device.mobile} {
  width: 23px;
  height: 23px;
  background-color: transparent;
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  transform: rotate(-45deg);
  position: absolute;
  top: 24px;
  left: 32px;
  cursor: pointer;
  z-index: 2;
}
`

export const ArticleImgBox = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
    background-color: #ffffff;
  }
`;

export const ArticleImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;

  @media ${device.mobile} {
  
    display: none;
  }
`;

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;

  @media ${device.mobile} {
    display: none;
  }
`;

export const ArticleImgBarDiv = styled.div`
  display: flex;
  align-items: center;
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: ${(props) => props.$chosen ? "2px solid #009ee4" : "2px solid #f0f0f0"} ;
  margin: 0 5px;

  &:hover {
    border: 2px solid #009ee4;
  }
`;

export const ArticleImgBarDivPicture = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const ArticleImgBarMob = styled.div`
  display: none;

  @media ${device.mobile} {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - (68px / 2));
    display: flex;
    justify-content: space-between;
  }
`;

export const ImgBarMobCircle = styled.div`
  &::active {
    background-color: #f0f0f0;
  }
  @media ${device.mobile} {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #f0f0f0;
  }
`;

export const ImgBarMobCircleActive = styled(ImgBarMobCircle)`
  background-color: #f0f0f0;
`;

export const ArticleRight = styled.div`
  max-width: 621px;

  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 1;
  }
`;
export const ArticleTitle = styled(Title)`
  margin-bottom: 10px;

  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;

  @media ${device.mobile} {
    margin-bottom: 20px;
  }
`;

export const ArticleDateAndCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const ArticleLink = styled(Link)`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`;

export const ArticlePrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const ArticleAuthor = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media ${device.mobile} {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: block;
  overflow: hidden;
`;

export const AuthorImgPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthorCont = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
  margin-bottom: 30px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 28px;
    margin: 0;
  }
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media ${device.mobile} {
    padding: 0 20px 0;
  }
`;

export const MainTitle = styled(Title)`
  margin-bottom: 32px;
  padding: 0 5px;

  @media ${device.mobile} {
    margin-bottom: 14px;
    padding: 0;
  }
`;

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media ${device.mobile} {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`;

export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const MainTextPhoto = styled.p`
font-size: 14px;
  line-height: 24px;
  color: #000000;
  text-align: center;
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

export const ArticleButtonBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media ${device.tablet} {
    flex-direction: column;
  }
 
`;


export const ArticleButtonRedact = styled(ArticleButton)`
  width: 189px;
  margin-right: 10px;

  @media ${device.tablet} {
    width: 100%;
    margin-right: 0;
  }
`;

export const ArticleButtonRemove = styled(ArticleButton)`
  width: 225px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const AdvTitleNoResults = styled.p`
  white-space: nowrap;
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: red;
  margin-top: 20px;

  @media ${device.mobile} {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    width: 100%;
  }
`;
