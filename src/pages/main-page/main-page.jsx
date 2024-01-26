import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import * as S from "./main-page.styled";
import { CardList } from "../../components/card-list/card-list";

export const MainPage = ({
  searchText,
  setSearchText,
  startSearch,
  setStartSearch,
}) => {
  const handleSearchResult = () => {
    setStartSearch(true);
  };

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
          />
        </S.MainContainer>
      </main>
      <Footer />
    </>
  );
};
