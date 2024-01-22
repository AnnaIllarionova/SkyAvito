import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import * as S from "./main-page.styled";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Search />
        <S.MainContainer>
          <S.MainTitle>Объявления</S.MainTitle>

          <CardItem />
        </S.MainContainer>
      </main>
      <Footer />
    </>
  );
};

export const CardItem = () => {
  return (
    <S.MainContent>
      <S.Cards className="content__cards">
        <S.CardsItem>
          <S.CardsCard>
            <S.CardImage>
              <a href="#" target="_blank">
                <S.CardImg src="#" alt="picture" />
              </a>
            </S.CardImage>
            <div className="card__content">
              <a href="" target="_blank">
                <S.CardTitle>
                  Ракетка для большого тенниса Triumph Pro ST
                </S.CardTitle>
              </a>
              <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
              <S.CardPlace>Санкт Петербург</S.CardPlace>
              <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
            </div>
          </S.CardsCard>
        </S.CardsItem>
      </S.Cards>
    </S.MainContent>
  );
};
