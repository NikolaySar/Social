import styled from 'styled-components';
import { primary } from '../../colors';

interface IStyledProfileTabsProps {
  isActive: boolean;
}

export const StyledProfileTabsInner = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  align-items: center;
  color: #2c323a;

  @media (max-width: 1150px) {
    height: 9vh;
  }

  @media (max-width: 768px) {
    height: 6.5vh;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export const StyledProfileTabsContainer = styled.div`
  margin-left: 15vw;
  display: flex;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const StyledProfileTabs = styled.button<IStyledProfileTabsProps>`
  background: none;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9em;
  letter-spacing: 0.5px;
  margin: 0 48px;
  transition: all 0.8s ease-in-out;
  color: ${({ isActive }) => (isActive ? '#0b6d3b' : 'inherit')};
  position: relative;

  &:hover {
    color: #0b6d3b;
  }

  @media (max-width: 1320px) {
    margin-left: 25px;
    margin-right: 25px;
  }

  @media (max-width: 840px) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 0.7em;
  }

  @media (max-width: 768px) {
    margin-left: 16px;
    margin-right: 16px;
  }

  @media (max-width: 576px) {
    font-size: 0.7em;
    margin-left: 15px;
    margin-right: 15px;
  }

  &::after {
    content: '';
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    bottom: -4.9vh;
    transform: translateX(-16%);
    width: 150%;
    height: 2px;
    background-color: ${primary};

    @media (max-width: 768px) {
      bottom: -2.4vh;
    }

    @media (max-width: 360px) {
      bottom: -2.6vh;
    }
  }
`;
