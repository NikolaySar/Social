import React from 'react';
import { CircularProgress } from '@mui/material';
import { StyledSpan, StyledWrapper } from './style';

const Loading: React.FC = () => {
  return (
    <StyledWrapper>
      <CircularProgress />
      <StyledSpan>Идёт загрузка...</StyledSpan>
    </StyledWrapper>
  );
};

export default Loading;
