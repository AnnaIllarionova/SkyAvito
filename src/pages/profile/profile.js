import { Footer } from "../../components/footer/footer.styled";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";
import { CardItem } from "../main-page/main-page";
import * as Styled from "../main-page/main-page.styled";
import * as S from "./profile.styled";

export const Profile = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Styled.MainContainer>
          <S.MainCenterBlock>
            <Menu />
            <Styled.MainTitle>Здравствуйте, Антон!</Styled.MainTitle>

            <S.MainProfile>
              <S.ProfileContent>
                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                <S.ProfileSettings>
                  <S.SettingsLeft>
                    <S.SettingsImgBox>
                      <a href="" target="_self">
                        <S.SettingsImg src="#" alt="" />
                      </a>
                    </S.SettingsImgBox>
                    <S.SettingsChangePhoto href="#" target="_self">
                      Заменить
                    </S.SettingsChangePhoto>
                  </S.SettingsLeft>
                  <S.SettingsRight>
                    <S.SettingsForm action="#">
                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="fname">Имя</S.SettingsFormLabel>
                        <S.SettingsFormInputFirstName
                          id="settings-fname"
                          name="fname"
                          type="text"
                          // value=""
                          placeholder="Введите своё имя"
                        />
                      </S.SettingsBox>

                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="lname">Фамилия</S.SettingsFormLabel>
                        <S.SettingsFormInputLastName
                          id="settings-lname"
                          name="lname"
                          type="text"
                          // value=""
                          placeholder="Введите свою фамилию"
                        />
                      </S.SettingsBox>

                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="city">Город</S.SettingsFormLabel>
                        <S.SettingsFormInputCity
                          id="settings-city"
                          name="city"
                          type="text"
                          // value=""
                          placeholder="Введите город"
                        />
                      </S.SettingsBox>

                      <S.SettingsBox>
                        <S.SettingsFormLabel htmlFor="phone">Телефон</S.SettingsFormLabel>
                        <S.SettingsFormInputPhone
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          // value=""
                          placeholder="Введите номер телефона"
                        />
                      </S.SettingsBox>

                      <S.SettingsButton
                        id="settings-btn"
                      >
                        Сохранить
                      </S.SettingsButton>
                    </S.SettingsForm>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>

            <S.MainProfileTitle>Мои товары</S.MainProfileTitle>
          </S.MainCenterBlock>
          <CardItem />
        </Styled.MainContainer>
      </main>
      <Footer />
    </>
  );
};


