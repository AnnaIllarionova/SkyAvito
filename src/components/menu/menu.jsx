import { Link } from "react-router-dom";
import * as S from "./menu.styled";
import * as Styled from "../search/search.styled";

export const Menu = ({ logOut, user }) => {
  return (
    <S.MainMenu>
      <S.MenuLogoLink to="/" target="_blank">
        <S.MenuLogoImg src="/img/logo.png" alt="logo" />
      </S.MenuLogoLink>
      <Styled.SearchLogoMobileLink to="/">
        <Styled.SearchLogoMobileImg src="/img/logo-mob.png" alt="logo" />
      </Styled.SearchLogoMobileLink>

      {user ? (<S.LogOutDiv onClick={logOut}>
        <S.LogOutImg src="/img/LogOutWhite.png" alt="exit" />
      </S.LogOutDiv>) : null}

      <S.MenuForm action="#">
        <Link to="/">
          <S.MenuButton id="btnGoBack">Вернуться на&nbsp;главную</S.MenuButton>
        </Link>
      </S.MenuForm>
    </S.MainMenu>
  );
};

export const MenuMob = ({logOut, user}) => {
  return (
    <S.MainMenuMob>
     
      <Styled.SearchLogoMobileLink to="/">
        <Styled.SearchLogoMobileImg src="/img/logo-mob.png" alt="logo" />
      </Styled.SearchLogoMobileLink>

      {user ? (<S.LogOutDiv onClick={logOut}>
        <S.LogOutImg src="/img/LogOutWhite.png" alt="exit" />
      </S.LogOutDiv>) : null}

    </S.MainMenuMob>
  )
}