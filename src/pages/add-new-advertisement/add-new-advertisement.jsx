import { Link } from "react-router-dom";
import { ModalButton } from "../reviews/reviews";
import { ModalButtonClose } from "../reviews/reviews";
import * as S from "../reviews/reviews.styled";
import * as Styled from "./add-new-advertisement.styled";

export const NewAdvertisement = () => {
  return (
    <S.ContainerModal>
      <S.ModalBlock>
        <S.ModalContentAdv>
          <S.ModalTitle>Новое объявление</S.ModalTitle>
      <Link to={`/profile`}>
        <ModalButtonClose />
      </Link>
      <S.ModalFormNewArtAdv id="formNewArt" action="#">
        <S.FormNewArtBlockAdv>
          <S.FormNewArtLabel htmlFor="text">Название</S.FormNewArtLabel>
          <S.FormNewArtAreaName
            type="text"
            name="name"
            id="formName"
            cols="auto"
            rows="2"
            placeholder="Введите название"
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
          ></S.FormNewArtAreaDescription>
        </S.FormNewArtBlockAdv>

        <S.FormNewArtBlockAdvBottom>
          <Styled.FormNewArtP>
            Фотографии товара
            <Styled.FormNewArtSpan>не более 5 фотографий</Styled.FormNewArtSpan>
          </Styled.FormNewArtP>
          <Styled.FormNewArtBarImg>
            <Styled.FormNewArtImg>
              <Styled.FormNewArtAddImg src="" alt="" />
              <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
            </Styled.FormNewArtImg>
            <Styled.FormNewArtImg>
              <Styled.FormNewArtAddImg src="" alt="" />
              <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
            </Styled.FormNewArtImg>
            <Styled.FormNewArtImg>
              <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
              <Styled.FormNewArtAddImg src="" alt="" />
            </Styled.FormNewArtImg>
            <Styled.FormNewArtImg>
              <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
              <Styled.FormNewArtAddImg src="" alt="" />
            </Styled.FormNewArtImg>
            <Styled.FormNewArtImg>
              <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
              <Styled.FormNewArtAddImg src="" alt="" />
            </Styled.FormNewArtImg>
          </Styled.FormNewArtBarImg>
        </S.FormNewArtBlockAdvBottom>
        <S.FormNewArtBlockAdvBottom style={{ position: "relative"}}>
          <S.FormNewArtLabel htmlFor="price">Цена</S.FormNewArtLabel>
          <Styled.FormNewArtInputPrice
            type="text"
            name="price"
            id="formName"
          />
          <Styled.FormNewArtInputPriceCover></Styled.FormNewArtInputPriceCover>
        </S.FormNewArtBlockAdvBottom>

        <ModalButton buttonTitle="Опубликовать" />
      </S.ModalFormNewArtAdv>
      </S.ModalContentAdv>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};
