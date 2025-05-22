import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src:
      local('SF Pro Display'),
      url('../public/assets/fonts/SF-Pro-Display-Thin.otf') format('opentype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src:
      local('SF Pro Display'),
      url('../public/assets/fonts/SF-Pro-Display-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src:
      local('SF Pro Display'),
      url('../public/assets/fonts/SF-Pro-Display-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src:
      local('SF Pro Display'),
      url('../public/assets/fonts/SF-Pro-Display-Semibold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src:
      local('SF Pro Display'),
      url('../public/assets/fonts/SF-Pro-Display-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SF Pro Display', sans-serif;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  padding-right: 15px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
`;

import { Divider } from '@mui/material';

export const StyledSubtitle = styled.h3`
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 1px;
  color: #2c323a;
`;

export const StyledDivider = styled(Divider)`
  position: relative;
  width: 117%;
  left: -47px;
  @media (max-width: 500px) {
    width: 150%;
    left: -82px;
  }
`;

export default GlobalStyle;
