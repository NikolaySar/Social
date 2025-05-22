import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { FormControlLabel, RadioGroup, SelectChangeEvent } from '@mui/material';
import { validationEditUserShema } from '@/helpers/validation';
import Portal from '../Portal';
import CustomInput from '../UI/CustomInput';
import MenuDropdown from '../UI/MenuDropdown';
import LastWorkInput from '../LastWorkInput';
import EducationInput from '../EducationInput';
import LocationInput from '../LocationInput';
import ProfileLInkInput from '../ProfileLinkInput';
import { inputFields } from '@/constants/inputFields';
import { languages } from '@/constants/filtersData';
import { genderOptions } from '@/constants/genderOptions';
import { defaultUserFormFalues } from '@/constants/profile';
import { IEditFormValue, IRootReduxState } from '@/interfaces';
import { IUserEditModalProps } from './interface';
import { editUser, getUser } from '@/store/action-creators/user';
import { AppDispatch } from '@/store';
import {
  StyledModal,
  StyledOverlay,
  StyledTitle,
  StyledFieldContainer,
  StyledSubtitle,
  StyledDivider,
  StyledButtonContainer,
  StyledButtonSubmit,
  StyledCancelButton,
  StyledContainerGender,
  StyledRadio,
} from './style';
import AddressMap from '../UI/AdressMap';

const UserEditModal = ({ isCloseModal, title, titleButton, onCloseTitle }: IUserEditModalProps) => {
  const user = useSelector((state: IRootReduxState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  const [language, setLanguage] = useState<string[] | undefined>(user.userInfo.languages);

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

  const methods = useForm<IEditFormValue>({
    resolver: yupResolver(validationEditUserShema),
    defaultValues: defaultUserFormFalues,
    mode: 'onChange',
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (user) {
      const fieldsToUpdate = [
        { field: 'firstName', value: user.firstName },
        { field: 'lastName', value: user.lastName },
        {
          field: 'bornDate',
          value: user.userInfo.bornDate || '',
        },
        {
          field: 'lastWork.company',
          value: user.userInfo?.lastWork?.company || '',
        },
        {
          field: 'lastWork.title',
          value: user.userInfo?.lastWork?.title || '',
        },
        {
          field: 'education.institution',
          value: user.userInfo?.education?.institution || '',
        },
        {
          field: 'education.specialization',
          value: user.userInfo?.education?.specialization || '',
        },
        { field: 'location', value: user.userInfo?.location || '' },
        { field: 'languages', value: user.userInfo?.languages || '' },
        { field: 'ahubLink', value: user.userInfo?.ahubLink || '' },
        { field: 'gender', value: user.userInfo?.gender || '' },
      ];

      // TODO: fix this types
      fieldsToUpdate.forEach(({ field, value }) => {
        setValue(field, value);
      });
    }
  }, [user, setValue]);

  const onSubmit = async (data: IEditFormValue) => {
    try {
      await dispatch(editUser({ ...user, ...data }));
      dispatch(getUser());
      isCloseModal();
    } catch (error) {
      console.error('Ошибка при редактировании пользователя:', error);
    }
  };

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onCancel = () => {
    isCloseModal();
  };

  const handleLanguagesChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    if (!value[0]) return;

    setLanguage(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Portal>
      <StyledOverlay onClick={isCloseModal}>
        <StyledModal onClick={handleModalClick}>
          <StyledTitle>{title}</StyledTitle>
          <FormProvider {...methods}>
            <StyledFieldContainer onSubmit={handleSubmit(onSubmit)}>
              {inputFields.map(({ name, type, label, required }) => (
                <CustomInput
                  key={name}
                  name={name}
                  type={type}
                  label={label}
                  register={register}
                  error={errors}
                  required={required}
                />
              ))}
              <StyledSubtitle>Пол</StyledSubtitle>
              <StyledContainerGender>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field} row>
                      {genderOptions.map(option => (
                        <FormControlLabel
                          key={option.value}
                          value={option.value}
                          control={<StyledRadio />}
                          label={option.label}
                        />
                      ))}
                    </RadioGroup>
                  )}
                />
              </StyledContainerGender>
              <StyledDivider />
              <LastWorkInput />
              <EducationInput />
              <AddressMap title="Местоположение" fieldName="location" />
              <StyledDivider />
              <StyledSubtitle>Знание языков</StyledSubtitle>
              <MenuDropdown
                menuName="languages"
                menuLabel="Языки"
                menuOptions={languages}
                menuOnChange={handleLanguagesChange}
                menuReset={() => setLanguage([])}
                appliedOptions={language}
                menuWidth="100%"
                maxMenuWidth="100%"
                register={register}
              />
              <StyledDivider />
              <ProfileLInkInput />
              <StyledButtonContainer>
                <StyledCancelButton type="button" onClick={onCancel}>
                  {onCloseTitle}
                </StyledCancelButton>
                <StyledButtonSubmit type="submit">{titleButton}</StyledButtonSubmit>
              </StyledButtonContainer>
            </StyledFieldContainer>
          </FormProvider>
        </StyledModal>
      </StyledOverlay>
    </Portal>
  );
};

export default UserEditModal;
