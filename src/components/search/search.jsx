import * as S from "./search.styled";

export const Search = ({ setSearchText, handleSearchResult }) => {
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    handleSearchResult();
  };

  return (
    <S.MainSearch className="search">
      <S.SearchLogoLink to="/" >
        <S.SearchLogoImg src="./img/logo.png" alt="logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobileLink to="/" >
        <S.SearchLogoMobileImg src="./img/logo-mob.png" alt="logo" />
      </S.SearchLogoMobileLink>
      <S.SearchForm  onSubmit={handleFormSubmit}>
        <S.SearchText
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          onChange={handleSearchText}
        />
        <S.SearchTextMob type="search" placeholder="Поиск" name="search-mob" />
        <S.SearchButton type="submit">Найти</S.SearchButton>
      </S.SearchForm>
    </S.MainSearch>
  );
};
