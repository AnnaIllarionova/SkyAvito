import { Link, useLocation } from "react-router-dom";
import * as S from "./header.styled";

export const Header = () => {
  const location = useLocation();

  return (
    <S.Header>
      <S.HeaderNav>
        {location.pathname === "/" ? (
          <Link to="/singin">
            <S.HeaderButtonMainEnter id="btnMainEnter">
              Вход в личный кабинет
            </S.HeaderButtonMainEnter>
          </Link>
        ) : (
          <>
            <S.HeaderLogo>
              <S.LogoMobileLink to="/" target="_blank">
                <S.LogoMobileImg src="./img/logo-mob.png" alt="logo" />
              </S.LogoMobileLink>
            </S.HeaderLogo>
            <Link to="/add-new-advertisement">
              <S.HeaderButtonPutAddvertisement id="btputAd">
                Разместить объявление
              </S.HeaderButtonPutAddvertisement>
            </Link>
            <Link to="/profile">
              <S.HeaderButtonNavToProfile id="btnlk">
                Личный кабинет
              </S.HeaderButtonNavToProfile>
            </Link>
          </>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
