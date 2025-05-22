import { useFormContext } from 'react-hook-form';
import CustomInput from '../UI/CustomInput';
import { IEditFormValue } from '@/interfaces';
import { StyledSubtitle, StyledDivider } from '../../GlobalStyle';

const ProfileLInkInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IEditFormValue>();

  return (
    <>
      <StyledSubtitle>Ссылка на профиль</StyledSubtitle>
      <CustomInput
        name="ahubLink"
        type="text"
        label="Ссылка"
        register={register}
        error={errors}
      />
      <StyledDivider />
    </>
  );
};

export default ProfileLInkInput;
