import Skeleton from "react-loading-skeleton";
import { CardList } from "../../components/card-list/card-list";
import { Menu } from "../../components/menu/menu";
import {
  useAddUserAvatarMutation,
  useChangeCurrentUserMutation,
  useGetCurrentUserAdvertisementsQuery,
  useGetCurrentUserQuery,
} from "../../services/api-services-reauth";
import * as Styled from "../main-page/main-page.styled";
import * as S from "./profile.styled";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NewAdvertisement } from "../add-new-advertisement/add-new-advertisement";

export const Profile = ({
  searchText,
  startSearch,
  user,
  logOut,
  isModalOpen,
  setDeletedPictures,
  deletedPictures,
  refetch,
  setIsModalOpen,
}) => {
  const {
    data: userAdvsData,
    isLoading: userAdvsIsLoading,
    error: userAdvsError,
    refetch: userAdvsRefetch,
  } = useGetCurrentUserAdvertisementsQuery();
  const {
    data: currentUser,
    isLoading,
    error: currentUserError,
    refetch: refetchCurrentUser,
  } = useGetCurrentUserQuery();

  const [
    changeCurrentUser,
    { isLoading: isLoadingChangeUser, error: errorChangeUser },
  ] = useChangeCurrentUserMutation();

  const navigate = useNavigate();

  const handleChangePassword = () => {
    navigate("change-password");
  };

  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [isChanging, setIsChanging] = useState(false);
  const [savingError, setSavingError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setNameValue(currentUser.name);
      setSurnameValue(currentUser.surname);
      setPhoneValue(currentUser.phone);
      setCityValue(currentUser.city);
    }
    refetchCurrentUser();
    userAdvsRefetch();
  }, [currentUser, userAdvsData]);

  const handleSaveUser = async (e) => {
    e.preventDefault();

    try {
      if (nameValue === "" || phoneValue === "") {
        throw new Error(
          "Поля 'Введите своё имя' и 'Введите номер телефона' должны быть заполнены",
        );
      }

      await changeCurrentUser({
        role: currentUser.role,
        email: currentUser.email,
        name: nameValue,
        surname: surnameValue,
        phone: phoneValue,
        city: cityValue,
      });
      setIsChanging(false);
    } catch (error) {
      // console.log(error);
      setSavingError(error.message);
    }
  };

  const [addUserAvatar, { isLoading: avatarIsLoading }] =
    useAddUserAvatarMutation();
  const [file, setFile] = useState("");
  const [isAvatarChanging, setIsAvatarChanging] = useState(false);

  const changeAvatar = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      await addUserAvatar(formData);
      setFile("");
      setIsAvatarChanging(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeAvatar = () => {
    setIsAvatarChanging(true);
  };

  if (currentUserError) {
    return (
      <S.ProfileTitleNoResults>
        Ошибка сети, попробуйте еще раз
      </S.ProfileTitleNoResults>
    );
  }

  return user !== null ? (
    <>
      <main className="main">
        <Styled.MainContainer>
          <S.MainCenterBlock>
            <Menu logOut={logOut} user={user} />
            {isLoading ? (
              <Skeleton height={42} />
            ) : (
              <Styled.MainTitle>
                {`Здравствуйте, 
                ${
                  currentUser?.name !== ""
                    ? currentUser?.name
                    : currentUser?.email
                }
                !`}
              </Styled.MainTitle>
            )}

            <S.MainProfile>
              <S.ProfileContent>
                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                <S.ProfileSettings>
                  <S.SettingsLeft>
                    {isLoading ? (
                      <Skeleton height={170} width={170} />
                    ) : (
                      <S.SettingsImgBox>
                        {currentUser?.avatar !== null ? (
                          <S.SettingsImg
                            src={`http://localhost:8090/${currentUser?.avatar}`}
                            alt="avatar"
                          />
                        ) : null}
                      </S.SettingsImgBox>
                    )}
                    {isAvatarChanging ? null : (
                      <S.SettingsChangePhoto
                        onClick={handleChangeAvatar}
                        href="#"
                        target="_self"
                      >
                        Заменить
                      </S.SettingsChangePhoto>
                    )}
                    {isAvatarChanging ? (
                      <S.FormFile onSubmit={changeAvatar}>
                        <S.FormFileLabel>
                          <S.FormFileInput
                            type="file"
                            name="avatar"
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                          <S.FormFileSpan>
                            {file !== "" ? file.name : "Выберите файл"}
                          </S.FormFileSpan>
                        </S.FormFileLabel>

                        <S.FormInputSubmit
                          type="submit"
                          value={avatarIsLoading ? "Меняем..." : "Отправить"}
                          disabled={avatarIsLoading}
                        />
                      </S.FormFile>
                    ) : null}
                  </S.SettingsLeft>
                  <S.SettingsRight>
                    <S.SettingsForm action="#">
                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="fname">
                          Имя
                        </S.SettingsFormLabel>

                        <S.SettingsFormInputFirstName
                          id="settings-fname"
                          name="fname"
                          type="text"
                          value={
                            isLoading ? "Данные загружаются..." : nameValue
                          }
                          placeholder="Введите своё имя"
                          onChange={(e) => {
                            setNameValue(e.target.value);
                            setIsChanging(true);
                          }}
                        />
                      </S.SettingsBox>

                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="lname">
                          Фамилия
                        </S.SettingsFormLabel>
                        <S.SettingsFormInputLastName
                          id="settings-lname"
                          name="lname"
                          type="text"
                          value={
                            isLoading ? "Данные загружаются..." : surnameValue
                          }
                          placeholder="Введите свою фамилию"
                          onChange={(e) => {
                            setSurnameValue(e.target.value);
                            setIsChanging(true);
                          }}
                        />
                      </S.SettingsBox>

                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="city">
                          Город
                        </S.SettingsFormLabel>
                        <S.SettingsFormInputCity
                          id="settings-city"
                          name="city"
                          type="text"
                          value={
                            isLoading ? "Данные загружаются..." : cityValue
                          }
                          placeholder="Введите город"
                          onChange={(e) => {
                            setCityValue(e.target.value);
                            setIsChanging(true);
                          }}
                        />
                      </S.SettingsBox>

                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="phone">
                          Телефон
                        </S.SettingsFormLabel>
                        <S.SettingsFormInputPhone
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value={
                            isLoading ? "Данные загружаются..." : phoneValue
                          }
                          placeholder="Введите номер телефона"
                          onChange={(e) => {
                            setPhoneValue(e.target.value);
                            setIsChanging(true);
                          }}
                        />
                      </S.SettingsBox>
                      {errorChangeUser || (savingError && isChanging) ? (
                        <S.ProfileTitleNoResults>
                          {errorChangeUser?.error || savingError}
                        </S.ProfileTitleNoResults>
                      ) : null}
                      <S.SettingsButton
                        id="settings-btn"
                        onClick={handleSaveUser}
                        disabled={!isChanging}
                      >
                        {isLoadingChangeUser
                          ? "Изменения сохраняются"
                          : "Сохранить"}
                      </S.SettingsButton>

                      <S.SettingsButton
                        id="settings-btn-password"
                        onClick={handleChangePassword}
                      >
                        Изменить пароль
                      </S.SettingsButton>
                    </S.SettingsForm>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>

            <S.MainProfileTitle>Мои товары</S.MainProfileTitle>
          </S.MainCenterBlock>
          <CardList
            searchText={searchText}
            startSearch={startSearch}
            data={userAdvsData}
            error={userAdvsError}
            isLoading={userAdvsIsLoading}
          />
        </Styled.MainContainer>
      </main>
      <Outlet />
      {isModalOpen ? (
        <NewAdvertisement
          user={user}
          logOut={logOut}
          setDeletedPictures={setDeletedPictures}
          deletedPictures={deletedPictures}
          refetch={refetch}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </>
  ) : (
    navigate("/singin")
  );
};
