import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Checkbox,
  checkboxClasses,
  FormControlLabel,
  SelectChangeEvent,
  Snackbar,
} from '@mui/material';
import EditAvatarModal from '@/components/EditModalAvatar';
import CustomInput from '@/components/UI/CustomInput';
import MenuDropdown from '@/components/UI/MenuDropdown';
import AddressMap from '@/components/UI/AdressMap';
import { StyledButtonSubmit } from '@/components/UserEditModal/style';
import {
  createDropdownsConfig,
  defaultCompanyEditFormValues,
  inputCompanyFields,
  menuCompanySize,
  menuCompanyType,
  menuIndustry,
} from '@/constants/company';
import useAction from '@/hooks/useAction';
import { validationEditCompanySchema } from '@/helpers/validation';
import { ICreateCompanyWithoutId, ISnackbar } from '@/interfaces';
import { ICompanyReduxState } from './interface';
import Edit from '@images/edit.svg?react';
import userAvatar from '@images/userAvatar.svg';
import {
  StyledAvatarProfile,
  StyledButtonWrapper,
  StyledContainer,
  StyledEditAvatar,
  StyledFieldWrapper,
  StyledForm,
  StyledIdentityButton,
  StyledIdentityText,
  StyledReactQuill,
  StyledSpan,
  StyledTitle,
  StyledTitleWrapper,
  StyledTopWrapper,
  StyledWrapper,
} from './style';
import 'react-quill/dist/quill.snow.css';

const CompanyEdit = () => {
  const [isModalEditOPen, setIsModalEditOpen] = useState(false);
  const [industry, setIndustry] = useState<string[]>([]);
  const [companyType, setCompanyType] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<string[]>([]);
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    open: false,
    message: '',
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const error = useSelector((state: ICompanyReduxState) => state.company.error);

  const { createCompany } = useAction();

  const methods = useForm<ICreateCompanyWithoutId>({
    resolver: yupResolver(validationEditCompanySchema),
    defaultValues: defaultCompanyEditFormValues,
    mode: 'onChange',
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = methods;

  const handleModalEditOpen = () => {
    setIsModalEditOpen(prevState => !prevState);
  };

  const handleMenuChange = (
    event: SelectChangeEvent<string[]>,
    setState: (value: string[]) => void
  ) => {
    const {
      target: { value },
    } = event;

    if (!value[0]) return;

    setState(typeof value === 'string' ? value.split(',') : value);
  };

  const onSubmit = async (data: ICreateCompanyWithoutId) => {
    try {
      const cleanData = { ...data };
      const formData = new FormData();

      Object.entries(cleanData).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      if (avatarFile) {
        formData.append('companyAvatarUrl', avatarFile);
      }

      await createCompany(formData);
      methods.reset();
      setIndustry([]);
      setCompanyType([]);
      setCompanySize([]);
      setAvatarFile(null);
    } catch (error) {
      console.error('Ошибка при создании компании:', error);
    }
  };

  const handleAvatarUpdate = ({ avatarUrl }: { avatarUrl: File }) => {
    const previewUrl = URL.createObjectURL(avatarUrl);
    setValue('companyAvatarUrl', previewUrl);
    setAvatarFile(avatarUrl);
  };

  useEffect(() => {
    if (error && error.length > 0) {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Извините, произошла ошибка. Данная компания уже существует',
      });
    }
  }, [error]);

  const dropdownsConfig = createDropdownsConfig(
    menuIndustry,
    industry,
    setIndustry,
    menuCompanyType,
    companyType,
    setCompanyType,
    menuCompanySize,
    companySize,
    setCompanySize
  );

  return (
    <>
      <StyledTopWrapper>
        <StyledTitleWrapper>
          <p>AHUB Account • Компания</p>
          <h3>Данные о компании</h3>
        </StyledTitleWrapper>
        <StyledButtonWrapper>
          <StyledIdentityButton type="button">
            <StyledIdentityText>Пройти идентификацию</StyledIdentityText>
          </StyledIdentityButton>
          <StyledButtonSubmit type="submit" disabled={!isValid} onClick={handleSubmit(onSubmit)}>
            Сохранить
          </StyledButtonSubmit>
        </StyledButtonWrapper>
      </StyledTopWrapper>
      <StyledContainer>
        <StyledWrapper>
          <StyledAvatarProfile>
            <img src={methods.watch('companyAvatarUrl') || userAvatar} alt="user-avatar" />
            <StyledEditAvatar type="button" onClick={handleModalEditOpen}>
              <Edit />
            </StyledEditAvatar>
          </StyledAvatarProfile>
          <StyledSpan>
            Изменение информации на этой странице приведет к изменению информации на всех проектах
            AHUB
          </StyledSpan>
        </StyledWrapper>
        <StyledFieldWrapper>
          <StyledTitle>Основная информация</StyledTitle>
          <FormProvider {...methods}>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              {inputCompanyFields.map(({ name, type, label, required }) => (
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
              {dropdownsConfig.map(
                ({ menuName, menuLabel, menuOptions, appliedOptions, setState }) => (
                  <MenuDropdown
                    key={menuName}
                    menuName={menuName}
                    menuLabel={menuLabel}
                    menuOptions={menuOptions}
                    menuOnChange={event => handleMenuChange(event, setState)}
                    menuReset={() => setState([])}
                    appliedOptions={appliedOptions}
                    menuWidth="100%"
                    maxMenuWidth="100%"
                    register={register}
                  />
                )
              )}
              <AddressMap title="Адрес компании" fieldName="companyLocation" />
              <Controller
                name="aboutCompany"
                control={control}
                render={({ field }) => (
                  <div>
                    <StyledTitle>О компании</StyledTitle>
                    <StyledReactQuill
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Описание компании"
                    />
                    {errors.aboutCompany && <p>{errors.aboutCompany.message}</p>}
                  </div>
                )}
              />
              <FormControlLabel
                control={
                  <Controller
                    name="isRepresentative"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        checked={field.value}
                        sx={{
                          [`&, &.${checkboxClasses.checked}`]: {
                            color: '#16993B',
                          },
                        }}
                        required
                      />
                    )}
                  />
                }
                label="Я подтверждаю, что являюсь представителем компании"
              />
            </StyledForm>
          </FormProvider>
        </StyledFieldWrapper>
      </StyledContainer>
      {isModalEditOPen && (
        <EditAvatarModal
          open={isModalEditOPen}
          isCloseModal={handleModalEditOpen}
          title="Редактирование"
          modalCloseTitle="Удалить"
          titleButton="Сохранить"
          handleActionButton={handleAvatarUpdate}
        />
      )}
      {snackbar.open && (
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ open: false, message: '' })}
          message={snackbar.message}
        />
      )}
    </>
  );
};

export default CompanyEdit;
