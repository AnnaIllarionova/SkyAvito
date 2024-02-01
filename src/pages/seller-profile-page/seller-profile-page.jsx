import { useParams } from "react-router-dom";
// import { Header } from "../../components/header/header";
import * as S from "./seller-profile-page.styled";
import { Menu } from "../../components/menu/menu";
// import { Footer } from "../../components/footer/footer";
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
}) => {
  const { sellerId } = useParams();
  const { data: allAds, error, isLoading } = useGetAllAdvertisementsQuery();
  console.log("allAds", allAds);
  const sellerAdvertisements =
    allAds &&
    allAds.filter(
      (sellerAdv) => parseInt(sellerAdv.user_id) === parseInt(sellerId),
    );
  console.log("sellerAdvertisements", sellerAdvertisements);

  // const { data, isLoading } = useGetAdvertisementByIdQuery({ id: sellerId });
  // console.log(data);
  const { data: allUsers, isLoading: isAllUsersLoading } =
    useGetAllUsersQuery();
  // console.log("allUsers", allUsers);

  const seller =
    allUsers &&
    allUsers.find((sell) => parseInt(sell.id) === parseInt(sellerId));
  console.log("seller", seller);

  return (
    <main className="main">
      <S.MainContainer>
        <S.MainCenterBlock>
          <Menu />

          <S.MainH2>Профиль продавца</S.MainH2>

          <S.MainProfileSell>
            <S.ProfileSellContent>
              <S.ProfileSellSeller>
                <S.SellerLeft>
                  <S.SellerImgDiv>
                    <a href="" target="_self">
                      {isAllUsersLoading ? (
                        <Skeleton width={170} height={170} />
                      ) : (
                        <S.SellerImg
                          src={`/img/${seller.avatar}`}
                          alt="avatar"
                        />
                      )}
                    </a>
                  </S.SellerImgDiv>
                </S.SellerLeft>
                <S.SellerRight>
                  {isAllUsersLoading ? (
                    <Skeleton width={400} height={40} />
                  ) : (
                    <S.SellerTitle>
                      {seller.name +
                        " " +
                        (seller.surname !== null ? seller.surname : "")}
                    </S.SellerTitle>
                  )}
                  {isAllUsersLoading ? (
                    <Skeleton width={400} height={20} />
                  ) : (
                    <S.SellerCityAndInfo>{seller.city}</S.SellerCityAndInfo>
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
                            src={`/img/${seller.avatar}`}
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
