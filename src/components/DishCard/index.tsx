import {
  StyledDishCardContainer,
  StyledContent,
  StyledImage,
  StyledText,
} from './style';

interface DishCardProps {
  image: string;
  text: string;
}

const DishCard = ({ image, text }: DishCardProps) => (
  <StyledDishCardContainer>
    <StyledContent>
      <StyledImage src={image} alt={text} />
      <StyledText>{text}</StyledText>
    </StyledContent>
  </StyledDishCardContainer>
);

export default DishCard;
