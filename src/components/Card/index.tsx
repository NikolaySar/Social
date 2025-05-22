import { VITE_API_BASE_URL } from '@/config';
import {
  StyledCardContainer,
  StyledCardImage,
  StyledCardContent,
  StyledCardTitle,
  StyledCardDescription,
  StyledCardHref,
  StyledButton,
  StyledButtonContext,
} from './style';

interface CardProps {
  imagePath: string;
  title?: string;
  description: string;
  author?: string;
  width?: number;
  height?: number;
}

const Card: React.FC<CardProps> = ({ imagePath, description, author, width = 1, height = 1 }) => {
  const imagePost = VITE_API_BASE_URL + imagePath;

  const truncateTitle = (str: string) => {
    if (str.length >= 20) {
      return str.substring(0, 20) + '...';
    }
    return str;
  };

  const truncateDescription = (str: string) => {
    if (str.length >= 80) {
      return str.substring(0, 80) + '...';
    }
    return str;
  };

  return (
    <StyledCardContainer width={width} height={height}>
      <StyledCardImage src={imagePost} />
      <StyledCardContent>
        <StyledCardTitle>{truncateTitle(description)}</StyledCardTitle>
        <StyledCardDescription>{truncateDescription(description)}</StyledCardDescription>
        <StyledCardHref>{author}</StyledCardHref>
      </StyledCardContent>
      <StyledButton type="button">
        <StyledButtonContext>...</StyledButtonContext>
      </StyledButton>
    </StyledCardContainer>
  );
};

export default Card;
