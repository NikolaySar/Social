import {
  StyledProductCardContainer,
  StyledProductCardImage,
  StyledProductCardName,
  StyledProductCardText,
  StyledProductCardPrice,
  StyledTextContainer,
  StyledProductCardDescriptionContainer,
  StyledProductCardLocation,
} from './style';

interface ProductCardProps {
  image: string;
  name: string;
  location: string;
  description: string;
  price: string;
}

const ProductCard = ({
  image,
  name,
  location,
  description,
  price,
}: ProductCardProps) => (
  <StyledProductCardContainer>
    <StyledProductCardImage src={image} alt={name} />
    <StyledProductCardDescriptionContainer>
      <StyledProductCardName>{name}</StyledProductCardName>
      <StyledProductCardLocation>{location}</StyledProductCardLocation>
    </StyledProductCardDescriptionContainer>
    <StyledTextContainer>
      <StyledProductCardText>{description}</StyledProductCardText>
      <StyledProductCardPrice>{price}</StyledProductCardPrice>
    </StyledTextContainer>
  </StyledProductCardContainer>
);

export default ProductCard;
