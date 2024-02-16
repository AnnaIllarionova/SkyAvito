import { Link, useParams } from "react-router-dom";
import { useGetAdvertisementCommentsByIdQuery } from "../../services/api-services";
import * as S from "./reviews.styled";
import Skeleton from "react-loading-skeleton";
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import { useState } from "react";
import { useAddReviewMutation } from "../../services/api-services-reauth";

export const Reviews = ({ user }) => {
  const { advId } = useParams();
  const {
    data: dataComments,
    isLoading: isCommentsLoading,
    error: commentsError,
    refetch: refetchDataComments,
  } = useGetAdvertisementCommentsByIdQuery({
    id: advId,
  });
  const [userReviewValue, setUserReviewValue] = useState("");
  const [addReview, { isLoading: isReviewLoading, error: addReviewError }] =
    useAddReviewMutation();
  const [reviewError, setReviewError] = useState(null);

  const handleSendReview = async () => {
    try {
      if (addReviewError) {
        throw new Error(addReviewError.message);
      }
      await addReview({ id: advId, text: userReviewValue });
      refetchDataComments();
      setUserReviewValue("");
    } catch (error) {
      console.log(error);
      setReviewError(error.message);
    }
  };

  if (commentsError) {
    return <S.CommentsNoResults>{commentsError.error}</S.CommentsNoResults>;
  }

  return (
    <S.ContainerModal>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitleDiv>
            <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
            <Link to={`/advertisement/${advId}`}>
              <S.ModalLinkBack></S.ModalLinkBack>
            </Link>
          </S.ModalTitleDiv>
          <Link to={`/advertisement/${advId}`}>
            <ModalButtonClose />
          </Link>
          <S.ModalScroll>
            {user ? (
              <>
                <S.ModalFormNewArt id="formNewArt" action="#">
                  <S.FormNewArtBlock>
                    <S.FormNewArtLabel htmlFor="text">
                      Добавить отзыв
                    </S.FormNewArtLabel>
                    <S.FormNewArtArea
                      name="text"
                      id="formArea"
                      cols="auto"
                      rows="5"
                      placeholder="Введите отзыв"
                      required
                      value={userReviewValue}
                      onChange={(e) => setUserReviewValue(e.target.value)}
                    ></S.FormNewArtArea>
                  </S.FormNewArtBlock>
                </S.ModalFormNewArt>
                <S.ErrorMessage>{reviewError}</S.ErrorMessage>
                <ModalButton
                  buttonTitle={
                    isReviewLoading ? "Публикуем..." : "Опубликовать"
                  }
                  onClick={handleSendReview}
                  disabled={isReviewLoading}
                />
              </>
            ) : (
              <S.ReviewTitleAuth>
                <S.ReviewTitleAuthLink to="/singin">
                  Авторизуйтесь
                </S.ReviewTitleAuthLink>
                , чтобы оставить отзыв о товаре
              </S.ReviewTitleAuth>
            )}
            <ReviewItems data={dataComments} isLoading={isCommentsLoading} />
          </S.ModalScroll>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ContainerModal>
  );
};

export const ModalButtonClose = () => {
  return (
    <S.ModalButtonClose>
      <S.ModalButtonCloseLine></S.ModalButtonCloseLine>
    </S.ModalButtonClose>
  );
};

export const ModalButton = ({ buttonTitle, onClick, disabled }) => {
  return (
    <S.FormNewArtButtonPub
      id="btnPublish"
      onClick={onClick}
      disabled={disabled}
    >
      {buttonTitle}
    </S.FormNewArtButtonPub>
  );
};

export const ReviewItems = ({ data, isLoading }) => {
  return (
    <S.ModalReviews>
      {data &&
        data.map((comment) => {
          const createDateParse = parseISO(comment.created_on);
          const createDateFormatted = format(createDateParse, "dd MMMM yyyy", {
            locale: ru,
          });
          return (
            <S.ReviewsReview key={comment.id}>
              <S.ReviewItem>
                <S.ReviewLeft>
                  <S.ReviewImgDiv>
                    {isLoading ? (
                      <Skeleton height={40} width={40} />
                    ) : comment.author.avatar ? (
                      <S.ReviewImg
                        src={`http://localhost:8090/${comment.author.avatar}`}
                        alt="avatar"
                      />
                    ) : null}
                  </S.ReviewImgDiv>
                </S.ReviewLeft>
                <S.ReviewRight>
                  {isLoading ? (
                    <Skeleton height={32} width={500} />
                  ) : (
                    <S.ReviewName>
                      {comment.author.name}{" "}
                      <S.ReviewNameSpan>{createDateFormatted}</S.ReviewNameSpan>
                    </S.ReviewName>
                  )}
                  <S.ReviewTitle>Комментарий</S.ReviewTitle>
                  <S.ReviewText>
                    {isLoading ? (
                      <Skeleton height={48} width={500} />
                    ) : (
                      comment.text
                    )}
                  </S.ReviewText>
                </S.ReviewRight>
              </S.ReviewItem>
            </S.ReviewsReview>
          );
        })}
    </S.ModalReviews>
  );
};
