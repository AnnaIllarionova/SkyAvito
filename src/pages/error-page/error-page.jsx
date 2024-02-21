import { Link } from "react-router-dom";
import * as S from "./error-page.styled";

export const ErrorPage = () => {
  return (
  
      <S.ErrorContent>
        <S.ErrorContainer>
          <S.ErrorNumber>404</S.ErrorNumber>
    
            <S.ErrorTitle>Страница не найдена</S.ErrorTitle>
          
          <S.ErrorText>
            Возможно, она была удалена
            <br /> или перенесена на другой адрес
          </S.ErrorText>
          <Link to="/" >
          <S.ErrorBtnBackToMain >
           Вернуться на главную
          </S.ErrorBtnBackToMain>
          </Link>
        </S.ErrorContainer>
      </S.ErrorContent>
    
  );
};
