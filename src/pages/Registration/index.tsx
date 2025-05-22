import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { Snackbar } from '@mui/material';
import CustomInput from '../../components/UI/CustomInput';
import Modal from '../../components/Modal';
import { IFormValues } from '../../interfaces';
import { IRegistrationProps } from './interface';
import { validationSchema } from '../../helpers/validation';
import { ISnackbar, IRootReduxState } from '../../interfaces';
import logo from '@images/Logo.svg';
import { StyledInputWrapper, StyledForm } from './style';
import useAction from '../../hooks/useAction';

const Registration = ({
  handleClose,
  isOpenAnotheModal,
}: IRegistrationProps) => {
  const { registerUser } = useAction();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: IFormValues) => {
    const trimmedEmail = data.email.trim();
    const trimmedPassword = data.password.trim();
    registerUser({ ...data, email: trimmedEmail, password: trimmedPassword });
    handleClose();
  };

  return (
    <Modal
      image={logo}
      title="Добро пожаловать в AHUB"
      suptitle="Находите новые бизнес-контакты"
      link=""
      linkText="Продолжая вы соглашаетесь с Условиями использования и Политикой конфиденциальности"
      titleButton="Продолжить"
      isCloseModal={handleClose}
      handleActionButton={handleSubmit(onSubmit)}
      disabled={!isValid}
      isOpenAnotherModal={isOpenAnotheModal}
      isOpenAnotherModalText="Войти"
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <CustomInput
            name="firstName"
            type="text"
            label="Имя"
            register={register}
            error={errors}
            required
          />
          <CustomInput
            name="lastName"
            type="text"
            label="Фамилия"
            register={register}
            error={errors}
            required
          />
        </StyledInputWrapper>
        <CustomInput
          name="email"
          type="email"
          label="Email"
          register={register}
          error={errors}
          required
        />
        <CustomInput
          name="password"
          type="password"
          label="Придумайте пароль"
          register={register}
          error={errors}
          required
        />
      </StyledForm>
    </Modal>
  );
};

export default Registration;
