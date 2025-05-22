import { gray, primary } from '@/colors';
import { Checkbox } from '@mui/material';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const StyledTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 4px 0px #19243614;
  padding: 15px 24px;

  @media (max-width: 680px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: left;
  }
`;

export const StyledIdentityButton = styled.button`
  max-width: 244px;
  min-height: 48px;
  padding: 16px 18px;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #c1c7d2;
  cursor: pointer;
  background: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${primary};
    color: #fff;
  }
`;

export const StyledIdentityText = styled.p`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 580px;
  margin: 60px auto;
  padding: 0 10px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 470px) {
    justify-content: none;
    gap: 35px;
  }
`;

export const StyledSpan = styled.span`
  flex-basis: 240px;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: left;
  color: ${gray};

  @media (max-width: 470px) {
    flex-basis: 200px;
    font-size: 14px;
  }
`;

export const StyledAvatarProfile = styled.div`
  display: flex;
  // margin-left: 15vw;
  width: 192px;
  height: 192px;
  border-radius: 50%;
  margin-bottom: 10px;
  position: relative;
  img {
    position: relative;
    top: 10px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    margin-left: 2vw;
    margin-top: 5vh;
    width: 168px;
    height: 168px;
  }

  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 2vh;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    img {
      width: 128px;
      height: 128px;
    }
  }
`;

export const StyledEditAvatar = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${primary};
  }
`;

export const StyledFieldWrapper = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: grid;
  gap: 30px;
`;

export const StyledTitle = styled.h5`
  color: #2c323a;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 25px;
`;

export const StyledCheckbox = styled(Checkbox)`
  & .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
    color: ${primary};
  }
`;

export const StyledReactQuill = styled(ReactQuill)`
  & .ql-container {
    height: 170px;
    max-width: 560px;
  }
`;
