import { useNavigate, useParams } from "react-router-dom";
import { AdvertisementModal } from "../../components/add-new-advertisement-component/advertisement-modal";
import { AdvertisementPictures } from "../../components/add-new-advertisement-component/advertisement-pictires";
import { AdvertisementPrice } from "../../components/add-new-advertisement-component/advertisement-price";
import { AdvertisementText } from "../../components/add-new-advertisement-component/advertisement-top";
import { useGetAdvertisementByIdQuery } from "../../services/api-services";
import { useEffect, useState } from "react";
import {
  useAddNewAdvertisementFilesMutation,
  useChangeAdvertisementMutation,
  useDeleteImageInAdvertisementMutation,
} from "../../services/api-services-reauth";

export const ChangeAdvertisement = ({
  logOut,
  user,
  setDeletedPictures,
  deletedPictures,
}) => {
  const { advId } = useParams();
  const navigate = useNavigate();
  const {
    data: advData,
    isLoading: advIsLoading,
    refetch,
  } = useGetAdvertisementByIdQuery({ id: advId });
  const [addNewAdvertisementFiles, { error: newAdvFileError }] =
    useAddNewAdvertisementFilesMutation();
  const [deleteImageAdvertisement, { error: deleteError }] =
    useDeleteImageInAdvertisementMutation();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const [selectedFiles, setSelectedFiles] = useState(
    advData && [...advData.images],
  );
  
  const [newSelectedPictures, setNewSelectedPictures] = useState([]);

  const deletedArr =
    deletedPictures &&
    deletedPictures.filter((file) => advData.images.includes(file));
  useEffect(() => {
    if (selectedFiles) {
      const newSelectedArr = selectedFiles.filter(
        (file) => !advData.images.includes(file),
      );
      setNewSelectedPictures(newSelectedArr);
    }

    if (deleteError?.status === 400) {
      setChangeAdvError(deleteError.data.detail);
    } else if (deleteError?.status === 401) {
      setChangeAdvError("Пройзошел сбой, попробуйте еще раз");
    }
  }, [advData, selectedFiles, deleteError]);
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
      if (deletedArr) {
        for (let i = 0; i < deletedArr.length; i++) {
          deleteImageAdvertisement({
            id: advId,
            fileUrl: deletedArr[i].url,
          }).unwrap();
        }
      }
      await changeAdvertisement({
        id: advId,
        title: titleValue,
        description: descriptionValue,
        price: priceValue,
      }).unwrap();

      if (newSelectedPictures) {
        for (let i = 0; i < newSelectedPictures.length; i++) {
          await addNewAdvertisementFiles({
            data: newSelectedPictures[i],
            id: advId,
          }).unwrap();
        }
      }

      refetch();
      navigate(`/advertisement/${advId}`);
    } catch (error) {
      console.log("error", error);
      if (error.status === 422) {
        setChangeAdvError("Ошибка загрузки файлов, попробуйте еще раз");
      } else {
        setChangeAdvError(error.message);
      }
    }
  };

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
        setDeletedPictures={setDeletedPictures}
        deletedPictures={deletedPictures}
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
