import {
  useAddNewAdvertisementFilesMutation,
  useAddNewAdvertisementTextMutation,
} from "../../services/api-services-reauth";
import { useState } from "react";
import { AdvertisementText } from "../../components/add-new-advertisement-component/advertisement-top";
import { AdvertisementPictures } from "../../components/add-new-advertisement-component/advertisement-pictires";
import { AdvertisementPrice } from "../../components/add-new-advertisement-component/advertisement-price";
import { AdvertisementModal } from "../../components/add-new-advertisement-component/advertisement-modal";

export const NewAdvertisement = ({
  user,
  logOut,
  setDeletedPictures,
  deletedPictures,
  refetch,
  setIsModalOpen,
}) => {
  const [isAdvChanging, setIsAdvChanging] = useState(false);
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

  const handlePublishNewAdv = async (e) => {
    e.preventDefault();
    setIsAdvChanging(false);
    if (newAdvTextError || newAdvFileError) {
      throw new Error(" Ошибка загрузки текста объявления");
    }
    try {
      if (titleValue === "" || descriptionValue === "" || priceValue === "") {
        throw new Error(
          "Поля 'Название', 'Описание' и 'Цена' должны быть заполнены",
        );
      } else {
        setNewAdvError(null);
      }
      const response = await addNewAdvertisementText({
        title: titleValue,
        description: descriptionValue,
        price: priceValue,
      })
        .unwrap()
        
          if (selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
             await addNewAdvertisementFiles({
                data: selectedFiles[i],
                id: response.id,
              }).unwrap();
            }
          }
     

      refetch();
      setTitleValue("");
      setDescriptionValue("");
      setPriceValue("");
      setSelectedFiles([]);
      setPreview([]);
      setIsModalOpen(false);
    } catch (error) {
      // console.log(error);
      if (error.status === 422) {
        setNewAdvError("Заполните все текстовые поля");
      } else {
        setNewAdvError(error.error || error.message);
      }
    }
  };

  return (
    <AdvertisementModal
      logOut={logOut}
      user={user}
      title="Новое объявление"
      linkBack={null}
      newAdvError={newAdvError}
      isNewAdvTextLoading={isNewAdvTextLoading}
      handlePublishNewAdv={handlePublishNewAdv}
      isAdvChanging={isAdvChanging}
      setIsModalOpen={setIsModalOpen}
    >
      <AdvertisementText
        setTitleValue={setTitleValue}
        setDescriptionValue={setDescriptionValue}
        setIsAdvChanging={setIsAdvChanging}
      />

      <AdvertisementPictures
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        setPreview={setPreview}
        preview={preview}
        setDeletedPictures={setDeletedPictures}
        deletedPictures={deletedPictures}
        setIsAdvChanging={setIsAdvChanging}
      />

      <AdvertisementPrice
        setPriceValue={setPriceValue}
        priceValue=""
        data={null}
        isLoading={null}
        setIsAdvChanging={setIsAdvChanging}
      />
    </AdvertisementModal>
  );
};
