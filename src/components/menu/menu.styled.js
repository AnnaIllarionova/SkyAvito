import { Link } from "react-router-dom";
import styled from "styled-components";

//Menu
export const MainMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  /* justify-content: start; */
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;
`;

export const MenuLogoLink = styled(Link)`
  width: 54;
  height: 50px;
`;

export const MenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
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
`;
