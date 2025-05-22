import styled from 'styled-components';
import { secondary } from '../../colors';

export const StyledProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 370px;
  margin: 7px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 4px 0px rgba(25, 36, 54, 0.08);
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  &:hover {
    background-color: ${secondary};
  }
`;

export const StyledProductCardImage = styled.img`
  width: 312px;
  height: 228px;
`;

export const StyledProductCardDescriptionContainer = styled.div`
  display: flex;
  margin: 10px;
`;

export const StyledProductCardName = styled.p``;

export const StyledProductCardLocation = styled.div`
  margin-left: 20px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  height: 100px;
`;

export const StyledProductCardText = styled.h4`
  display: flex;
  flex-direction: column;
`;

export const StyledProductCardPrice = styled.h6`
  font-size: 0.85em;
`;
