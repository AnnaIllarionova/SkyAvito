import * as S from "./search.styled";

export const Search = () => {
  return (
    <S.MainSearch className="search">
      <S.SearchLogoLink to="/" target="_blank">
        <S.SearchLogoImg src="./img/logo.png" alt="logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobileLink to="/" target="_blank">
        <S.SearchLogoMobileImg src="./img/logo-mob.png" alt="logo" />
      </S.SearchLogoMobileLink>
      <S.SearchForm action="#">
        <S.SearchText
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <S.SearchTextMob type="search" placeholder="Поиск" name="search-mob" />
        <S.SearchButton>Найти</S.SearchButton>
      </S.SearchForm>
    </S.MainSearch>
  );
};
