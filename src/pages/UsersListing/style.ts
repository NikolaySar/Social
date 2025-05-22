import styled from 'styled-components';
import { dark, gray, primary, secondary } from '@/colors';

export const StyledUsersListing = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  padding: 15px;
  color: ${dark};

  @media (min-width: 575px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1440px) {
    max-width: 1200px;
  }

  @media (min-width: 1600px) {
    max-width: 1380px;
  }
`;

export const StyledUsersListingHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: 10px;
`;

export const StyledUsersListingHeading = styled.h4`
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const StyledFiltersButton = styled.div`
  span > span {
    background-color: ${primary};
    color: white;
  }
`;

export const StyledUsersListingResult = styled.p`
  width: 100%;
  font-weight: 300;
`;

export const StyledUsersListingFilters = styled.div<{ $maxHeight: string }>`
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
  transition: all 0.5s ease-in;
  overflow-y: hidden;
  max-height: ${props => props.$maxHeight};
`;

export const StyledUsersListingFiltersChips = styled.div<{
  $maxHeight: string;
}>`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  gap: 5px;
  width: 100%;
  transition: all 0.5s;
  overflow-y: hidden;
  max-height: ${props => props.$maxHeight};
`;

export const StyledFilterChip = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 5px;
  background-color: ${secondary};
  padding: 4px 5px 3px 20px;
  border-radius: 5px;
  font-weight: 300;
  font-size: 18px;

  small {
    font-size: 14px;
    color: ${gray};
  }

  p {
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-bottom: 2px;
    max-width: 150px;
  }
`;

export const StyledUsersListingTable = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
