import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import * as S from "./main-page.styled";
import { CardList } from "../../components/card-list/card-list";
import { useGetAllAdvertisementsQuery } from "../../services/api-services";

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
    <>
      <Header />
      <main className="main">
        <Search
          setSearchText={setSearchText}
          handleSearchResult={handleSearchResult}
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
      <Footer />
    </>
  );
};
