import { Link } from "react-router-dom";
import * as S from "./header.styled";

export const Header = ({ user, logOut, setIsModalOpen }) => {

 
  return (
    <S.Header>
      <S.HeaderNav>
        {!user ? (
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
            <S.HeaderButtonPutAddvertisement
              onClick={() => setIsModalOpen(true)}
              id="btputAd"
            >
              Разместить объявление
            </S.HeaderButtonPutAddvertisement>
            <Link to="/profile">
              <S.HeaderButtonNavToProfile id="btnlk">
                Личный кабинет
              </S.HeaderButtonNavToProfile>
            </Link>
            <S.LogOutDiv onClick={logOut}>
              <S.LogOutImg src="/img/LogOutWhite.png" alt="exit" />
            </S.LogOutDiv>
          </>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
