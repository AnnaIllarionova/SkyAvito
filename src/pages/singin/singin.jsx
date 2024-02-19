import { Link, useNavigate } from "react-router-dom";
import * as S from "./singin.styled";
import { useForm } from "react-hook-form";
import { useGetTokenMutation } from "../../services/api-services-reauth";
import { useState } from "react";
import { MenuMob } from "../../components/menu/menu";
import { Footer } from "../../components/footer/footer";

export const SingIn = ({ setUser, logOut, user }) => {
  const [getToken, { isLoading, error: tokenError }] = useGetTokenMutation();
  const [loginError, setLoginError] = useState(null);
  const [isInputChanging, setIsInputChanging] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsInputChanging(false);
    try {
      const accessToken = await getToken({
        email: data.login,
        password: data.password,
      }).unwrap();
      if (tokenError) {
        throw new Error("Ошибка авторизации, попробуйте еще раз");
      }
      localStorage.setItem(
        "accessTokenData",
        JSON.stringify(accessToken.access_token),
      );
      localStorage.setItem(
        "refreshTokenData",
        JSON.stringify(accessToken.refresh_token),
      );

      localStorage.setItem("currentPassword", data.password);
      setLoginError(null);
      setUser(accessToken);
      reset();
      navigate("/profile");
    } catch (error) {
      // console.log(error);
      if (error?.data?.detail === "Incorrect email") {
        setLoginError("Некорректный email");
      } else if (error?.data?.detail === "Incorrect password") {
        setLoginError("Некорректный пароль");
      } else if (error.status === "FETCH_ERROR") {
        setLoginError("Ошибка сети, попробуйте еще раз");
      } else {
        setLoginError(error?.data?.detail || error.message || error.error);
      }
    }
  };
  const handleChangeInput = () => {
    setLoginError(null);
    setIsInputChanging(true);
  };
  return (
    <>
      <S.ContainerEnter>
        <MenuMob logOut={logOut} user={user} />
        <S.ModalBlock>
          <S.ModalFormLogin id="formLogIn" action="#">
            <S.ModalLogo>
              <Link to="/">
                <S.ModalLogoImg src="./img/logo_modal.png" alt="logo" />
              </Link>
            </S.ModalLogo>

            <S.ModalInputBlock onSubmit={handleSubmit(onSubmit)}>
              <S.ModalInput
                {...register("login", {
                  required: "Поле email обязательно для заполнения",
                })}
                id="formlogin"
                placeholder="email"
                onChange={handleChangeInput}
              />
              {errors?.login ? (
                <S.ErrorMessage>
                  {errors?.login?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}

              <S.ModalInput
                {...register("password", {
                  required: "Поле 'пароль' обязательно для заполнения",
                })}
                type="password"
                id="formpassword"
                placeholder="Пароль"
                onChange={handleChangeInput}
              />
              {errors?.password ? (
                <S.ErrorMessage>
                  {errors?.password?.message || "Error!"}
                </S.ErrorMessage>
              ) : null}
              {loginError && !isInputChanging ? (
                <S.ErrorMessage>{loginError}</S.ErrorMessage>
              ) : null}
              <S.ModalButtonEnter
                id="btnEnter"
                type="submit"
                value={isLoading ? "Подождите..." : "Войти"}
                disabled={!isValid || isLoading}
              />
            </S.ModalInputBlock>

            <S.ModalButtonSingup id="btnSignUp">
              <S.ModalButtonSingupLink to="/singup">
                Зарегистрироваться
              </S.ModalButtonSingupLink>
            </S.ModalButtonSingup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
      <Footer />
    </>
  );
};
