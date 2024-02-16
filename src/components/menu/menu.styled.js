import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../media-sizes/media-sizes";

//Menu
export const MainMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;

  @media ${device.mobile} {
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MenuLogoLink = styled(Link)`
  width: 54;
  height: 50px;

  @media ${device.mobile} {
    display: none;
  }
`;

export const MenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;

  @media ${device.mobile} {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const LogOutDiv = styled.div`
display: none;

@media ${device.mobile} {
  display:block;
  width: 40px;
  height:40px
}
`
export const LogOutImg = styled.img`
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

//MenuMob
export const MainMenuMob = styled.div`
 display: none;

  @media ${device.mobile} {
    display:block;
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;