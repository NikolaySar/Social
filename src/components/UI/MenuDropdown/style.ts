import styled from 'styled-components';
import { gray, primary } from '@/colors';

export const StyledMenuLabel = styled.div`
  display: inline;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 10px;

  p {
    font-weight: 300;
    font-size: 14px;
    color: gray;
    height: 22px;
    display: inline;
  }

  strong {
    font-weight: 300;
    font-size: 18px;
  }
`;

export const StyledMenuIcon = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  padding-right: 10px;
  cursor: pointer;
  right: 5px;
  z-index: -1;
`;

export const StyledMenuDropdown = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 10px;
`;

export const StyledMenuDropdownHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 10px;
  padding: 1rem;

  p {
    font-size: 14px;
    color: ${gray};
  }
`;

export const StyledMenuDropdownFooter = styled.div`
  position: sticky;
  background-color: #ffffff;
  z-index: 1;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-top: 1px solid ${gray};

  button {
    padding: 1rem;
  }

  button:nth-child(1) {
    color: ${gray};
  }

  button:nth-child(2) {
    color: ${primary};
  }
`;

export const DropdownMenuSXStyles = {
  maxHeight: 330,
  width: 250,
  '& .MuiList-root': {
    padding: 0,
  },
  '&::-webkit-scrollbar': {
    width: '0.2em',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: gray,
    borderRadius: '3px',
    outline: 'none',
  },
};
