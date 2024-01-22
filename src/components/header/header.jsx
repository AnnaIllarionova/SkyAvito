import { useLocation } from "react-router-dom";
import * as S from "./header.styled";

export const Header = () => {
  const location = useLocation();

  return (
    <S.Header>
      <S.HeaderNav>
        {location.pathname === "/" ? (
          <S.HeaderButtonMainEnter id="btnMainEnter">
            Вход в личный кабинет
          </S.HeaderButtonMainEnter>
        ) : (
          <>
            <S.HeaderLogo>
              <S.LogoMobileLink to="/" target="_blank">
                <S.LogoMobileImg
                  src="./img/logo-mob.png"
                  alt="logo"
                />
              </S.LogoMobileLink>
            </S.HeaderLogo>
            <S.HeaderButtonPutAddvertisement id="btputAd">
              Разместить объявление
            </S.HeaderButtonPutAddvertisement>
            <S.HeaderButtonNavToProfile id="btnlk">
              Личный кабинет
            </S.HeaderButtonNavToProfile>
          </>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
