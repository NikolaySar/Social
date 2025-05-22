import { useForm } from 'react-hook-form';
import { TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import useAction from '@/hooks/useAction';
import close from '@images/close.svg';
import { validationEditAboutMeSchema } from '@/helpers/validation';
import { IUserInfo } from '@/interfaces';
import Portal from '../Portal';
import CustomInput from '../UI/CustomInput';
import { IEditModalAboutMeProps } from './interface';
import {
  StyledButtonContainer,
  StyledButtonSubmit,
  StyledCancelButton,
  StyledClose,
  StyledFieldContainer,
  StyledModal,
  StyledOverlay,
  StyledTitleModal,
  StyledWpapper,
} from './style';

const EditModalAboutMe = ({
  isCloseModal,
  title,
  value,
  onChange,
  characterCount,
  titleButton,
  onCloseTitle,
}: IEditModalAboutMeProps) => {
  const methods = useForm<IUserInfo>({
    resolver: yupResolver(validationEditAboutMeSchema),
    defaultValues: {
      aboutMe: value,
    },
    mode: 'onChange',
  });

  const {
    register,
    handleSubmit: handleFormSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const { editUser } = useAction();

  const onSubmit = async ({ aboutMe }: IUserInfo) => {
    try {
      const trimmedAboutMe = aboutMe?.trim();
      editUser({ aboutMe: trimmedAboutMe } as IUserInfo);
      isCloseModal();
    } catch (error) {
      console.error('Ошибка при редактировании контактной информации:', error);
    }
  };

  return (
    <Portal>
      <StyledOverlay onClick={isCloseModal}>
        <StyledModal onClick={e => e.stopPropagation()}>
          <StyledFieldContainer>
            <StyledClose onClick={isCloseModal}>
              <img src={close} alt="close" />
            </StyledClose>
            <StyledTitleModal>Редактировать {title}</StyledTitleModal>
            <CustomInput
              name="aboutMe"
              value={value}
              register={register}
              onChange={onChange}
              type="text"
              label="Enter text"
              error={errors}
              InputProps={{
                maxLength: 500,
                multiline: true,
                rows: 6,
              }}
            />
            <StyledButtonContainer>
              <StyledCancelButton type="button" onClick={isCloseModal}>
                {onCloseTitle}
              </StyledCancelButton>
              <StyledWpapper>
                <Typography variant="body2">{characterCount}</Typography>
                <StyledButtonSubmit
                  type="button"
                  onClick={handleFormSubmit(onSubmit)}
                >
                  {titleButton}
                </StyledButtonSubmit>
              </StyledWpapper>
            </StyledButtonContainer>
          </StyledFieldContainer>
        </StyledModal>
      </StyledOverlay>
    </Portal>
  );
};

export default EditModalAboutMe;
