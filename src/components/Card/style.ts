import styled from 'styled-components';

export const StyledCardContainer = styled.div<{
  width?: number;
  height?: number;
}>`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${({ width, height }) => `
    grid-column: span ${width || 1};
    grid-row: span ${height || 1};
  `}
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    transition: background 0.5s ease-in-out;
  }
  &:hover::after {
    background: rgba(0, 0, 0, 0.48);
  }

  @media (max-width: 2560px) {
    ${({ width, height }) =>
      width === 2 &&
      height === 2 &&
      `
      grid-column: span 2;
      grid-row: span 1;
    `}

    ${({ width, height }) =>
      width === 2 &&
      height === 1 &&
      `
      grid-column: span 2;
      grid-row: span 2;
    `}
    ${({ width }) =>
      width === 1 &&
      `
      grid-column: span 1;
      grid-row: span 1;
    `}
  }

  @media (max-width: 1920px) {
    ${({ width, height }) =>
      width === 2 &&
      height === 2 &&
      `
      grid-column: span 1;
      grid-row: span 1;
    `}
    ${({ width }) =>
      width === 2 &&
      `
      grid-column: span 2;
      grid-row: span 1;
    `}
  
    ${({ height }) =>
      height === 2 &&
      `
      grid-column: span 2;
      grid-row: span 2;
    `}
  }

  @media (max-width: 1780px) {
    ${({ width, height }) =>
      width === 2 &&
      height === 2 &&
      `
      grid-column: span 1;
      grid-row: span 1;
    `}
  }

  @media (max-width: 1440px) {
    ${({ width, height }) =>
      width === 2 &&
      height === 2 &&
      `
      grid-column: span 1;
      grid-row: span 1;
    `}
    ${({ width }) =>
      width === 2 &&
      `
      grid-column: span 2;
      grid-row: span 1;
    `}
    ${({ height }) =>
      height === 2 &&
      `
      grid-column: span 1;
      grid-row: span 2;
    `}
  }

  @media (max-width: 1110px) {
    ${({ width, height }) =>
      width === 2 &&
      height === 2 &&
      `
      grid-column: span 1;
      grid-row: span 1;
    `}
    ${({ width }) =>
      width === 2 &&
      `
      grid-column: span 1;
      grid-row: span 1;
    `}
    ${({ height }) =>
      height === 2 &&
      `
      grid-column: span 1;
      grid-row: span 1;
    `}
  }

  @media (max-width: 360px) {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    width: 328px;
    height: 374px;
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  ${StyledCardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const StyledCardContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 15px;
  color: rgba(255, 255, 255, 1);
`;

export const StyledCardTitle = styled.h2`
  font-size: 1.2em;
  margin: 0 0 10px;
  font-weight: 600;
`;

export const StyledCardDescription = styled.p`
  font-size: 0.9em;
  margin: 0;
  font-weight: 300;
`;

export const StyledCardHref = styled.p`
  margin-top: 10px;
  font-weight: 300;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 3;
  opacity: 0;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  ${StyledCardContainer}:hover & {
    opacity: 1;
  }
`;

export const StyledButtonContext = styled.p`
  margin-top: -5px;
  font-size: 1.2em;
`;
