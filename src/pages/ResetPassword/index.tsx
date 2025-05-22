import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from '../../components/UI/CustomInput';
import Modal from '../../components/Modal';
import { validationSchemaResetPassword } from '../../helpers/validation';
import { IFormInputs, ISnackbar } from '../../interfaces';
import { IRegistrationProps } from './interface';
import useAction from '../../hooks/useAction';
import { progressColors } from '../../constants';
import {
  StyledForm,
  StyledLinearProgress,
  StyledLinearWrapper,
  StyledProgressCaption,
} from './style';

export interface ISubmit {
  password: string;
  token: string;
}

const ResetPassword = ({ handleClose }: IRegistrationProps) => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState<ISnackbar>({
    open: false,
    message: '',
  });

  const { resetPassword } = useAction();

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`/api/validate-reset-token?token=${token}`);
        if (!response.ok) {
          throw new Error('Invalid or expired token');
        }
      } catch (error) {
        navigate('/');
      }
    };

    if (token) {
      validateToken();
    } else {
      navigate('/');
    }
  }, [navigate, token]);

  const PASSWORD_MIN_LENGTH = 8;
  const PASSWORD_STRENGTH_WEIGHTS = {
    LENGTH: 2,
    ALPHA: 2,
    UPPERCASE: 1,
    LOWERCASE: 1,
    DIGIT: 2,
    SPECIAL_CHARACTER: 2,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchemaResetPassword),
    defaultValues: {
      password: '',
      confirmPassword: '',
      token: token,
    } as Partial<IFormInputs>,
    mode: 'onChange',
  });

  const passwordValue = watch('password');

  const onSubmit = (data: IFormInputs) => {
    const trimmedPassword = data.password.trim();
    if (token !== null) {
      try {
        resetPassword(trimmedPassword, token);
        navigate('/');
      } catch (error) {
        setSnackbar({ open: true, message: 'Ошибка при сбросе пароля' });
      }
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= PASSWORD_MIN_LENGTH) strength += PASSWORD_STRENGTH_WEIGHTS.LENGTH;
    if (/[a-zA-Z]/.test(password)) strength += PASSWORD_STRENGTH_WEIGHTS.ALPHA;
    if (/[A-Z]/.test(password)) strength += PASSWORD_STRENGTH_WEIGHTS.UPPERCASE;
    if (/[a-z]/.test(password)) strength += PASSWORD_STRENGTH_WEIGHTS.LOWERCASE;
    if (/\d/.test(password)) strength += PASSWORD_STRENGTH_WEIGHTS.DIGIT;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
      strength += PASSWORD_STRENGTH_WEIGHTS.SPECIAL_CHARACTER;
    return strength;
  };

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(passwordValue));
  }, [passwordValue]);

  return (
    <>
      <Modal
        title="Придумайте новый пароль"
        suptitle={`Придумайте новый пароль для вашего аккаунта. Пожалуйста, введите его ниже, чтобы продолжить восстановление пароля.`}
        link=""
        onCloseTitle="Назад"
        titleButton="Продолжить"
        isCloseModal={handleClose}
        handleActionButton={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        <StyledForm action="">
          <CustomInput
            name="password"
            type="password"
            label="Пароль"
            register={register}
            error={errors}
            required
          />

          <CustomInput
            name="confirmPassword"
            type="password"
            label="Подтвердите пароль"
            register={register}
            error={errors}
            required
          />
          <div className="">
            {passwordValue && (
              <StyledLinearWrapper>
                <StyledLinearProgress
                  variant="determinate"
                  value={passwordStrength * 10}
                  sx={{
                    ...(passwordStrength >= 8 && progressColors.strong),
                    ...(passwordStrength >= 4 && passwordStrength <= 8 && progressColors.medium),
                    ...(passwordStrength >= 2 && passwordStrength <= 4 && progressColors.weak),
                    ...(passwordStrength < 2 && progressColors.default),
                  }}
                />
                <StyledProgressCaption>Надёжный пароль</StyledProgressCaption>
              </StyledLinearWrapper>
            )}
          </div>
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

export default ResetPassword;
