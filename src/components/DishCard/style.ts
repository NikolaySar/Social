import styled from 'styled-components';
import { secondary } from '../../colors';

export const StyledDishCardContainer = styled.div`
  width: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 156px;
  height: 200px;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0px 1px 4px 0px rgba(25, 36, 54, 0.08);
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  &:hover {
    background-color: ${secondary};
  }
`;

export const StyledImage = styled.img`
  height: 144px;
  border-radius: 5px 5px 0 0;
  transition: transform 0.8s ease;
  ${StyledDishCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const StyledText = styled.div`
  margin: 15px 20px;
`;
