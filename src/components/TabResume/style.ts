import styled from 'styled-components';

export const StyledResumeContainer = styled.div`
  position: relative;
  margin-left: 15vw;
  display: flex;
  flex-direction: column;
  color: #2c323a;

  @media (max-width: 1000px) {
    margin-left: 2vh;
  }
`;

export const StyledEditButton = styled.button`
  position: absolute;
  right: 200px;
  top: 30px;
  width: 229px;
  height: 48px;
  padding: 16px 18px;
  border-radius: 5px;
  border: 1px solid #c1c7d2;
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 1000px) {
    right: 20px;
  }

  @media (max-width: 400px) {
    position: relative;
    left: 0;
  }
`;

export const StyledSection = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 360px) {
    margin-top: 5vh;
  }
`;

export const StyledSectionTitle = styled.h2`
  font-size: 1.25em;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const StyledEmptyField = styled.p`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 24px 19px;
  width: 50vw;
  border: 2px dashed #c1c7d2;
  border-radius: 10px;
  margin-bottom: 3vh;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #2c323a;
`;

export const StyledDescriptionTitle = styled.h4`
  font-weight: 600;
  letter-spacing: 1px;
  margin: 10px;
`;

export const StyledDescriptionText = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 10px;
`;

export const StyledLanguage = styled.p`
  display: flex;
  margin: 10px;
  font-weight: 600;
`;
