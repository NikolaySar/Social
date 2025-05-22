import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Snackbar } from '@mui/material';
import Modal from '../../components/Modal';
import { ISnackbar } from '../../interfaces';
import CustomInput from '../../components/UI/CustomInput';
import { validationSchemaForgotPass } from '../../helpers/validation';
import {
  IEmailReduxState,
  IForgotPasswordProps,
  IFormForgot,
} from './interface';
import { StyledForm } from './style';
import useAction from '../../hooks/useAction';

const ForgotPassword = ({
  handleModalEmail,
  handleClose,
  handleBackForgotPas,
}: IForgotPasswordProps) => {
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    open: false,
    message: '',
  });

  const error = useSelector((state: IEmailReduxState) => state.email.error);

  const { sendEmail } = useAction();

  useEffect(() => {
    if (error && error.length > 0) {
      setSnackbar({
        ...snackbar,
        open: true,
        message:
          'Извините, произошла ошибка. Проверьте даннные, которые вы вводили.',
      });
    }
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormForgot>({
    resolver: yupResolver(validationSchemaForgotPass),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const onSubmit = ({ email }: IFormForgot) => {
    const trimmedEmail = email.trim();
    sendEmail(trimmedEmail);
    handleClose();
    handleModalEmail();
  };

  return (
    <>
      <Modal
        title="Восстановление пароля"
        suptitle="Введите свой адрес электронной почты или номер телефона, который вы используете для своей учетной записи."
        titleButton="Продолжить"
        link=""
        onCloseTitle="Назад"
        isCloseModal={handleBackForgotPas}
        handleActionButton={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            isValid={isValid}
            name="email"
            type="email"
            label="Email"
            register={register}
            error={errors}
            required
          />
        </StyledForm>
      </Modal>
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

export default ForgotPassword;
