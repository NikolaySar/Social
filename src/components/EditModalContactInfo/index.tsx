import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import useAction from '@/hooks/useAction';
import { yupResolver } from '@hookform/resolvers/yup';
import { IEditContactInfoProps } from './interface';
import CustomInput from '../UI/CustomInput';
import { IRootReduxState, IUserInfo } from '@/interfaces';
import { validationEditContactInfoSchema } from '@/helpers/validation';
import message from '@images/message-icon.svg';
import credit from '@images/credit-card.svg';
import close from '@images/close.svg';
import {
  StyledButtonSubmit,
  StyledCancelButton,
  StyledModal,
  StyledOverlay,
  StyledFieldContainer,
  StyledTitle,
  StyledInputContainer,
  StyledButtonContainer,
  StyledDescription,
  StyledImage,
  StyledText,
  StyledTitleModal,
  StyledDivider,
  StyledClose,
} from './style';

const EditModalContactInfo = ({
  isCloseModal,
  title,
  titleButton,
  onCloseTitle,
}: IEditContactInfoProps) => {
  const user = useSelector((state: IRootReduxState) => state.user.user);
  const { editUser } = useAction();

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

  const methods = useForm<IUserInfo>({
    resolver: yupResolver(validationEditContactInfoSchema),
    defaultValues: {
      contactInfo: {
        phone: '',
        ahubMarketLink: '',
      },
    },
    mode: 'onChange',
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (user) {
      setValue('contactInfo.phone', user.userInfo.contactInfo?.phone);
      setValue(
        'contactInfo.ahubMarketLink',
        user.userInfo.contactInfo?.ahubMarketLink
      );
    }
  }, [user, setValue]);

  const onSubmit = (data: IUserInfo) => {
    try {
      const updatedUserData: IUserInfo = {
        ...user,
        contactInfo: data.contactInfo,
      };
      editUser(updatedUserData);
      isCloseModal();
    } catch (error) {
      console.error('Ошибка при редактировании контактной информации:', error);
    }
  };

  return (
    <StyledOverlay onClick={isCloseModal}>
      <StyledModal onClick={e => e.stopPropagation()}>
        <StyledFieldContainer>
          <StyledClose onClick={isCloseModal}>
            <img src={close} alt="close" />
          </StyledClose>
          <StyledTitle>{title}</StyledTitle>
          <StyledTitleModal>Контактная информация</StyledTitleModal>
          <StyledInputContainer>
            <CustomInput
              name="contactInfo.phone"
              type="text"
              label="Телефон"
              register={register}
              error={errors}
            />
            <CustomInput
              name="contactInfo.ahubMarketLink"
              type="text"
              label="Ссылка на AHUB Market"
              register={register}
              error={errors}
            />
            <StyledDescription>
              <StyledImage src={message} alt="message"></StyledImage>
              <StyledText href="#">AHUB Messenger</StyledText>
            </StyledDescription>
            <StyledDescription>
              <StyledImage src={credit} alt="credit"></StyledImage>
              <StyledText href="#">AHUB Bank</StyledText>
            </StyledDescription>
          </StyledInputContainer>
          <StyledDivider />
          <StyledButtonContainer>
            <StyledCancelButton type="button" onClick={isCloseModal}>
              {onCloseTitle}
            </StyledCancelButton>
            <StyledButtonSubmit type="button" onClick={handleSubmit(onSubmit)}>
              {titleButton}
            </StyledButtonSubmit>
          </StyledButtonContainer>
        </StyledFieldContainer>
      </StyledModal>
    </StyledOverlay>
  );
};

export default EditModalContactInfo;
