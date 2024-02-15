import * as S from "../../pages/reviews/reviews.styled";
import * as Styled from "../../pages/add-new-advertisement/add-new-advertisement.styled";
import { useRef, useState } from "react";

export const AdvertisementPictures = ({
  preview,
  setPreview,
  selectedFiles,
  setSelectedFiles,
}) => {
  const filePicker = useRef(null);
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
    const selectedFilesArr = [...selectedFiles];
    selectedFilesArr.splice(preview[index], 1);

    setSelectedFiles(selectedFilesArr);
    console.log("After setSelectedFiles:", selectedFiles);
    const filteredPreview = preview.filter((el) => el !== image);
    const fullPreview = [
      ...filteredPreview,
      ...Array.from(Array(5 - filteredPreview.length)),
    ];
    console.log("fullPreview", fullPreview);

    setPreview(fullPreview);
  };

  console.log("preview", preview);

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
      <Styled.ErrorText>{lengthError}</Styled.ErrorText>
    </S.FormNewArtBlockAdvBottom>
  );
};
