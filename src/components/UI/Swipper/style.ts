import styled from 'styled-components';
import { gray, lightGray, primary, secondary } from '../../../colors';

interface StyledSwipperContainerProps {
  type: 'tag' | 'dishes' | 'product' | 'file';
}

export const StyledSwipperContainer = styled.div<StyledSwipperContainerProps>`
  position: relative;
  margin: 10px 0;
  width: ${({ type }) => (type === 'tag' ? '100%' : '90vw')};
  overflow: hidden;
`;

export const StyledSwipperSlides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const StyledSwipperSlide = styled.div`
  min-width: fit-content;
`;

export const StyledSwipperItem = styled.div`
  padding: 10px;
  margin: 5px;
  text-align: center;
  background: #ffffff;
  border: 1px solid rgba(193, 199, 210, 1);
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  &:hover {
    background-color: ${secondary};
  }
`;

export const StyledSwipperButton = styled.button<StyledSwipperContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: ${({ type }) => (type === 'tag' ? '72px' : '40px')};
  height: ${({ type }) => (type === 'tag' ? '' : '40px')};
  top: 50%;
  border-radius: ${({ type }) => (type === 'tag' ? '-none' : '50%')};
  transform: translateY(-50%);
  background: none;
  color: #ffffff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: ${primary};
  }
`;

export const StyledPrevButton = styled(StyledSwipperButton)`
  left: ${({ type }) => (type === 'tag' ? '-15px' : '-15px')};
  background: ${({ type }) => {
    if (type === 'tag') {
      return `linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0,
        rgba(255, 255, 255, 1) 70%,
        rgba(255, 255, 255, 0)
      )`;
    } else if (type === 'dishes') {
      return 'rgba(255, 255, 255)';
    } else {
      return 'rgba(250, 250, 250, 1)';
    }
  }};
`;

export const StyledNextButton = styled(StyledSwipperButton)`
  right: ${({ type }) => (type === 'tag' ? '0' : '-15px')};
  background: ${({ type }) => {
    if (type === 'tag') {
      return `linear-gradient(
        270deg,
        rgba(255, 255, 255, 1) 0,
        rgba(255, 255, 255, 1) 70%,
        rgba(255, 255, 255, 0)
      )`;
    } else if (type === 'dishes') {
      return 'rgba(255, 255, 255)';
    } else {
      return 'rgba(250, 250, 250, 1)';
    }
  }};
`;

export const StyledDocumentPreview = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  p {
    font-weight: 700;
    font-size: 18px;
    color: ${gray};
  }

  a {
    color: ${gray};
    display: flex;
  }
`;

export const StyledDocumentPreviewIcon = styled.span`
  background-color: ${lightGray};
  padding: 20px 16px 16px 20px;
  border-radius: 50%;
  aspect-ratio: 1;

  svg {
    color: #ffffff;
    display: inline;
  }
`;

export const StyledDocumentPreviewDownload = styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  a {
    padding: 0;
  }
`;
