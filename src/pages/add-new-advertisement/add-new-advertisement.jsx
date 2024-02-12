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
  const [preview, setPreview] = useState([]);
  const filePicker = useRef(null);

 
    if(selectedFiles.length === 0) {
      setSelectedFiles(Array.from(Array(5)))
    } else if(selectedFiles.length < 5) {
      setSelectedFiles([...selectedFiles.push(Array.from(Array(5 - selectedFiles.length)))])
    } else if(selectedFiles.length > 5) {
      setSelectedFiles(selectedFiles.slice(0,5))
    }
   
  

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
      setNewAdvError(error.message);
    }
  };

  const handleChangeImage = (event) => {
    const files = Array.from(event.target.files || []);
    console.log(files);
    const filesArray = files.map((file) => file);
    
    setSelectedFiles((prevFiles) => prevFiles.concat(filesArray));

    const newPreview = [];

    filesArray.forEach((file) => {
      newPreview.push(URL.createObjectURL(file));
    });
  
    setPreview((prevPreview) => [...prevPreview, ...newPreview]);


  };
  console.log("selectedFiles", selectedFiles);
  console.log("preview", preview);


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
                {selectedFiles &&
                  selectedFiles.map((image, index) => {
                    return (
                      <Styled.FormNewArtImg
                        key={index}
                        onClick={() => filePicker.current.click()}
                      >
                        <Styled.FormNewArtAddImg src={preview[index]} alt="" />
                        <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                       {(preview[index] ) ? (
                         <Styled.CloseButton
                         onClick={(event) => {
                           event.stopPropagation();
                           setSelectedFiles(selectedFiles.filter((el) => el !== image));
                           setPreview(preview.filter((el) => el !== image));
                         }}
                       >
                         <Styled.CloseLine></Styled.CloseLine>
                        </Styled.CloseButton>
                       ) : null}
                         
                      </Styled.FormNewArtImg>
                    );
                  })}

               
               
                {/* <Styled.FormNewArtImg
                  onClick={() => filePicker.current.click()}
                >
                  <Styled.FormNewArtAddImg
                    //  src={preview[4]}
                    alt=""
                  />
                  <Styled.FormNewArtImgCover></Styled.FormNewArtImgCover>
                </Styled.FormNewArtImg> */}

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
    <Footer />
    </>
  ) : (
    navigate("/singin")
  );
};
