import { Link } from "react-router-dom";
import * as S from "./menu.styled";

export const Menu = () => {
  return (
    <S.MainMenu>
      <S.MenuLogoLink to="/" target="_blank">
        <S.MenuLogoImg src="/img/logo.png" alt="logo" />
      </S.MenuLogoLink>
      <S.MenuForm action="#">
        <Link to="/">
          <S.MenuButton id="btnGoBack">Вернуться на&nbsp;главную</S.MenuButton>
        </Link>
      </S.MenuForm>
    </S.MainMenu>
  );
};
