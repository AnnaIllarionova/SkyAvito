import { Link } from "react-router-dom";
import styled from "styled-components";

// export const = styled.div``;

export const ContainerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 2;
    left: calc(50% - (320px / 2));
    top: 55px;
    opacity: 1;
  }
`;

export const ModalBlockSingup = styled(ModalBlock)`
  top: calc(50% - (711px / 2));
`;

export const ModalFormLogin = styled.div`
  width: 366px;
  min-height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 47px 47px 40px;

  @media (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`;

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;

  @media (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  }
`;

export const ModalLogoImg = styled.img`
  width: 140px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
    height: auto;
  }
`;

export const ModalInputBlock = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 38px;
`;

export const ModalInput = styled.input`
  width: 278px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  @media (max-width: 768px) {
    width: 278px;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: red;
`;

export const ModalButtonEnter = styled.input`
  width: 278px;
  height: 52px;
  background-color: #009ee4;
  border-radius: 6px;
  margin-top: 22px;
  margin-bottom: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: ${(props) => props.disabled ? "#b3b3b3" : "#ffffff"} ;

  &:hover {
    background-color: #0080c1;
  }

  &:active {
    background-color: #0080c1;
  }

  @media (max-width: 768px) {
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    border: none;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ModalButtonEnterLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ModalButtonSingup = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }

  @media (max-width: 768px) {
    height: 46px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ModalButtonSingupLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
