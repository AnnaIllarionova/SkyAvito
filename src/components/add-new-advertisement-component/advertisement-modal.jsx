import * as S from "../../pages/reviews/reviews.styled";
import * as Styled from "../../pages/add-new-advertisement/add-new-advertisement.styled";
import { Footer } from "../footer/footer";
import { MenuMob } from "../menu/menu";
import { ModalButton, ModalButtonClose } from "../../pages/reviews/reviews";
import { useNavigate } from "react-router-dom";

export const AdvertisementModal = ({
  children,
  user,
  logOut,
  title,
  linkBack,
  newAdvError,
  isNewAdvTextLoading,
  handlePublishNewAdv,
  isAdvChanging,
  setIsModalOpen,
}) => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate(linkBack);
    setIsModalOpen(false);
  };

  return user !== null ? (
    <>
      <S.ContainerModal>
        <MenuMob logOut={logOut} user={user} />
        <S.ModalBlock>
          <S.ModalContentAdv>
            <S.ModalTitleDiv>
              <S.ModalTitle>{title}</S.ModalTitle>
              <S.ModalLinkBack onClick={handleCloseModal}></S.ModalLinkBack>
            </S.ModalTitleDiv>

            <ModalButtonClose onClick={handleCloseModal} />
            <S.ModalFormNewArtAdv id="formNewArt" action="#">
              {children}

              {newAdvError && !isAdvChanging ? (
                <Styled.ErrorText>{newAdvError}</Styled.ErrorText>
              ) : null}

              <ModalButton
                buttonTitle={
                  isNewAdvTextLoading ? "Публикуем..." : "Опубликовать"
                }
                onClick={(e) => handlePublishNewAdv(e)}
                disabled={isNewAdvTextLoading || !isAdvChanging}
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
