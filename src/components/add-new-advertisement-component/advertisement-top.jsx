import { useEffect } from "react";
import * as S from "../../pages/reviews/reviews.styled";

export const AdvertisementText = ({
  setTitleValue,
  setDescriptionValue,
  data,
  titleValue,
  descriptionValue,
  isLoading,
}) => {
  useEffect(() => {
    data ? setTitleValue(data.title) : setTitleValue("");
    data ? setDescriptionValue(data.description) : setDescriptionValue("");
  }, [data]);
  return (
    <>
      <S.FormNewArtBlockAdv>
        <S.FormNewArtLabel htmlFor="text">Название</S.FormNewArtLabel>
        <S.FormNewArtAreaName
          type="text"
          name="name"
          id="formName"
          cols="auto"
          rows="2"
          placeholder="Введите название"
          value={data && (isLoading ? "Данные загружаются..." : titleValue)}
          onChange={(e) => setTitleValue(e.target.value)}
        ></S.FormNewArtAreaName>
      </S.FormNewArtBlockAdv>

      <S.FormNewArtBlockAdv>
        <S.FormNewArtLabel htmlFor="text">Описание</S.FormNewArtLabel>
        <S.FormNewArtAreaDescription
          name="text"
          id="formArea"
          cols="auto"
          rows="10"
          placeholder="Введите описание"
          value={
            data && (isLoading ? "Данные загружаются..." : descriptionValue)
          }
          onChange={(e) => setDescriptionValue(e.target.value)}
        ></S.FormNewArtAreaDescription>
      </S.FormNewArtBlockAdv>
    </>
  );
};
