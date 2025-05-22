import search from '@images/search.svg';
import {
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchIcon,
} from './style';

const CustomInputSearch = () => {
  return (
    <StyledSearchContainer>
      <StyledSearchIcon src={search} alt="search" />
      <StyledSearchInput placeholder="Поиск..." />
    </StyledSearchContainer>
  );
};

export default CustomInputSearch;
