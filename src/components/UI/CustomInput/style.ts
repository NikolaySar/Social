import { inputLabelClasses, TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    transition: all 0.3s;
  }
  & .MuiOutlinedInput-notchedOutline {
    transition: border-color 0.3s ease-in-out;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #16993b;
  }

  .${inputLabelClasses.root} {
    font-family: 'SF Pro Display', sans-serif;
    &.${inputLabelClasses.focused} {
      color: #2c323a;
    }
  }

  &.MuiFormLabel-root {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #2c323a;
  }

  .MuiInputLabel-root {
    transition: transform 0.3s ease-in-out;
  }
`;
