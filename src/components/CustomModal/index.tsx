import { ReactNode } from 'react';
import Portal from '@components/Portal';
import { StyledCustomModal, StyledModalWrapper } from './style';

const CustomModal = ({ children }: { children: ReactNode }) => {
  return (
    <Portal>
      <StyledModalWrapper>
        <StyledCustomModal>{children}</StyledCustomModal>
      </StyledModalWrapper>
    </Portal>
  );
};

export default CustomModal;
