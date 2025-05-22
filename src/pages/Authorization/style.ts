import styled from 'styled-components';
import { primary } from '../../colors';

export const StyledForm = styled.form`
  gap: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  color: #78808d;
  background: none;
  border: none;
  margin-top: 5px;
  cursor: pointer;
  transition: color 0.5s ease;
  &:hover {
    color: ${primary};
  }
`;
