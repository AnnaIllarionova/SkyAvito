import { useEffect } from "react";
import * as S from "./search.styled";

export const Search = ({
  setSearchText,
  handleSearchResult,
  setStartSearch,
  searchText,
}) => {
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchTextMob = (e) => {
    setSearchText(e.target.value);
    setStartSearch(true);
  };
  useEffect(() => {
    if (searchText === "") {
      setStartSearch(false);
    }
  }, [searchText]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearchResult();
  };

  return (
    <S.MainSearch className="search">
      <S.SearchLogoLink to="/">
        <S.SearchLogoImg src="./img/logo.png" alt="logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobileLink to="/">
        <S.SearchLogoMobileImg src="./img/logo-mob.png" alt="logo" />
      </S.SearchLogoMobileLink>
      <S.SearchForm onSubmit={handleFormSubmit}>
        <S.SearchText
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          value={searchText}
          onChange={(e) => handleSearchText(e)}
        />
        <S.SearchButton type="submit">Найти</S.SearchButton>
      </S.SearchForm>
      <S.SearchTextMob
        type="search"
        placeholder="Поиск"
        name="search-mob"
        value={searchText}
        onChange={(e) => {
          handleSearchTextMob(e);
        }}
      />
    </S.MainSearch>
  );
};
