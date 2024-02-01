import Skeleton from "react-loading-skeleton";
import { CardList } from "../../components/card-list/card-list";
// import { Footer } from "../../components/footer/footer.styled";
// import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";
import { useGetCurrentUserQuery } from "../../services/api-services-reauth";
import * as Styled from "../main-page/main-page.styled";
import * as S from "./profile.styled";
import { useNavigate } from "react-router-dom";

export const Profile = ({
  searchText,
  startSearch,
  setStartSearch,
  user,
  logOut,
}) => {
  const {
    data: currentUser,
    isLoading,
    error: currentUserError,
  } = useGetCurrentUserQuery();
  console.log(currentUser);
  const navigate = useNavigate();
  console.log(user);
  if (currentUserError && currentUserError.status === 401) {
    logOut();
  }
  return user !== null ? (
    <main className="main">
      <Styled.MainContainer>
        <S.MainCenterBlock>
          <Menu />
          {isLoading ? (
            <Skeleton height={42} />
          ) : (
            <Styled.MainTitle>
              Здравствуйте,&nbsp;
              {currentUser.name !== "" ? currentUser.name : currentUser.email}!
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
                      <a href="" target="_self">
                        {currentUser.avatar !== null ? (
                          <S.SettingsImg
                            src={currentUser.avatar}
                            alt="avatar"
                          />
                        ) : null}
                      </a>
                    </S.SettingsImgBox>
                  )}
                  <S.SettingsChangePhoto href="#" target="_self">
                    Заменить
                  </S.SettingsChangePhoto>
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
                          isLoading ? "Данные загружаются..." : currentUser.name
                        }
                        placeholder="Введите своё имя"
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
                          isLoading
                            ? "Данные загружаются..."
                            : currentUser.surname
                        }
                        placeholder="Введите свою фамилию"
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
                          isLoading ? "Данные загружаются..." : currentUser.city
                        }
                        placeholder="Введите город"
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
                          isLoading
                            ? "Данные загружаются..."
                            : currentUser.phone
                        }
                        placeholder="Введите номер телефона"
                      />
                    </S.SettingsBox>

                    <S.SettingsButton id="settings-btn">
                      Сохранить
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
          setStartSearch={setStartSearch}
        />
      </Styled.MainContainer>
    </main>
  ) : (
    navigate("/singin")
  );
};
