import * as S from "../../pages/reviews/reviews.styled";
import * as Styled from "../../pages/add-new-advertisement/add-new-advertisement.styled";
import { useRef, useState } from "react";

export const AdvertisementPictures = ({
  preview,
  setPreview,
  selectedFiles,
  setSelectedFiles,
  setDeletedPictures,
  deletedPictures,
  setIsAdvChanging,
}) => {
  const filePicker = useRef(null);
  const [lengthError, setLengthError] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  const handleChangeImage = (event) => {
    const files = Array.from(event.target.files || []);

    const filesArray = files.map((file) => file);
    let updatedFiles = [...selectedFiles, ...filesArray];
    if (updatedFiles.length > 5) {
      setLengthError("Максимум 5 фотографий");
      setIsChanging(true);
      return;
    } else {
      setIsChanging(false);
    }

    const slicedUpdatedFiles = updatedFiles.slice(0, 5);
    setSelectedFiles(slicedUpdatedFiles);
    const newPreview = [];

    filesArray.forEach((file) => {
      newPreview.push(URL.createObjectURL(file));
    });

    preview.splice(selectedFiles.length, filesArray.length, ...newPreview);
    const slicedPreview = preview.slice(0, 5);
    setPreview(slicedPreview);
    setIsAdvChanging(true);
  };

  const handleDeleteImage = ({ e, image, index }) => {
    e.stopPropagation();
    setIsChanging(false);
    setIsAdvChanging(true);

    const selectedFilesArr = [...selectedFiles];
    selectedFilesArr.splice(index, 1);

    setSelectedFiles(selectedFilesArr);

    const deletedImages = [];
    deletedImages.push(selectedFiles[index]);
    setDeletedPictures([...deletedPictures, ...deletedImages]);

    const filteredPreview = preview.filter((el) => el !== image);
    const fullPreview = [
      ...filteredPreview,
      ...Array.from(Array(5 - filteredPreview.length)),
    ];

    setPreview(fullPreview);
  };

  return (
    <S.FormNewArtBlockAdvBottom>
      <Styled.FormNewArtP>
        Фотографии товара
        <Styled.FormNewArtSpan>не более 5 фотографий</Styled.FormNewArtSpan>
      </Styled.FormNewArtP>
      <Styled.FormNewArtInput
        type="file"
        accept="image/*"
        ref={filePicker}
        multiple
        onChange={(event) => handleChangeImage(event)}
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
                  <Styled.FormNewArtAddImg src={preview[index]} alt="preview" />
                ) : null}
                <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                {preview[index] ? (
                  <Styled.CloseButton
                    onClick={(e) => handleDeleteImage({ e, image, index })}
                  >
                    <Styled.CloseLine></Styled.CloseLine>
                  </Styled.CloseButton>
                ) : null}
              </Styled.FormNewArtImg>
            );
          })}
      </Styled.FormNewArtBarImg>
      {isChanging ? <Styled.ErrorText>{lengthError}</Styled.ErrorText> : null}
    </S.FormNewArtBlockAdvBottom>
  );
};
