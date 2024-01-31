import { Link, useNavigate } from "react-router-dom";
import * as S from "./singin.styled";
import { useForm } from "react-hook-form";
import { useGetTokenMutation } from "../../services/api-services-reauth";
import { useState } from "react";

export const SingIn = () => {
  const [getToken, { error: tokenError }] = useGetTokenMutation();
  const [loginError, setLoginError] = useState(null);

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
    console.log("data", data);
    // alert(JSON.stringify(data));
   
    // localStorage.getItem("user");
    console.log(localStorage.getItem("user"));
    try {
      const accessToken = await getToken({
        email: data.login,
        password: data.password,
      }).unwrap();
      if (tokenError && tokenError.status === 401) {
        throw new Error("Ошибка авторизации");
      }
      localStorage.setItem("accessTokenData", JSON.stringify(accessToken));
      reset();
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setLoginError(error.data.detail);
    }
  };
  return (
    <S.ContainerEnter>
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
            />
            {errors?.login ? (
              <S.ErrorMessage>
                {errors?.login?.message || "Error!"}
              </S.ErrorMessage>
            ) : null}

            <S.ModalInput
              {...register("password", {
                required: "Поле email обязательно для заполнения",
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
{loginError && <S.ErrorMessage>{loginError}</S.ErrorMessage>}
            <S.ModalButtonEnter
              id="btnEnter"
              type="submit"
              value="Войти"
              disabled={!isValid}
            />
          </S.ModalInputBlock>
          
          {/* <S.ModalButtonEnterLink to="/">Войти</S.ModalButtonEnterLink>
          </S.ModalButtonEnter> */}
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
