import * as S from "../../pages/reviews/reviews.styled";
import * as Styled from "../../pages/add-new-advertisement/add-new-advertisement.styled";
import { useEffect } from "react";

export const AdvertisementPrice = ({
  setPriceValue,
  priceValue,
  data,
  isLoading,
  setIsAdvChanging
}) => {
  useEffect(() => {
    data ? setPriceValue(data?.price) : setPriceValue("");
  }, []);

  return (
    <S.FormNewArtBlockAdvBottom style={{ position: "relative" }}>
      <S.FormNewArtLabel htmlFor="price">Цена</S.FormNewArtLabel>
      <Styled.FormNewArtInputPrice
        type="text"
        name="price"
        id="formName"
        value={data && (isLoading ? "Данные Загружаются" : priceValue)}
        onChange={(e) => {
          setPriceValue(e.target.value);
          setIsAdvChanging(true);
        }}
      />
      <Styled.FormNewArtInputPriceCover></Styled.FormNewArtInputPriceCover>
    </S.FormNewArtBlockAdvBottom>
  );
};
