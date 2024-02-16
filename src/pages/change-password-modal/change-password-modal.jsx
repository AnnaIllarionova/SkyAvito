import { Link, useNavigate } from "react-router-dom";
import * as Styled from "../reviews/reviews.styled";
import * as S from "../singin/singin.styled";
import { useState } from "react";
import { useChangePasswordMutation } from "../../services/api-services-reauth";
import { ModalButtonClose } from "../reviews/reviews";

export const ChangePasswordModal = () => {
  const currentPassword = localStorage.getItem("currentPassword");
  const [changePassword, { isLoading: isLoadingChangePassword, error: errorChangePassword }] =
    useChangePasswordMutation();
  const [userPassword, setUserPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();


  const handleChange = async (e) => {
    e.preventDefault();
    if (
        (userPassword !== "" && newPassword === "") ||
        (userPassword === "" && newPassword === "") ||
        (userPassword === "" && newPassword !== "")
      ) {
        throw new Error("Все поля должны быть заполнены!");
      }

    try {
      await changePassword({
        password_1: userPassword,
        password_2: newPassword,
      });
      if (userPassword !== currentPassword) {
        throw new Error("Вы неправильно ввели старый пароль!");
      }
       
      if(errorChangePassword && errorChangePassword.status === 400) {
    throw new Error(errorChangePassword.detail);
      }

      navigate("/profile");
      setNewPassword("");
      setUserPassword("");
    } catch (error) {
      console.log(error);
      setPasswordError(error.message)
    }

  };

  return (
    <Styled.ContainerModal>
      <S.ModalBlock>
        <S.ModalFormLogin id="formLogIn" action="#">
       
          <Link to="/profile">
            <ModalButtonClose />
          </Link>

          <S.ModalInputBlock style={{marginTop: "70px"}} onSubmit={handleChange}>
            <S.ModalInput
              type="password"
              placeholder="Введите старый пароль"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <S.ModalInput
              type="password"
              placeholder="Введите новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {passwordError ? (
              <S.ErrorMessage>
                {passwordError || "Error!"}
              </S.ErrorMessage>
            ) : null}

            <S.ModalButtonEnter 
            type="submit" 
            disabled={isLoadingChangePassword} 
            value={isLoadingChangePassword ? "Меняем пароль..." : "Подтвердить изменения"} />
          </S.ModalInputBlock>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </Styled.ContainerModal>
  );
};
