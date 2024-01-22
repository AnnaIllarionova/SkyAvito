import styled from "styled-components";
import { device } from "../media-sizes/media-sizes";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #009ee4;

  @media ${device.mobile} {
    display: none;
  }
`;
export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const HeaderButton = styled.button`
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;

export const HeaderButtonMainEnter = styled(HeaderButton)`
  width: 224px;
`;

export const HeaderLogo = styled.div`
  display: none;

  @media ${device.mobile} {
    display: block;
  }
`;

export const LogoMobileLink = styled(Link)`
  @media ${device.mobile} {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const LogoMobileImg = styled.img`
  @media ${device.mobile} {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const HeaderButtonPutAddvertisement = styled(HeaderButton)`
  width: 232px;
  height: 40px;
  @media ${device.mobile} {
    display: none;
  }
`;
export const HeaderButtonNavToProfile = styled(HeaderButton)`
  width: 173px;
  height: 40px;
  margin-left: 10px;
  @media ${device.mobile} {
    display: none;
  }
`;
