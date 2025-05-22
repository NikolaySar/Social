import { ICreateCompanyWithoutId, IEditFormValue } from '@/interfaces';

export interface IEditModalProps {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
  title?: string;
  handleActionButton: (data: IEditFormValue) => void;
  isCloseModal: () => void;
  titleButton?: string;
  modalCloseTitle?: string;
}
