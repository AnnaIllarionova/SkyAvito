import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./seller-profile-page.styled";
import { Menu } from "../../components/menu/menu";
import { ButtonPhoneNumber } from "../../components/button-phone-number/button-phone-number";
import { StartSelling } from "../advertisement-page/advertisement-page";
import {
  useGetAllAdvertisementsQuery,
  useGetAllUsersQuery,
} from "../../services/api-services";
import Skeleton from "react-loading-skeleton";
import { CardList } from "../../components/card-list/card-list";

export const SellerProfilePage = ({
  searchText,
  startSearch,
  setStartSearch,
  logOut,
  user,
}) => {
  const { sellerId } = useParams();
  const { data: allAds, error, isLoading } = useGetAllAdvertisementsQuery();
  const sellerAdvertisements =
    allAds &&
    allAds.filter(
      (sellerAdv) => parseInt(sellerAdv.user_id) === parseInt(sellerId),
    );

  const {
    data: allUsers,
    isLoading: isAllUsersLoading,
    error: allUsersError,
  } = useGetAllUsersQuery();

  const seller =
    allUsers &&
    allUsers.find((sell) => parseInt(sell.id) === parseInt(sellerId));
  const navigate = useNavigate();

    if (allUsers && seller === undefined) {
      navigate("/*");
    }

  if (allUsersError) {
    return <S.UsersTitleNoResults>Что-то пошло не так...Попробуйте еще раз</S.UsersTitleNoResults>;
  }

  return (
    <main className="main">
      <S.MainContainer>
        <S.MainCenterBlock>
          <Menu logOut={logOut} user={user} />
          <S.SellerTitleDiv>
            <S.MainH2>Профиль продавца</S.MainH2>
            <Link to="/">
              <S.LinkBack></S.LinkBack>
            </Link>
          </S.SellerTitleDiv>

          <S.MainProfileSell>
            <S.ProfileSellContent>
              <S.ProfileSellSeller>
                <S.SellerLeft>
                  <S.SellerImgDiv>
                    <a href="" target="_self">
                      {isAllUsersLoading ? (
                        <Skeleton width={170} height={170} />
                      ) : seller?.avatar ? (
                        <S.SellerImg
                          src={`http://localhost:8090/${seller.avatar}`}
                          alt="avatar"
                        />
                      ) : null}
                    </a>
                  </S.SellerImgDiv>
                </S.SellerLeft>
                <S.SellerRight>
                  {isAllUsersLoading ? (
                    <Skeleton width={400} height={40} />
                  ) : (
                    <S.SellerTitle>
                      {seller?.name +
                        " " +
                        (seller?.surname !== null ? seller?.surname : "")}
                    </S.SellerTitle>
                  )}
                  {isAllUsersLoading ? (
                    <Skeleton width={400} height={20} />
                  ) : (
                    <S.SellerCityAndInfo>{seller?.city}</S.SellerCityAndInfo>
                  )}
                  {isAllUsersLoading ? (
                    <Skeleton width={400} height={20} />
                  ) : (
                    <StartSelling data={seller} isLoading={isAllUsersLoading} />
                  )}

                  <S.SellerImgMobBlock>
                    <S.SellerImgMobDiv>
                      <a href="" target="_self">
                        {isAllUsersLoading ? (
                          <Skeleton />
                        ) : (
                          <S.SellerImgMob
                            src={`http://localhost:8090/${seller?.avatar}`}
                            alt="avatar"
                          />
                        )}
                      </a>
                    </S.SellerImgMobDiv>
                  </S.SellerImgMobBlock>

                  <ButtonPhoneNumber
                    data={seller}
                    isLoading={isAllUsersLoading}
                  />
                </S.SellerRight>
              </S.ProfileSellSeller>
            </S.ProfileSellContent>
          </S.MainProfileSell>

          <S.MainTitle>Товары продавца</S.MainTitle>
        </S.MainCenterBlock>
        <CardList
          searchText={searchText}
          startSearch={startSearch}
          setStartSearch={setStartSearch}
          data={sellerAdvertisements}
          error={error}
          isLoading={isLoading}
        />
      </S.MainContainer>
    </main>
  );
};
