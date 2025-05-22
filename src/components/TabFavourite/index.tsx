import Favourite from '@images/favourite.svg?react';
import Plus from '@images/plus.svg?react';
import {
  StyledTabFavouriteContainer,
  StyledInnerContainer,
  StyledCircle,
  StyledImage,
  StyledDescription,
  StyledButton,
} from './style';

const TabFavourite = () => (
  <StyledTabFavouriteContainer>
    <StyledInnerContainer>
      <StyledCircle>
        <StyledImage>
          <Favourite />
        </StyledImage>
      </StyledCircle>
      <StyledDescription>
        Вы еще не добавили материалы в избранное
      </StyledDescription>
      <StyledButton type="button">
        <Plus />
        Смотреть ленту
      </StyledButton>
    </StyledInnerContainer>
  </StyledTabFavouriteContainer>
);

export default TabFavourite;
