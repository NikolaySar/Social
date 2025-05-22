import styled from 'styled-components';

export const StyledPost = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: auto;

  @media (min-width: 1200px) {
    width: 900px;
    height: 400px;
    border-radius: 10px;
    flex-wrap: wrap;
    padding: 2rem;
    box-shadow: 2px 6px 16px 0px rgba(25, 36, 54, 0.1);
  }
`;
