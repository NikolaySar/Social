import { useFormContext } from 'react-hook-form';
import CustomInput from '../UI/CustomInput';
import { IEditFormValue } from '@/interfaces';
import { StyledSubtitle, StyledDivider } from '../../GlobalStyle';

const LastWorkInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IEditFormValue>();

  return (
    <>
      <StyledSubtitle>Последнее место работы</StyledSubtitle>
      <CustomInput
        name="lastWork.title"
        type="text"
        label="Должность"
        register={register}
        error={errors}
      />
      <CustomInput
        name="lastWork.company"
        type="text"
        label="Компания"
        register={register}
        error={errors}
      />
      <StyledDivider />
    </>
  );
};

export default LastWorkInput;
