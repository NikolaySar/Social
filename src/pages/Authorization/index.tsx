import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from '../../components/UI/CustomInput';
import Modal from '../../components/Modal';
import { validationAuthorizationShema } from '../../helpers/validation';
import logo from '@images/Logo.svg';
import useAction from '../../hooks/useAction';
import { StyledForm, StyledButton } from './style';

export interface IAuthorizationProps {
  isOpen?: () => void;
  handleClose: () => void;
  isOpenAnotheModal: () => void;
}

export interface IAuthorizationValue {
  email: string;
  password: string;
}

const Authorization = ({
  isOpen,
  handleClose,
  isOpenAnotheModal,
}: IAuthorizationProps) => {
  const { loginUser } = useAction();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IAuthorizationValue>({
    resolver: yupResolver(validationAuthorizationShema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: IAuthorizationValue) => {
    const trimmedEmail = data.email.trim();
    const trimmedPassword = data.password.trim();
    loginUser({ ...data, email: trimmedEmail, password: trimmedPassword });
    handleClose();
  };

  return (
    <Modal
      image={logo}
      title="Добро пожаловать в AHUB"
      suptitle="Находите новые бизнес-контакты"
      titleButton="Продолжить"
      link=""
      isCloseModal={handleClose}
      handleActionButton={handleSubmit(onSubmit)}
      disabled={!isValid}
      isOpenAnotherModal={isOpenAnotheModal}
      isOpenAnotherModalText="Зарегистрироваться"
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          name="email"
          type="email"
          label="Email"
          register={register}
          error={errors}
          required
        />
        <div>
          <CustomInput
            name="password"
            type="password"
            label="Пароль"
            register={register}
            error={errors}
            required
          />
          <StyledButton onClick={isOpen}>Забыли пароль?</StyledButton>
        </div>
      </StyledForm>
    </Modal>
  );
};

export default Authorization;
