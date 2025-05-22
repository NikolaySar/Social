import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: rgba(241, 243, 247, 1);
  padding: 5px 10px;
  border-radius: 5px;
  flex-grow: 0.8;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSearchInput = styled.input`
  margin-left: 10px;
  border: none;
  background: none;
  outline: none;
`;

export const StyledSearchIcon = styled.img`
  cursor: pointer;
  font-size: 1em;
  @media (max-width: 768px) {
    display: flex;
  }
`;
