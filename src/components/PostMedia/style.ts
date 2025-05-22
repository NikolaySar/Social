import styled from 'styled-components';
import { IconButton } from '@mui/material';
import Swipper from '@components/UI/Swipper';
import { gray, secondary } from '@/colors';

export const StyledPostMedia = styled.label<{ $isDisplayed: string }>`
  display: ${props => props.$isDisplayed || 'none'};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${secondary};
  width: 100%;
  min-height: 250px;
  max-height: 350px;
  color: ${gray};
  row-gap: 10px;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    max-height: 50vh;
  }

  @media (min-width: 1200px) {
    width: 45%;
    border-radius: 10px;
    height: 100%;
    order: 1;
  }
`;

export const StyledPostMediaPreviewCarousel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100%;

  img,
  video,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    padding: 0 1px;
  }
`;

export const StyledDocumentPreview = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 18px;
    padding-top: 10px;
  }
`;

export const StyledSwiper = styled(Swipper)<{ $isSwiperOn: boolean }>`
  margin: 0;
  min-width: 100%;

  div {
    min-width: 100%;
    height: 100%;
  }

  button[type='file'] {
    display: ${props => (props.$isSwiperOn ? 'flex' : 'none')};
  }
`;

export const StyledPostMediaUpload = styled.div<{ $isDisplayed?: string }>`
  display: ${props => props.$isDisplayed || 'none'};
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  p {
    width: 100%;
    text-align: center;
    align-self: center;
  }

  p:nth-child(3) {
    font-weight: 700;
    font-size: 14px;
    padding-top: 10px;
  }

  p:nth-child(4) {
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 5px;
  }
`;

export const StyledPostMediaButtons = styled.div<{ $isDisplayed: string }>`
  display: ${props => props.$isDisplayed || 'none'};
  position: absolute;
  bottom: 4px;

  label {
    display: flex;
    cursor: pointer;
    padding: 8px;
  }

  button {
    background-color: ${secondary};
    margin: 4px;
    padding: 0;
    height: fit-content;

    &:hover {
      background-color: rgb(255 255 255);
    }
  }
`;

export const StyledPostMediaCloseButton = styled(IconButton)<{
  $isDisplayed: string;
}>`
  && {
    display: ${props => props.$isDisplayed || 'none'};
    position: absolute;
    margin: 8px;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 50%);

    &:hover {
      background-color: rgba(0, 0, 0, 80%);
    }

    svg {
      color: white;
    }
  }
`;

export const StyledPostMediaCounter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 8px;
  color: #ffffff;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 50%);
  padding: 10px 15px;
`;
