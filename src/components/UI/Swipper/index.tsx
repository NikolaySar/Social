import { useState, useEffect, useRef, memo } from 'react';
import {
  CloudDownloadOutlined,
  InsertDriveFileOutlined,
} from '@mui/icons-material';
import prev from '@images/chevron-left.svg';
import next from '@images/chevron-right.svg';
import DishCard from '../../DishCard';
import ProductCard from '../../ProductCard';
import { ITagData, IDishData, IProductData, ISwipperProps } from './interface';
import {
  StyledSwipperContainer,
  StyledSwipperSlides,
  StyledSwipperSlide,
  StyledSwipperItem,
  StyledPrevButton,
  StyledNextButton,
  StyledDocumentPreview,
  StyledDocumentPreviewIcon,
  StyledDocumentPreviewDownload,
} from './style';
import { IconButton } from '@mui/material';

const itemComponents: { [key: string]: React.FC<any> } = {
  tag: ({ tag }: ITagData) => <StyledSwipperItem>{tag}</StyledSwipperItem>,

  dishes: ({ image, text }: IDishData) => (
    <DishCard image={image} text={text} />
  ),

  product: ({ image, name, description, location, price }: IProductData) => (
    <ProductCard
      image={image}
      name={name}
      description={description}
      location={location}
      price={price}
    />
  ),

  file: ({ filePath, type, name }) => {
    switch (type) {
      case 'image':
        return <img src={filePath} alt="file" />;
      case 'video':
        return <video autoPlay loop src={filePath} muted></video>;
      case 'document':
        return (
          <StyledDocumentPreview>
            <StyledDocumentPreviewIcon>
              <InsertDriveFileOutlined fontSize="large" />
            </StyledDocumentPreviewIcon>
            <StyledDocumentPreviewDownload>
              <IconButton>
                <a href={filePath} download={name}>
                  <CloudDownloadOutlined />
                </a>
              </IconButton>
              <p>{name}</p>
            </StyledDocumentPreviewDownload>
          </StyledDocumentPreview>
        );
    }
  },
};

const Swipper: React.FC<ISwipperProps> = ({
  type,
  data,
  scrollArea = 25,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = useRef<HTMLDivElement | null>(null);
  const Component = itemComponents[type];
  const duplicatedData = [...data, ...data, ...data, ...data];

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? duplicatedData.length / 4 - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === duplicatedData.length / 4 - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentIndex * scrollArea}%)`;
    }
  }, [currentIndex]);

  return (
    <StyledSwipperContainer type={type} className={className}>
      <StyledPrevButton onClick={handlePrev} type={type}>
        <img src={prev} alt="prev" />
      </StyledPrevButton>
      <StyledSwipperSlides ref={slidesRef}>
        {duplicatedData.map((item, index) => {
          return (
            <StyledSwipperSlide key={index}>
              <Component {...item} />
            </StyledSwipperSlide>
          );
        })}
      </StyledSwipperSlides>
      <StyledNextButton onClick={handleNext} type={type}>
        <img src={next} alt="next" />
      </StyledNextButton>
    </StyledSwipperContainer>
  );
};

export default memo(Swipper);
