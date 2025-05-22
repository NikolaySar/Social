import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootReduxState } from '@/interfaces';
import { IEditContactInfoProps } from '../EditModalContactInfo/interface';
import message from '@images/message-icon.svg';
import credit from '@images/credit-card.svg';
import phone from '@images/phone.svg';
import profile from '@images/user.svg';
import link from '@images/link.svg';
import close from '@images/close.svg';
import shopping_cart from '@images/shopping-cart.svg';
import {
  StyledModal,
  StyledOverlay,
  StyledFieldContainer,
  StyledTitle,
  StyledSubtitle,
  StyledDescriptionContainer,
  StyledDescription,
  StyledImage,
  StyledText,
  StyledTitleModal,
  StyledDivider,
  StyledClose,
} from './style';

const ContactInfo = ({ isCloseModal, title }: IEditContactInfoProps) => {
  const user = useSelector((state: IRootReduxState) => state.user.user);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCloseModal]);

  const descriptionItems = [
    {
      src: phone,
      alt: 'phone',
      text: user.userInfo.contactInfo?.phone,
      href: '#',
    },
    {
      src: profile,
      alt: 'profile',
      text: (
        <StyledDescription>
          <StyledText>{user.userInfo.contactInfo?.ahubMarketLink}</StyledText>
          <StyledImage src={link} alt="link" />
        </StyledDescription>
      ),
      href: '#',
    },
    {
      src: message,
      alt: 'message',
      text: 'Написать в AHUB Messenger',
      href: '#',
    },
    {
      src: credit,
      alt: 'credit',
      text: 'Реквизиты AHUB Payment',
      href: '#',
    },
    {
      src: shopping_cart,
      alt: 'shopping_cart',
      text: 'AHUB Market. Название магазина',
      href: '#',
    },
  ];

  return (
    <StyledOverlay onClick={isCloseModal}>
      <StyledModal onClick={e => e.stopPropagation()}>
        <StyledFieldContainer>
          <StyledClose onClick={isCloseModal}>
            <img src={close} alt="close" />
          </StyledClose>
          <StyledTitleModal>Контактная информация</StyledTitleModal>
          <StyledDivider />
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>Язык:Русский</StyledSubtitle>
          <StyledDescriptionContainer>
            {descriptionItems.map((item, index) => (
              <StyledDescription key={index}>
                <StyledImage src={item.src} alt={item.alt} />
                <StyledText href={item.href}>{item.text}</StyledText>
              </StyledDescription>
            ))}
          </StyledDescriptionContainer>
        </StyledFieldContainer>
      </StyledModal>
    </StyledOverlay>
  );
};

export default ContactInfo;
