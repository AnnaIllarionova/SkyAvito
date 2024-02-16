import { useNavigate, useParams } from "react-router-dom";
import { AdvertisementModal } from "../../components/add-new-advertisement-component/advertisement-modal";
import { AdvertisementPictures } from "../../components/add-new-advertisement-component/advertisement-pictires";
import { AdvertisementPrice } from "../../components/add-new-advertisement-component/advertisement-price";
import { AdvertisementText } from "../../components/add-new-advertisement-component/advertisement-top";
import { useGetAdvertisementByIdQuery } from "../../services/api-services";
import { useState } from "react";
import {
  useAddNewAdvertisementFilesMutation,
  useChangeAdvertisementMutation,
  useDeleteImageInAdvertisementMutation,
} from "../../services/api-services-reauth";

export const ChangeAdvertisement = ({ logOut, user }) => {
  const { advId } = useParams();
  const navigate = useNavigate();
  const {
    data: advData,
    isLoading: advIsLoading,
    refetch,
  } = useGetAdvertisementByIdQuery({ id: advId });
  const [addNewAdvertisementFiles, { error: newAdvFileError }] =
    useAddNewAdvertisementFilesMutation();
  console.log(newAdvFileError);
  const [deleteImageAdvertisement, { error: deleteError }] =
    useDeleteImageInAdvertisementMutation();
  console.log(deleteError);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const [selectedFiles, setSelectedFiles] = useState(advData && [...advData.images]);
  const arrPreview = [];
  const startPreview = Array.from(Array(5));

  advData?.images.forEach((image) => {
    arrPreview.push(`http://localhost:8090/${image.url}`);
  });
  startPreview.splice(0, advData?.images.length, ...arrPreview);

  const [preview, setPreview] = useState(startPreview);
  const [
    changeAdvertisement,
    { isLoading: changeIsLoading, error: changeError },
  ] = useChangeAdvertisementMutation();
  const [changeAdvError, setChangeAdvError] = useState(null);

  const handleChangeImage = async () => {
    if (changeError || newAdvFileError) {
      throw new Error("Ошибка изменения объявления");
    }
    try {
      if (advData.images) {
        for (let i = 0; i < advData.images.length; i++) {
          deleteImageAdvertisement({
            id: advId,
            fileUrl: advData.images[i].url,
          }).unwrap();
        }
      }
      await changeAdvertisement({
        id: advId,
        title: titleValue,
        description: descriptionValue,
        price: priceValue,
      }).unwrap();

      if (selectedFiles) {
        for (let i = 0; i < selectedFiles.length; i++) {
          await addNewAdvertisementFiles({
            data: selectedFiles[i],
            id: advId,
          }).unwrap();
        }
      }

      refetch();
      navigate(`/advertisement/${advId}`);
    } catch (error) {
      console.log("error", error);
      if(error.status === 422) {
        setChangeAdvError("Ошибка загрузки файлов, попробуйте еще раз")
      } else {
        setChangeAdvError(error.message);
      }
    
    }
  };

  if (deleteError && deleteError.status === 400) {
    setChangeAdvError(deleteError.data.detail);
  }

  return (
    <AdvertisementModal
      logOut={logOut}
      user={user}
      title="Редактировать"
      linkBack={`/advertisement/${advId}`}
      newAdvError={changeAdvError}
      isNewAdvTextLoading={changeIsLoading}
      handlePublishNewAdv={handleChangeImage}
    >
      <AdvertisementText
        setTitleValue={setTitleValue}
        setDescriptionValue={setDescriptionValue}
        data={advData}
        titleValue={titleValue}
        descriptionValue={descriptionValue}
        isLoading={advIsLoading}
      />

      <AdvertisementPictures
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        setPreview={setPreview}
        preview={preview}
      />

      <AdvertisementPrice
        setPriceValue={setPriceValue}
        priceValue={priceValue}
        data={advData}
        isLoading={advIsLoading}
      />
    </AdvertisementModal>
  );
};
