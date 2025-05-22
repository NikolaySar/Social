import { dark, primary } from '@/colors';
import styled from 'styled-components';

export const StyledCardButtonSubscribed = styled.div`
  cursor: pointer;
  width: 145px;

  button {
    color: ${primary};
  }
`;

export const StyledCardButtonUnsubscribed = styled.div`
  color: ${dark};

  button {
    &:hover {
      color: ${primary};
    }
  }
`;
