import { Link, useNavigate } from "react-router-dom";
import * as S from "../singin/singin.styled";
import { useForm } from "react-hook-form";
import { useRegisterNewUserMutation } from "../../services/api-services-reauth";
import { useState } from "react";
import { Footer } from "../../components/footer/footer";
import { MenuMob } from "../../components/menu/menu";

export const SingUp = ({ logOut, user }) => {
  const [registerNewUser, { error: registerError }] =
    useRegisterNewUserMutation();
  const [authError, setAuthError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (userData) => {

    try {
      const newUser = await registerNewUser({
        password: userData.password,
        role: "user",
        email: userData.login,
        name: userData.firstName,
        surname: userData.lastName,
        phone: 89000000000,
        city: userData.city,
      }).unwrap();
      if (registerError && registerError.status === 400) {
        throw new Error("Ошибка регистрации");
      }
      localStorage.setItem("user", JSON.stringify(newUser));
      reset();
      navigate("/singin");
    } catch (error) {
      console.log(error.data);

      setAuthError("Такой email уже зарегистрирован");
    }
  };

  return (
    <>
      <S.ContainerEnter>
        <MenuMob logOut={logOut} user={user} />
        <S.ModalBlockSingup>
          <S.ModalFormLogin id="formLogIn" action="#">
            <S.ModalLogo>
              <Link to="/">
                <S.ModalLogoImg src="./img/logo_modal.png" alt="logo" />
              </Link>
            </S.ModalLogo>

            <S.ModalInputBlock onSubmit={handleSubmit(onSubmit)}>
              <S.ModalInput
                {...register("login", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов!",
                  },
                })}
                type="email"
                id="formlogin"
                placeholder="email"
              />
              {errors?.login ? (
                <S.ErrorMessage>
                  {errors?.login?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}

              <S.ModalInput
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Пароль должен содержать минимум 5 символов!",
                  },
                })}
                type="password"
                id="formpassword"
                placeholder="Пароль"
              />
              {errors?.password ? (
                <S.ErrorMessage>
                  {errors?.password?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}

              <S.ModalInput
                {...register("passwordDouble", {
                  required: "Поле обязательно к заполнению",
                  validate: (value) =>
                    value === watch("password") || "Пароли не совпадают",
                })}
                type="password"
                id="passwordSecond"
                placeholder="Повторите пароль"
              />
              {errors?.passwordDouble ? (
                <S.ErrorMessage>
                  {errors?.passwordDouble?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}
              <S.ModalInput
                {...register("firstName", {
                  required: false,
                })}
                className="modal__input first-name"
                id="first-name"
                placeholder="Имя (необязательно)"
              />
              {errors?.firstName ? (
                <S.ErrorMessage>
                  {errors?.firstName?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}

              <S.ModalInput
                {...register("lastName", {
                  required: false,
                })}
                className="modal__input first-last"
                id="first-last"
                placeholder="Фамилия (необязательно)"
              />
              {errors?.lastName ? (
                <S.ErrorMessage>
                  {errors?.lastName?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}

              <S.ModalInput
                {...register("city", {
                  required: false,
                })}
                className="modal__input city"
                id="city"
                placeholder="Город (необязательно)"
              />
              {errors?.city ? (
                <S.ErrorMessage>
                  {errors?.city?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}
              {authError && <S.ErrorMessage>{authError}</S.ErrorMessage>}
              <S.ModalButtonEnter
                id="btnEnter"
                type="submit"
                value="Зарегистрироваться"
                disabled={!isValid}
              />
            </S.ModalInputBlock>

            <S.ModalButtonSingup id="btnSignUp">
              <S.ModalButtonSingupLink to="/singin">
                Войти
              </S.ModalButtonSingupLink>
            </S.ModalButtonSingup>
          </S.ModalFormLogin>
        </S.ModalBlockSingup>
      </S.ContainerEnter>
      <Footer />
    </>
  );
};
