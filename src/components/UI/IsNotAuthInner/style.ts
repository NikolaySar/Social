import styled from 'styled-components';
import { primary } from '../../../colors';

export const StyledNotAuthContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: rgba(44, 50, 58, 1);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: color 0.5s ease;
  &:hover {
    color: ${primary};
  }

  @media (max-width: 968px) {
    font-size: 0.7em;
  }
`;

export const StyledDivider = styled.span`
  margin: 0 10px;
  font-weight: 700;
`;
