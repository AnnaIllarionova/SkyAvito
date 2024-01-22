import * as S from "./footer.styled";

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <a href="" target="_self">
            <S.Img src="./img/icon_01.png" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg>
          <a href="" target="_self">
            <S.Img src="./img/icon_02.png" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg>
          <a href="" target="_self">
            <S.Img src="./img/icon_03.png" alt="home" />
          </a>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
};
