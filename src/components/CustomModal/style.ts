import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: transparent;
  backdrop-filter: brightness(50%) blur(10px);
`;

export const StyledCustomModal = styled.section`
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
`;
