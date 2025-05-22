import { LinearProgress, linearProgressClasses } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const StyledForm = styled.form`
  gap: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const StyledProgressCaption = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  text-align: right;
  color: #78808d;
  margin-top: 7px;
`;

export const StyledLinearProgress = styled(LinearProgress)(({ datatype }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'none',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: 'transparent',
  },
}));

export const StyledLinearWrapper = styled.div`
  animation: ${appearAnimation} 0.7s ease-in-out;
`;
