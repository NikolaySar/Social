import { useEffect } from 'react';
import Portal from '../Portal';
import { socialMediaLinks } from '../../constants';
import { IModalProps } from './interface';
import {
  StyledOverlay,
  StyledModal,
  StyledTitle,
  StyledSuptitle,
  StyledTextButton,
  StyledButtonSubmit,
  StyledWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledButtonWrapper,
  StyledLink,
  StyledLinkText,
  StyledWrapperText,
  StyledButtomBack,
  StyledButtonOpenModal,
  StyledButtonOpenModalText,
  StyledContainer,
} from './style';

const Modal = ({
  children,
  isCloseModal,
  title,
  handleActionButton,
  titleButton,
  onCloseTitle,
  suptitle,
  image,
  disabled,
  link,
  linkText,
  isOpenAnotherModal,
  isOpenAnotherModalText,
}: IModalProps) => {
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

  return (
    <Portal>
      <StyledContainer>
        <StyledOverlay onClick={isCloseModal}>
          {isOpenAnotherModalText && (
            <StyledButtonOpenModal type="button" onClick={isOpenAnotherModal}>
              <StyledButtonOpenModalText>
                {isOpenAnotherModalText}
              </StyledButtonOpenModalText>
            </StyledButtonOpenModal>
          )}
          <StyledModal onClick={e => e.stopPropagation()}>
            <StyledWrapper>
              {image ? (
                <>
                  <StyledWrapper>
                    <StyledImage src={image} alt="" />
                    <StyledTitle>{title}</StyledTitle>
                    <StyledSuptitle>{suptitle}</StyledSuptitle>
                  </StyledWrapper>
                  <StyledImageWrapper>
                    {socialMediaLinks.map(link => (
                      <StyledLink key={link.link} to={link.link}>
                        <img src={link.src} alt={link.alt} />
                      </StyledLink>
                    ))}
                  </StyledImageWrapper>
                </>
              ) : (
                <StyledWrapperText>
                  <StyledTitle>{title}</StyledTitle>
                  <StyledSuptitle>{suptitle}</StyledSuptitle>
                </StyledWrapperText>
              )}
            </StyledWrapper>
            {children}
            <StyledButtonWrapper>
              {onCloseTitle && (
                <StyledButtomBack onClick={isCloseModal}>
                  {onCloseTitle}
                </StyledButtomBack>
              )}
              {linkText && (
                <StyledLink to={link}>
                  <StyledLinkText>{linkText}</StyledLinkText>
                </StyledLink>
              )}
              <StyledButtonSubmit
                variant="contained"
                disabled={disabled}
                onClick={handleActionButton}
                type="submit"
              >
                <StyledTextButton>{titleButton}</StyledTextButton>
              </StyledButtonSubmit>
            </StyledButtonWrapper>
          </StyledModal>
        </StyledOverlay>
      </StyledContainer>
    </Portal>
  );
};

export default Modal;
