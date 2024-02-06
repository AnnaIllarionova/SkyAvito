import { Link, useNavigate } from "react-router-dom";
import { ModalButton } from "../reviews/reviews";
import { ModalButtonClose } from "../reviews/reviews";
import * as S from "../reviews/reviews.styled";
import * as Styled from "./add-new-advertisement.styled";
import {
  useAddNewAdvertisementFilesMutation,
  useAddNewAdvertisementTextMutation,
} from "../../services/api-services-reauth";
import { useRef, useState } from "react";

export const NewAdvertisement = ({ user }) => {
  const navigate = useNavigate();

  const [
    addNewAdvertisementText,
    { isLoading: isNewAdvTextLoading, error: newAdvTextError },
  ] = useAddNewAdvertisementTextMutation();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [newAdvError, setNewAdvError] = useState(null);
  const [addNewAdvertisementFiles, {error: newAdvFileError}] = useAddNewAdvertisementFilesMutation();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState([] || null);
  const filePicker = useRef(null);

  const handlePublishNewAdv = async () => {
    if (newAdvTextError || newAdvFileError) {
      throw new Error(" Ошибка загрузки текста объявления");
    }
    try {
      await addNewAdvertisementText({
        title: titleValue,
        description: descriptionValue,
        price: priceValue,
      })
        .unwrap()
        .then((response) => {
          console.log(response);
          if (selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
              addNewAdvertisementFiles({
                data: selectedFiles[i],
                id: response.id,
              }).unwrap();
            }
          }
        });
        setTitleValue("");
        setDescriptionValue("");
        setPriceValue("");
        setSelectedFiles([]);
        setPreview([]);
        navigate("/profile")
    } catch (error) {
      console.log(error);
      setNewAdvError(error.message);
    }
  };

  const handleChangeImage = (event) => {
    const files = Array.from(event.target.files || []);
    console.log(files);
    setSelectedFiles(files.map((file) => file));

    const newPreview = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // if (!file) return;
      const reader = new FileReader();
      reader.onload = function () {
        newPreview.push(reader.result);
        console.log(newPreview);
        if (newPreview.length === files.length) {
          setPreview(newPreview);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  console.log("selectedFiles", selectedFiles);
  return user !== null ? (
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
                onChange={(e) => setDescriptionValue(e.target.value)}
              ></S.FormNewArtAreaDescription>
            </S.FormNewArtBlockAdv>

            <S.FormNewArtBlockAdvBottom>
              <Styled.FormNewArtP>
                Фотографии товара
                <Styled.FormNewArtSpan>
                  не более 5 фотографий
                </Styled.FormNewArtSpan>
              </Styled.FormNewArtP>
              <input
                type="file"
                accept="image/*"
                ref={filePicker}
                multiple
                onChange={handleChangeImage}
              />
              <Styled.FormNewArtBarImg>
                <Styled.FormNewArtImg
                  onClick={() => filePicker.current.click()}
                >
                  <Styled.FormNewArtAddImg src={preview[0]} alt="" />
                  <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                </Styled.FormNewArtImg>
                <Styled.FormNewArtImg
                  onClick={() => filePicker.current.click()}
                >
                  <Styled.FormNewArtAddImg src={preview[1]} alt="" />
                  <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                </Styled.FormNewArtImg>
                <Styled.FormNewArtImg>
                  <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                  <Styled.FormNewArtAddImg src={preview[2]} alt="" />
                </Styled.FormNewArtImg>
                <Styled.FormNewArtImg>
                  <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                  <Styled.FormNewArtAddImg src={preview[3]} alt="" />
                </Styled.FormNewArtImg>
                <Styled.FormNewArtImg>
                  <Styled.FormNewArtAddImg src={preview[4]} alt="" />
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
                onChange={(e) => setPriceValue(e.target.value)}
              />
              <Styled.FormNewArtInputPriceCover></Styled.FormNewArtInputPriceCover>
            </S.FormNewArtBlockAdvBottom>

            <p>{newAdvError}</p>

            <ModalButton
              buttonTitle={
                isNewAdvTextLoading ? "Публикуем..." : "Опубликовать"
              }
              onClick={handlePublishNewAdv}
              disabled={isNewAdvTextLoading}
            />
          </S.ModalFormNewArtAdv>
        </S.ModalContentAdv>
      </S.ModalBlock>
    </S.ContainerModal>
  ) : (
    navigate("/singin")
  );
};
