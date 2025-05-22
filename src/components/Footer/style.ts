import styled from 'styled-components';
import { secondary } from '../../colors';
import { Link } from 'react-router-dom';

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${secondary};
  height: 90px;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
  }
  @media (max-width: 440px) {
    height: 136px;
  }
`;

export const StyledFooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30vw;
  @media (max-width: 700px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledFooterSocialNets = styled.div`
  img {
    margin-right: 30px;
  }
  @media (max-width: 700px) {
    width: 192px;
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  transition:
    text-decoration 0.4s ease-in-out,
    transform 0.2s ease-in-out;
  }
`;

export const StyledLanguageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLanguage = styled.img``;

export const StyledText = styled.p`
  margin-left: 15px;
`;

export const StyledInfo = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #000000;
  transition:
    text-decoration 0.4s ease-in-out,
    transform 0.2s ease-in-out;
  &:hover {
    text-decoration: underline;
    transform: translateY(-5px);
  }
`;
