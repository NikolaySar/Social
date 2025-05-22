import { primary } from '@/colors';
import { Button } from '@mui/material';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 35px 48px;
  min-width: 650px;
  border-radius: 30px;
  box-shadow: 8px 16px 40px 0px #19243624;
  z-index: 1001;
  overflow: scroll;
  max-height: 900px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`;

export const StyledTitle = styled.h2`
  color: #2c323a;
  font-size: 22px;
  letter-spacing: 1px;
  @media (max-width: 500px) {
    padding: 0 110px;
  }
`;

export const StyledSubtitle = styled.p`
  margin-top: -20px;
  color: #78808d;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
`;

export const StyledFieldContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 30px;

  @media (max-width: 500px) {
    padding: 0 110px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledCancelButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  color: #2c323a;
  border: none;
  border-radius: 5px;
  background: none;
  font-family: 'SF Pro Display', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;

export const StyledButtonSubmit = styled(Button)`
  && {
    min-width: 143px;
    height: 48px;
    padding: 16px 18px;
    font-weight: 700;
    background-color: #16993b;
    font-family: 'SF Pro Display', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #dbdbd9;
      color: #2c323a;
    }
  }
`;

export const StyledOtherButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  color: #2c323a;
  border: 1px solid #c1c7d2;
  padding: 16px 18px;
  margin-left: auto;
  margin-right: 20px;
  border-radius: 5px;
  background: none;
  font-family: 'SF Pro Display', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;

export const StyledContent = styled.div`
  .cropper-bg {
    background: none;
  }
  .cropper-crop-box,
  .cropper-view-box {
    border-color: #000;
    background-color: none;
  }
  .cropper-view-box {
    box-shadow: 8px 16px 40px 0px #19243624;
    outline: 0;
  }
  .cropper-line {
    background-color: #c1c7d2;
  }

  .cropper-point {
    display: none;
  }

  .cropper-face {
    display: none;
  }
`;

export const StyledInput = styled.div`
  border: 4px dashed #c1c7d2;
  background: #f1f3f7;
  padding: 108px 108px;
  text-align: center;
`;

export const StyledInputText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  color: #78808d;
`;
export const StyledInputImage = styled.img``;

export const StyledSlider = styled(Slider)`
  cursor: active;
  & .MuiSlider-thumb {
    color: ${primary};
  }
  & .MuiSlider-track {
    color: ${primary};
  }
  & .MuiSlider-rail {
    color: #c1c7d2;
  }
`;

export const StyledSliderContainer = styled.div`
  margin-top: 10px;
  label {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    text-align: left;
    color: #2c323a;
  }
`;

export const StyledCropperContainer = styled.div``;
