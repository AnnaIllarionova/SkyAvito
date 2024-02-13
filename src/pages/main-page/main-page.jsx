import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import * as S from "./main-page.styled";
import { CardList } from "../../components/card-list/card-list";
import { useGetAllAdvertisementsQuery } from "../../services/api-services";
import { Outlet } from "react-router-dom";

export const Layout = ({user, logOut}) => {
  return (
    <>
    <Header user={user} logOut={logOut} />
    <Outlet />
    <Footer user={user} />
    </>
  )
}

export const MainPage = ({
  searchText,
  setSearchText,
  startSearch,
  setStartSearch,
}) => {
  const handleSearchResult = () => {
    setStartSearch(true);
  };
  const { data: allAds, error, isLoading } = useGetAllAdvertisementsQuery();


  return (

      
      <main className="main">
        <Search
          setSearchText={setSearchText}
          handleSearchResult={handleSearchResult}
          setStartSearch={setStartSearch}
        />
        <S.MainContainer>
          <S.MainTitle>Объявления</S.MainTitle>
          <CardList
            searchText={searchText}
            startSearch={startSearch}
            setStartSearch={setStartSearch}
            data={allAds}
            error={error}
            isLoading={isLoading}
          />
        </S.MainContainer>
      </main>
     
    
  );
};
