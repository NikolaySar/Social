import styled from 'styled-components';
import { IconButton, TextareaAutosize } from '@mui/material';
import { gray, lightGray, secondary } from '@/colors';

export const StyledLoading = styled.div`
  color: #ffffff;
  margin: auto;
`;

export const StyledPostEditHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${secondary};
  padding: 5px 15px;
  height: 50px;

  h5 {
    font-weight: 600;
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const StyledPostEditAuthor = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 7px 10px 15px;
  column-gap: 10px;

  img {
    width: 40px;
    border-radius: 50%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  p {
    flex: 1;
    font-weight: 600;
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    order: 2;
  }
`;

export const StyledPostEditText = styled(TextareaAutosize)<{ $border: string }>`
  outline: none;
  resize: none;
  border: none;
  padding: 15px;
  font-weight: 300;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: ${props => props.$border || 'none'};

  @media (min-width: 1200px) {
    flex: 1;
    order: 3;
  }
`;

export const StyledPostEditTextError = styled.small`
  color: #ff0000;
  order: 4;
  margin-bottom: 10px;
`;

export const StyledPostEditFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  column-gap: 1rem;
  padding: 10px 15px;
  align-items: center;
  width: inherit;
  position: fixed;
  background-color: #ffffff;
  bottom: 0;
  border-top: 1px solid ${lightGray};

  p {
    color: ${gray};
    font-weight: 700;
    font-size: 14px;
    width: 30px;
    text-align: center;
    flex: 1;
    text-align: end;
  }

  @media (min-width: 1200px) {
    position: relative;
    width: auto;
    order: 4;
  }
`;

export const StyledPostEditCloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 0;
    right: 0;
    margin: 7px;
  }
`;
