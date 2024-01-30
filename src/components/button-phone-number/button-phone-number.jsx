import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import * as S from "./button-phone-number.styled"

export const ButtonPhoneNumber = ({ data, isLoading }) => {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false);
    const phoneNumber = data && data.phone;
    const numberArr = phoneNumber && phoneNumber.split(" ");
  
    const phoneArr = numberArr && numberArr.join("").split("");
    
    const firstNumber = phoneArr && phoneArr.slice(0, 1);
    const secondNumbers = phoneArr && phoneArr.slice(1, 4).join("");
    const lastNumbers =phoneArr && phoneArr.slice(4).join("");
    const phoneNumberArr = [firstNumber, secondNumbers, lastNumbers];
    const phoneNumberString = phoneNumberArr.join(" ");
    const closedPhoneNumberArr = [firstNumber, secondNumbers, "XXX", "XX", "XX"].join(" ");
  
    const showSellersPhone = () => {
      if(isPhoneOpen) {
        setIsPhoneOpen(false);
      } else {
        setIsPhoneOpen(true);
      }
    };
    return (
      <S.ArticleButtonBlock>
        {isLoading ? (
          <Skeleton width={240} height={65} />
        ) : (
          <S.ArticleButtonPhone onClick={showSellersPhone}>
            <S.ArticleButtonText>{isPhoneOpen ? "Скрыть телефон" : "Показать телефон"}</S.ArticleButtonText>
            <S.ArticleButtonTextNumbers>
              {isPhoneOpen ? (phoneNumber ? phoneNumberString : "Телефон не указан") : closedPhoneNumberArr}
            </S.ArticleButtonTextNumbers>
          </S.ArticleButtonPhone>
        )}
  
        {/* <S.ArticleButtonRedact>Редактировать</S.ArticleButtonRedact>
      <S.ArticleButtonRemove>
        Снять с публикации
      </S.ArticleButtonRemove> */}
      </S.ArticleButtonBlock>
    );
  };
  