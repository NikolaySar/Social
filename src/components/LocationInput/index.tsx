import { useFormContext } from 'react-hook-form';
import CustomInput from '../UI/CustomInput';
import { IEditFormValue } from '@/interfaces';
import { StyledSubtitle, StyledDivider } from '../../GlobalStyle';

const LocationInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IEditFormValue>();
  return (
    <>
      <StyledSubtitle>Местоположение</StyledSubtitle>
      <CustomInput
        name="location"
        type="text"
        label="Укажите ваш регион"
        register={register}
        error={errors}
      />
      <StyledDivider />
    </>
  );
};

export default LocationInput;
