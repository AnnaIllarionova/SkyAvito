import { Link, useParams, Outlet } from "react-router-dom";
import {
  useGetAdvertisementByIdQuery,
  useGetAdvertisementCommentsByIdQuery,
} from "../../services/api-services";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";
import * as Styled from "../main-page/main-page.styled";
import * as S from "./advertisement-page.styled";
import { Footer } from "../../components/footer/footer.styled";
import { DateOfAdvertisement } from "../../components/card-list/card-list";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ButtonPhoneNumber } from "../../components/button-phone-number/button-phone-number";

export const Advertisement = () => {
  const { advId } = useParams();
  console.log(advId);
  const { data, isLoading } = useGetAdvertisementByIdQuery({ id: advId });
  console.log(data);

  const { data: dataComments, isLoading: isCommentsLoading } =
    useGetAdvertisementCommentsByIdQuery({
      id: advId,
    });
  console.log(dataComments);
  const dataCommentsLength = dataComments && dataComments.length;
  let commentsCount = "";
  if (dataCommentsLength === 1) {
    commentsCount = dataCommentsLength + " отзыв";
  } else if (dataCommentsLength > 1 && dataCommentsLength <= 4) {
    commentsCount = dataCommentsLength + " отзыва";
  } else if (dataCommentsLength > 4) {
    commentsCount = dataCommentsLength + " отзывов";
  } else {
    commentsCount = "нет отзывов";
  }

  const seller = data && data.user;

  return (
    <>
      <Header />
      <S.Main>
        <Styled.MainContainer>
          <Menu />
        </Styled.MainContainer>

        <S.MainArticle>
          <S.ArticleContent>
            <S.ArticleLeft>
              <S.ArticleFillImg>
                {isLoading ? (
                  <Skeleton width={480} height={480} />
                ) : (
                  <S.ArticleImgBox>
                    {data.images.length > 0 ? (
                      <S.ArticleImg
                        src={`/img/${data.images[0]?.url}`}
                        alt="article-img"
                      />
                    ) : null}
                  </S.ArticleImgBox>
                )}

                <ArticleImages data={data} isLoading={isLoading} />
                <S.ArticleImgBarMob>
                  <S.ImgBarMobCircleActive></S.ImgBarMobCircleActive>
                  <S.ImgBarMobCircle></S.ImgBarMobCircle>
                  <S.ImgBarMobCircle></S.ImgBarMobCircle>
                  <S.ImgBarMobCircle></S.ImgBarMobCircle>
                  <S.ImgBarMobCircle></S.ImgBarMobCircle>
                </S.ArticleImgBarMob>
              </S.ArticleFillImg>
            </S.ArticleLeft>
            <S.ArticleRight>
              <S.ArticleBlock>
                {isLoading ? (
                  <Skeleton height={46} width={400} />
                ) : (
                  <S.ArticleTitle>{data.title}</S.ArticleTitle>
                )}

                <S.ArticleInfo>
                  {isLoading ? (
                    <Skeleton width={400} />
                  ) : (
                    <DateOfAdvertisement add={data} />
                  )}
                  {isLoading ? (
                    <Skeleton width={400} />
                  ) : (
                    <S.ArticleDateAndCity>
                      {data.user.city}
                    </S.ArticleDateAndCity>
                  )}

                  <S.ArticleLink to="reviews">
                    {isCommentsLoading ? (
                      <Skeleton width={400} />
                    ) : (
                      commentsCount
                    )}
                  </S.ArticleLink>
                </S.ArticleInfo>
                {isLoading ? (
                  <Skeleton height={39} width={400} />
                ) : (
                  <S.ArticlePrice>{data.price + "₽"}</S.ArticlePrice>
                )}

                <ButtonPhoneNumber data={seller} isLoading={isLoading} />

                <S.ArticleAuthor>
                  {isLoading ? (
                    <Skeleton circle height={40} width={40} />
                  ) : (
                    <S.AuthorImg>
                      <S.AuthorImgPicture
                        src={`/img/${data.user.avatar}`}
                        alt="user-avatar"
                      />
                    </S.AuthorImg>
                  )}

                  <S.AuthorCont>
                    {isLoading ? (
                      <Skeleton height={18} width={400} />
                    ) : (
                      <Link to={`/seller-profile/${data.user_id}`}>
                        <S.AuthorName>{data.user.name}</S.AuthorName>
                      </Link>
                    )}

                    <StartSelling data={seller} isLoading={isLoading} />
                  </S.AuthorCont>
                </S.ArticleAuthor>
              </S.ArticleBlock>
            </S.ArticleRight>
          </S.ArticleContent>
        </S.MainArticle>

        <S.MainContainer>
          <S.MainTitle>Описание товара</S.MainTitle>
          {isLoading ? (
            <Skeleton width={500} height={24} />
          ) : (
            <S.MainContent>
              <S.MainText>{data.description}</S.MainText>
            </S.MainContent>
          )}
        </S.MainContainer>
      </S.Main>
      <Footer />
      <Outlet />
    </>
  );
};

export const ArticleImages = ({ data, isLoading }) => {
  const productImagesArr = data && data.images.map((image) => image);
  productImagesArr && productImagesArr.shift();

  return (
    <S.ArticleImgBar>
      {isLoading ? (
        <Skeleton width={88} height={88} />
      ) : productImagesArr.length > 0 ? (
        productImagesArr.map((image, index) => (
          <S.ArticleImgBarDiv key={index}>
            <S.ArticleImgBarDivPicture
              src={image.url ? `/img/${image.url}` : null}
              alt="article-img"
            />
          </S.ArticleImgBarDiv>
        ))
      ) : (
        <S.ArticleImgBarDiv>
          {/* <S.ArticleImgBarDivPicture src="" alt="article-img" /> */}
          <S.MainTextPhoto>Доп. фото отсутствуют</S.MainTextPhoto>
        </S.ArticleImgBarDiv>
      )}
    </S.ArticleImgBar>
  );
};

export const StartSelling = ({ data, isLoading }) => {
  const startDate = data && data.sells_from;

  const startMonthAndYear = startDate
    ? format(startDate, "MMMM yyyy", { locale: ru })
    : "";
  return isLoading ? (
    <Skeleton />
  ) : (
    <S.AuthorAbout>Продает товары с {startMonthAndYear} </S.AuthorAbout>
  );
};
