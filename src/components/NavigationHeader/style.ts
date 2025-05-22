import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { secondary } from '@/colors';

export const StyledNavbarContainer = styled.div`
  width: 100%;
  color: rgba(44, 50, 58, 1);
`;

export const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  width: 56px;
  height: 50px;
  cursor: pointer;
  margin-bottom: 5px;
  transition: 0.5s ease;
  &:hover {
    background-color: ${secondary};
    transition: background-color 0.5s ease;
    border-radius: 5px;
  }
  &:focus {
    background-color: rgba(241, 243, 247, 1);
  }
  @media (max-width: 700px) {
    margin-left: 5px;
  }
`;

export const StyledLogoImage = styled.img`
  height: 21px;
  width: 27px;
  @media (max-width: 700px) {
    width: 24px;
    height: 19px;
  }
`;

export const StyledTitle = styled.div`
  margin-left: 23px;
  font-size: 1.5em;
  color: rgba(44, 50, 58, 1);
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 1em;
    margin-left: 10px;
  }
`;

export const StyledBurger = styled.div`
  background-color: rgba(241, 243, 247, 1);
  padding: 20px;
  font-size: 0.9em;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    color: #dddddd;
  }
`;

export const StyledIconBurger = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(44, 50, 58, 1);
  font-size: 1em;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const StyledFeedButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#ffffff' : '#f1f3f7')};
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9em;
  text-transform: uppercase;
  padding: 20px;
  span {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const StyledContainerMenuItem = styled(Link)`
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 135px;
  color: black;
  text-decoration: none;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
  img {
    padding-right: 20px;
  }
  &:hover {
    background-color: rgba(241, 243, 247, 1);
  }
`;
