import { useSelector } from 'react-redux';
import { IOpenEmail, IOpenEmailProps } from './interface';
import Modal from '../../components/Modal';
import Loading from '../../components/UI/Loading';

const getEmailDomain = (email: string) => {
  const domain = email.split('@')[1];
  return domain;
};

const getEmailServiceUrl = (domain: string) => {
  switch (domain) {
    case 'gmail.com':
      return 'https://mail.google.com';
    case 'yahoo.com':
      return 'https://mail.yahoo.com';
    case 'outlook.com':
    case 'hotmail.com':
      return 'https://outlook.live.com';
    default:
      return 'https://www.google.com/search?q=' + encodeURIComponent(domain);
  }
};

const OpenEmail = ({ handleClose }: IOpenEmailProps) => {
  const emailUser = useSelector((state: IOpenEmail) => state.email.email);
  const error = useSelector((state: IOpenEmail) => state.email.error);

  if (error) {
    return (
      <Modal
        title="Произошла ошибка :("
        suptitle="Пользователь c таким email не найден"
        titleButton="Попробовать снова"
        link=""
        onCloseTitle="Назад"
        isCloseModal={handleClose}
      ></Modal>
    );
  }

  if (!emailUser) {
    return (
      <div className="fallback-container">
        <Modal
          link=""
          titleButton="Отмена"
          onCloseTitle="Назад"
          isCloseModal={handleClose}
        >
          <Loading />
        </Modal>
      </div>
    );
  }

  const domain = getEmailDomain(emailUser);
  const emailServiceUrl = getEmailServiceUrl(domain);

  const handleCheckEmail = () => {
    window.open(emailServiceUrl, '_blank');
    handleClose();
  };

  return (
    <Modal
      title="Спасибо!"
      suptitle={`Мы отправили инструкции по сбросу пароля на ${emailUser}. Если письмо не получено, убедитесь, что введенный адрес правильный.`}
      titleButton="Проверить почту"
      link=""
      onCloseTitle="Назад"
      isCloseModal={handleClose}
      handleActionButton={handleCheckEmail}
    ></Modal>
  );
};

export default OpenEmail;
