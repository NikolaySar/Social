import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary, gray, lightGray, dark, secondary } from '@/colors';

export const StyledUserCard = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 10px;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  row-gap: 20px;
  column-gap: 10px;
  border-bottom: 1px solid ${lightGray};

  @media (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const StyledUserCardIcon = styled.img`
  width: 5rem;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 7rem;
  }
`;

export const StyledUserCardPosts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  column-gap: 10px;
  row-gap: 50px;
  padding: 5px;
  flex: 1;
  overflow-y: hidden;
  height: 75px;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 10px;
  }

  a {
    width: 65px;
    transition: transform 0.2s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    order: 3;
    height: 130px;

    a {
      width: 120px;
    }
  }

  @media (min-width: 1200px) {
    height: 120px;

    a {
      width: 110px;
    }
  }
`;

export const StyledUserCardPost = styled(Link)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: ${dark};
  background-color: ${secondary};
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledUserCardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  gap: 7px;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${primary};
    }
  }

  h5 {
    font-weight: 600;
    font-size: 16px;
    width: fit-content;
    cursor: pointer;
  }

  p {
    font-weight: 300;
  }

  @media (min-width: 768px) {
    flex-basis: min-content;
    padding-left: 20px;
  }
`;

export const StyledUserCardWork = styled.p`
  font-size: 16px;
  width: 100%;
`;

export const StyledUserCardLocation = styled.p`
  font-size: 14px;
  width: 100%;
  color: ${gray};
`;

export const StyledUserCardFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  column-gap: 30px;
  padding: 10px 0;

  div {
    display: flex;
    flex-flow: row nowrap;
    column-gap: 10px;
    align-items: center;
  }
`;

export const StyledUserCardMessage = styled.button`
  cursor: pointer;

  &:hover {
    color: ${primary};
  }
`;

export const StyledUserCardMore = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;
