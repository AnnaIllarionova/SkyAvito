import { ModalButton } from "../reviews/reviews";
import { ModalButtonClose } from "../reviews/reviews";
import * as S from "../reviews/reviews.styled";
import * as Styled from "../add-new-advertisement/add-new-advertisement.styled";
import { Link, useNavigate } from "react-router-dom";

export const ChangeAdvertisement = ({user}) => {
    const navigate = useNavigate();
    return user !== null ? (
        <S.ContainerModal>
          <S.ModalBlock>
            <S.ModalContentAdv>
              <S.ModalTitle>Редактировать объявление</S.ModalTitle>
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
                    // onChange={(e) => setTitleValue(e.target.value)}
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
                    // onChange={(e) => setDescriptionValue(e.target.value)}
                  ></S.FormNewArtAreaDescription>
                </S.FormNewArtBlockAdv>
    
                <S.FormNewArtBlockAdvBottom>
                  <Styled.FormNewArtP>
                    Фотографии товара
                    <Styled.FormNewArtSpan>
                      не более 5 фотографий
                    </Styled.FormNewArtSpan>
                  </Styled.FormNewArtP>
                  <Styled.FormNewArtInput
                    type="file"
                    accept="image/*"
                    // ref={filePicker}
                    // multiple
                    // onChange={handleChangeImage}
                  />
                  <Styled.FormNewArtBarImg>
                    <Styled.FormNewArtImg
                    //   onClick={() => filePicker.current.click()}
                    >
                      <Styled.FormNewArtAddImg src="" alt="" />
                      <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                    </Styled.FormNewArtImg>
                    <Styled.FormNewArtImg
                    //   onClick={() => filePicker.current.click()}
                    >
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
                      <Styled.FormNewArtAddImg src="" alt="" />
                      <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                    </Styled.FormNewArtImg>
                  </Styled.FormNewArtBarImg>
                </S.FormNewArtBlockAdvBottom>
                <S.FormNewArtBlockAdvBottom style={{ position: "relative" }}>
                  <S.FormNewArtLabel htmlFor="price">Цена</S.FormNewArtLabel>
                  <Styled.FormNewArtInputPrice
                    type="text"
                    name="price"
                    id="formName"
                    // onChange={(e) => setPriceValue(e.target.value)}
                  />
                  <Styled.FormNewArtInputPriceCover></Styled.FormNewArtInputPriceCover>
                </S.FormNewArtBlockAdvBottom>
    
                {/* <p>{newAdvError}</p> */}
    
                <ModalButton
                  buttonTitle={
                    // isNewAdvTextLoading ? "Сохраняем..." : 
                    "Сохранить"
                  }
                  onClick=""
                  disabled=""
                />
              </S.ModalFormNewArtAdv>
            </S.ModalContentAdv>
          </S.ModalBlock>
        </S.ContainerModal>
      ) : (
        navigate("/singin")
      );
}