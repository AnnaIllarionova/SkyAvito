import { useNavigate } from "react-router-dom";
import {
  useAddNewAdvertisementFilesMutation,
  useAddNewAdvertisementTextMutation,
} from "../../services/api-services-reauth";
import { useState } from "react";
import { AdvertisementText } from "../../components/add-new-advertisement-component/advertisement-top";
import { AdvertisementPictures } from "../../components/add-new-advertisement-component/advertisement-pictires";
import { AdvertisementPrice } from "../../components/add-new-advertisement-component/advertisement-price";
import { AdvertisementModal } from "../../components/add-new-advertisement-component/advertisement-modal";

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
          console.log("response",response);
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

  return (
    <AdvertisementModal
      logOut={logOut}
      user={user}
      title="Новое объявление"
      linkBack="/profile"
      newAdvError={newAdvError}
      isNewAdvTextLoading={isNewAdvTextLoading}
      handlePublishNewAdv={handlePublishNewAdv}
    >
      <AdvertisementText
        setTitleValue={setTitleValue}
        setDescriptionValue={setDescriptionValue}
      />

      <AdvertisementPictures
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        setPreview={setPreview}
        preview={preview}
      />

      <AdvertisementPrice setPriceValue={setPriceValue} 
      priceValue=""
      data={null}
      isLoading={null}
      />
    </AdvertisementModal>
  );
};
