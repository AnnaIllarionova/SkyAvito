import { Link } from "react-router-dom";
import * as S from "../singin/singin.styled";

export const SingUp = () => {
  return (
    <S.ContainerEnter>
      <S.ModalBlockSingup>
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
            <S.ModalInput
              className="modal__input password-double"
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <S.ModalInput
              className="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
            />
            <S.ModalInput
              className="modal__input first-last"
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
            />
            <S.ModalInput
              className="modal__input city"
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
            />
          </S.ModalInputBlock>
          <S.ModalButtonEnter id="btnEnter">
            <S.ModalButtonEnterLink to="/profile">
              Зарегистрироваться
            </S.ModalButtonEnterLink>
          </S.ModalButtonEnter>
          <S.ModalButtonSingup id="btnSignUp">
            <S.ModalButtonSingupLink to="/singin">
              Войти
            </S.ModalButtonSingupLink>
          </S.ModalButtonSingup>
        </S.ModalFormLogin>
      </S.ModalBlockSingup>
    </S.ContainerEnter>
  );
};
