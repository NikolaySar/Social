import { primary } from '@/colors';
import { ButtonBase } from '@mui/material';
import styled from 'styled-components';

export const StyledStrongButton = styled(ButtonBase)`
  font-weight: 700;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  &:hover {
    color: ${primary};
  }
`;
