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
import { Footer } from "../../components/footer/footer";
import { MenuMob } from "../../components/menu/menu";

export const NewAdvertisement = ({ user, logOut }) => {
  const navigate = useNavigate();

  const [
    addNewAdvertisementText,
    { isLoading: isNewAdvTextLoading, error: newAdvTextError },
  ] = useAddNewAdvertisementTextMutation();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [newAdvError, setNewAdvError] = useState(null);
  const [addNewAdvertisementFiles, { error: newAdvFileError }] =
    useAddNewAdvertisementFilesMutation();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState(Array.from(Array(5)));
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
      navigate("/profile");
    } catch (error) {
      console.log(error);
      if (error.status === 422) {
        setNewAdvError("Заполните все текстовые поля");
      } else {
        setNewAdvError(error.error);
      }
      
    }
  };

  const [lengthError, setLengthError] = useState(null);

  const handleChangeImage = (event) => {
    const files = Array.from(event.target.files || []);

    const filesArray = files.map((file) => file);
    console.log("filesArray", filesArray);
    let updatedFiles = [...selectedFiles, ...filesArray];
    if (updatedFiles.length > 5) {
      setLengthError("Максимум 5 фотографий");
      return;
    }
    const slicedUpdatedFiles = updatedFiles.slice(0, 5);
    // setSelectedFiles((prevFiles) => prevFiles.concat(filesArray));
    setSelectedFiles(slicedUpdatedFiles);
    const newPreview = [];

    filesArray.forEach((file) => {
      newPreview.push(URL.createObjectURL(file));
    });

    preview.splice(selectedFiles.length, filesArray.length, ...newPreview);
    const slicedPreview = preview.slice(0, 5);
    console.log("slicedPreview", slicedPreview);

    setPreview(slicedPreview);
  };

  const handleDeleteImage = ({ e, image, index }) => {
    e.stopPropagation();
    console.log("Before setSelectedFiles:", selectedFiles);
    selectedFiles.splice(preview[index], 1);

    setSelectedFiles(selectedFiles);
    console.log("After setSelectedFiles:", selectedFiles);
    const filteredPreview = preview.filter((el) => el !== image);
    const fullPreview = [
      ...filteredPreview,
      ...Array.from(Array(5 - filteredPreview.length)),
    ];
    console.log("fullPreview", fullPreview);

    setPreview(fullPreview);
  };
  console.log("selectedFiles", selectedFiles);
  console.log("preview", preview);
  console.log("newAdvError", newAdvError);

  return user !== null ? (
    <>
      <S.ContainerModal>
        <MenuMob logOut={logOut} user={user} />
        <S.ModalBlock>
          <S.ModalContentAdv>
            <S.ModalTitleDiv>
              <S.ModalTitle>Новое объявление</S.ModalTitle>
              <Link to={`/profile`}>
                <S.ModalLinkBack></S.ModalLinkBack>
              </Link>
            </S.ModalTitleDiv>

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
                <Styled.FormNewArtInput
                  type="file"
                  accept="image/*"
                  ref={filePicker}
                  multiple
                  onChange={handleChangeImage}
                />
                <Styled.FormNewArtBarImg>
                  {preview &&
                    preview.map((image, index) => {
                      return (
                        <Styled.FormNewArtImg
                          key={index}
                          onClick={() => filePicker.current.click()}
                        >
                          {preview[index] !== undefined ? (
                            <Styled.FormNewArtAddImg
                              src={preview[index]}
                              alt="preview"
                            />
                          ) : null}
                          <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                          {preview[index] ? (
                            <Styled.CloseButton
                              onClick={(e) =>
                                handleDeleteImage({ e, image, index })
                              }
                            >
                              <Styled.CloseLine></Styled.CloseLine>
                            </Styled.CloseButton>
                          ) : null}
                        </Styled.FormNewArtImg>
                      );
                    })}
                </Styled.FormNewArtBarImg>
                <Styled.ErrorText>{lengthError}</Styled.ErrorText>
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

              <Styled.ErrorText>{newAdvError}</Styled.ErrorText>

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
      <Footer />
    </>
  ) : (
    navigate("/singin")
  );
};
