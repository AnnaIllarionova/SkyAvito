import { Link, useParams } from "react-router-dom";
import { useGetAdvertisementCommentsByIdQuery } from "../../services/api-services";
import * as S from "./reviews.styled";
import Skeleton from "react-loading-skeleton";
import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

export const Reviews = () => {
  const { advId } = useParams();
  console.log(advId);
  const { data: dataComments, isLoading: isCommentsLoading } =
    useGetAdvertisementCommentsByIdQuery({
      id: advId,
    });
  console.log(dataComments);

  return (
    <S.ContainerModal>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
          <Link to={`/advertisement/${advId}`}>
            <ModalButtonClose />
          </Link>
          <S.ModalScroll>
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
                ></S.FormNewArtArea>
              </S.FormNewArtBlock>
            </S.ModalFormNewArt>
            <ModalButton buttonTitle="Опубликовать" />
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

export const ModalButton = ({ buttonTitle }) => {
  return (
    <S.FormNewArtButtonPub id="btnPublish">{buttonTitle}</S.FormNewArtButtonPub>
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
                    ) : (
                      <S.ReviewImg
                        src={`/img/${comment.author.avatar}`}
                        alt="avatar"
                      />
                    )}
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
