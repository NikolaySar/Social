import { ICreateCompanyWithoutId, IEditFormValue } from '@/interfaces';
import { SelectChangeEvent } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

export interface IMenuDropdownProps {
  menuLabel: string;
  menuName: string;
  menuOptions: string[] | string;
  menuOnChange: (event: SelectChangeEvent<string[]>) => void;
  menuReset: () => void;
  appliedOptions: string[] | undefined;
  menuWidth?: string;
  maxMenuWidth?: string;
  register?:
    | UseFormRegister<IEditFormValue>
    | UseFormRegister<ICreateCompanyWithoutId>;
}
