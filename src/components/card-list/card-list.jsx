import { format, isToday, isYesterday, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import {
  useGetAllAdvertisementsQuery,
  useGetAllImagesQuery,
  useGetImageByIdQuery,
} from "../../services/api-services";
import * as S from "./card-list.styled";
import { SkeletonForAdd } from "../skeletons/skeleton";
import { Link } from "react-router-dom";

export const CardList = ({ searchText, startSearch, setStartSearch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const { data: allAds, error, isLoading } = useGetAllAdvertisementsQuery();
  const { data: allImg } = useGetAllImagesQuery();
  const { data: imgById } = useGetImageByIdQuery({ id: 2 });
  console.log(imgById);
  console.log(allImg);
  console.log(allAds);


  useEffect(() => {
    const searchResultsArr =
      allAds &&
      allAds.filter(
        (add) =>
          add.title.toLowerCase().includes(searchText.toLowerCase()) ||
          add.price.toString().includes(searchText) ||
          add.user.city.toLowerCase().includes(searchText.toLowerCase()),
      );

    if (startSearch && searchText !== "") {
      setSearchResults(searchResultsArr);
    } else {
      setSearchResults(allAds);
      setStartSearch(false);
    }
  }, [searchText, startSearch]);

  if (error) {
    return <S.CardTitleNoResults>{error.error}</S.CardTitleNoResults>;
  }

  return (
    <S.MainContent>
      <S.Cards className="content__cards">
        {isLoading ? (
          <SkeletonForAdd />
        ) : startSearch && searchText.length > 0 ? (
          searchResults.length > 0 ? (
            searchResults.map((add) => <CardItem key={add.id} add={add} />)
          ) : (
            <S.CardTitleNoResults>
              По вашему запросу ничего не найдено
            </S.CardTitleNoResults>
          )
        ) : (
          allAds && allAds.map((add) => <CardItem key={add.id} add={add} />)
        )}
      </S.Cards>
    </S.MainContent>
  );
};

export const CardItem = ({ add }) => {
  return (
    <S.CardsItem key={add.id}>
      <S.CardsCard>
        <S.CardImage>
          <a href="#" target="_blank">
            <S.CardImg src={`./img/${add.images[0]?.url}`} alt="picture" />
          </a>
        </S.CardImage>
        <div className="card__content">
          <Link to={`/advertisement/${add.id}`}>
            <S.CardTitle>{add.title}</S.CardTitle>
          </Link>
          <S.CardPrice>{add.price + "₽"}</S.CardPrice>
          <S.CardPlace>{add.user.city}</S.CardPlace>
          <DateOfAdvertisement add={add} />
        </div>
      </S.CardsCard>
    </S.CardsItem>
  );
};

export const DateOfAdvertisement = ({ add }) => {
  const [wasCreatedAt, setWasCreatedAt] = useState(null);

  const addDate = parseISO(add.created_on);
  useEffect(() => {
    if (isToday(addDate)) {
      setWasCreatedAt(format(`Сегодня в ${format(addDate, "HH:mm")}`));
    } else if (isYesterday(addDate)) {
      setWasCreatedAt(format(`Вчера в ${format(addDate, "HH:mm")}`));
    } else {
      setWasCreatedAt(format(addDate, "dd.MM.yyy в HH:mm"));
    }
  }, [addDate]);

  return <S.CardDate>{wasCreatedAt}</S.CardDate>;
};
