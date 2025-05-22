import { IEditFormValue } from '@/interfaces';

export interface EditCoverModalProps {
  open: boolean;
  isCloseModal: () => void;
  title: string;
  modalCloseTitle: string;
  titleButton: string;
  handleActionButton: (data: IEditFormValue) => void;
}
