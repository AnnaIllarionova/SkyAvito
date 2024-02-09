import { Link } from "react-router-dom";
import * as S from "./footer.styled";

export const Footer = ({ user }) => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <Link to="/">
            <S.Img src="/img/icon_01.png" alt="home" />
          </Link>
        </S.FooterImg>
        {user ? (
         
            <S.FooterImg>
              <Link to="/add-new-advertisement">
                <S.Img src="/img/icon_02.png" alt="new-advertisement" />
              </Link>
            </S.FooterImg> ) : null}
            <S.FooterImg>
              <Link to={user? "/profile" : "/singin"}>
                <S.Img src="/img/icon_03.png" alt="profile" />
              </Link>
            </S.FooterImg>
         
       
      </S.FooterContainer>
    </S.Footer>
  );
};
