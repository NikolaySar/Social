import { useFormContext } from 'react-hook-form';
import CustomInput from '../UI/CustomInput';
import { IEditFormValue } from '@/interfaces';
import { StyledSubtitle, StyledDivider } from '../../GlobalStyle';

const EducationInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IEditFormValue>();
  return (
    <>
      <StyledSubtitle>Образование</StyledSubtitle>
      <CustomInput
        name="education.institution"
        type="text"
        label="Учебное заведение"
        register={register}
        error={errors}
      />
      <CustomInput
        name="education.specialization"
        type="text"
        label="Специализация"
        register={register}
        error={errors}
      />
      <StyledDivider />
    </>
  );
};

export default EducationInput;
