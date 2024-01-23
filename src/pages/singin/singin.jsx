import { Link } from "react-router-dom";
import * as S from "./singin.styled";

export const SingIn = () => {
  return (
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin id="formLogIn" action="#">
          <S.ModalLogo>
            <Link to="/">
              <S.ModalLogoImg src="./img/logo_modal.png" alt="logo" />
            </Link>
          </S.ModalLogo>
          <S.ModalInputBlock>
            <S.ModalInput
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
          </S.ModalInputBlock>
          <S.ModalButtonEnter id="btnEnter">
            <S.ModalButtonEnterLink to="/">Войти</S.ModalButtonEnterLink>
          </S.ModalButtonEnter>
          <S.ModalButtonSingup id="btnSignUp">
            <S.ModalButtonSingupLink to="/singup">
              Зарегистрироваться
            </S.ModalButtonSingupLink>
          </S.ModalButtonSingup>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  );
};
