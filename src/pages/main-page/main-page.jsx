import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import * as S from "./main-page.styled";
import { CardList } from "../../components/card-list/card-list";
import { Outlet } from "react-router-dom";
import { NewAdvertisement } from "../add-new-advertisement/add-new-advertisement";

export const Layout = ({ user, logOut, setIsModalOpen }) => {
  return (
    <>
      <Header user={user} logOut={logOut} setIsModalOpen={setIsModalOpen} />
      <Outlet />
      <Footer user={user} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export const MainPage = ({
  searchText,
  setSearchText,
  startSearch,
  setStartSearch,
  allAds,
  error,
  isLoading,
  isModalOpen,
  user,
  logOut,
  setDeletedPictures,
  deletedPictures,
  refetch,
  setIsModalOpen,
}) => {
  const handleSearchResult = () => {
    setStartSearch(true);
  };

  return (
    <>
      <main className="main">
        <Search
          setSearchText={setSearchText}
          handleSearchResult={handleSearchResult}
          setStartSearch={setStartSearch}
          searchText={searchText}
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
      {isModalOpen ? (
        <NewAdvertisement
          user={user}
          logOut={logOut}
          setDeletedPictures={setDeletedPictures}
          deletedPictures={deletedPictures}
          refetch={refetch}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};
