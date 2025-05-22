import { primary } from '@/colors';
import styled from 'styled-components';

export const StyledPrimaryButton = styled.div`
  border: 1px solid ${primary};
  background-color: ${primary};
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: ${primary};
  }
`;
