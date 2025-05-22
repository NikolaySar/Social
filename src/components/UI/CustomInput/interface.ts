import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import {
  IFormInputs,
  IFormValues,
  IEditFormValue,
  IUserInfo,
  ICreateCompanyWithoutId,
} from '../../../interfaces';
import { IAuthorizationValue } from '../../../pages/Authorization';
import { IFormForgot } from '../../../pages/ForgotPassword/interface';

export interface ICustomInputProps {
  name: string;
  error: FieldErrors<IFormValues | IEditFormValue>;
  type: string;
  label: string;
  required?: boolean;
  isValid?: boolean;
  InputProps?: {
    maxLength?: number;
    multiline?: boolean;
    rows?: number;
  };
  value?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register:
    | UseFormRegister<IFormValues>
    | UseFormRegister<IAuthorizationValue>
    | UseFormRegister<IFormForgot>
    | UseFormRegister<IFormInputs>
    | UseFormRegister<IEditFormValue>
    | UseFormRegister<IUserInfo>
    | UseFormRegister<ICreateCompanyWithoutId>;

  helperText?: string | undefined;
}
