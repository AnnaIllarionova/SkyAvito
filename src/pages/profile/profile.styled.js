import styled from "styled-components";
import { device } from "../../components/media-sizes/media-sizes";
//Profile
export const MainCenterBlock = styled.div`
  @media ${device.tablet} {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media ${device.mobile} {
    margin: 0 auto;
    padding: 0 20px;
  }
`;
export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;

  @media ${device.mobile} {
    width: 100%;
    padding: 0 0 40px;
  }
`;
export const ProfileContent = styled.div`
  max-width: 834px;

  @media ${device.tablet} {
    max-width: 834px;
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 1;
  }
`;

export const ProfileTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const MainProfileTitle = styled(Title)`
  margin-bottom: 20px;

  @media ${device.mobile} {
    margin-bottom: 30px;
  }
`;

export const ProfileSettings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

export const SettingsImgBox = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;

  @media ${device.mobile} {
    width: 132px;
    height: 132px;
  }
`;

export const SettingsImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  object-fit: cover;
`;

export const SettingsChangePhoto = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;

export const SettingsRight = styled.div`
  width: 630px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SettingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media ${device.mobile} {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const SettingsBox = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media ${device.mobile} {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const SettingsFormInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    border-radius: 30px;
    padding: 9px 17px;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const SettingsFormInputFirstName = styled(SettingsFormInput)`
  width: 300px;

  @media ${device.mobile} {
    width: 100%;
  }
`;
export const SettingsFormInputLastName = styled(SettingsFormInput)`
  width: 300px;

  @media ${device.mobile} {
    width: 100%;
  }
`;
export const SettingsFormInputCity = styled(SettingsFormInput)`
  width: 300px;

  @media ${device.mobile} {
    width: 100%;
  }
`;
export const SettingsFormInputPhone = styled(SettingsFormInput)`
  width: 614px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SettingsFormLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export const SettingsButton = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: ${(props) => (props.disabled ? "#D9D9D9" : "#009ee4")};
  border-radius: 6px;
  border: 1px solid ${(props) => (props.disabled ? "#D9D9D9" : "#009ee4")};

  &:hover {
    background-color: ${(props) => (!props.disabled ? "#0080c1" : "")};
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;

export const FormFileLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-top: 22px;
  
`;

export const FormFileSpan = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
  vertical-align: middle;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  background-color: #009ee4;
  line-height: 22px;
  height: 40px;
  width: 140px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  margin: 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0080c1;
  }
`;

export const FormFileInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;

export const FormInputSubmit = styled.input`
  height: 40px;
  width: 140px;
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
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.05px;
  color: #ffffff;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const FormFile = styled.form`
  display: flex;
  flex-direction: column;
`;


export const ProfileTitleNoResults = styled.p`
  white-space: nowrap;
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;

  @media ${device.mobile} {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;