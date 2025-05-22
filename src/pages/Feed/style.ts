import styled from 'styled-components';

export const StyledFeedContainer = styled.div`
  margin: 0 3vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 320px;
  gap: 10px;
  padding: 20px;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSwiperSection = styled.div`
  margin-bottom: 20px;
`;

export const StyledContainerSwipper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const StyledText = styled.h3`
  margin: 20px;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'SF Pro Display', sans-serif;
`;

export const StyledButton = styled.button`
  margin-right: 25px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
