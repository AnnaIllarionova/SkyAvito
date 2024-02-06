import { format, isToday, isYesterday, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import * as S from "./card-list.styled";
import { SkeletonForAdd } from "../skeletons/skeleton";
import { Link } from "react-router-dom";

export const CardList = ({
  searchText,
  startSearch,
  setStartSearch,
  data,
  error,
  isLoading,
}) => {
  const [searchResults, setSearchResults] = useState([]);

  // const { data: allImg } = useGetAllImagesQuery();
  // const { data: imgById } = useGetImageByIdQuery({ id: 2 });
  // console.log(imgById);
  // console.log(allImg);
  console.log(data);

  useEffect(() => {
    const searchResultsArr =
      data &&
      data.filter(
        (add) =>
          add.title.toLowerCase().includes(searchText.toLowerCase()) ||
          add.price.toString().includes(searchText) ||
          add.user.city.toLowerCase().includes(searchText.toLowerCase()),
      );

    if (startSearch && searchText !== "") {
      setSearchResults(searchResultsArr);
    } else {
      setSearchResults(data);
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
          data && data.map((add) => <CardItem key={add.id} add={add} />)
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
            {add.images.length > 0 ? (
              <S.CardImg src={`http://localhost:8090/${add.images[0]?.url}`} alt="picture" />
            ) : null}
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
      setWasCreatedAt(`Сегодня в ${format(addDate, "HH:mm")}`);
    } else if (isYesterday(addDate)) {
      setWasCreatedAt(`Вчера в ${format(addDate, "HH:mm")}`);
    } else {
      setWasCreatedAt(format(addDate, "dd.MM.yyy в HH:mm"));
    }
  }, [addDate]);

  return <S.CardDate>{wasCreatedAt}</S.CardDate>;
};
