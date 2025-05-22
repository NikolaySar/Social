export interface IUserEditModal {}

export interface IUserEditModalProps {
  open: boolean;
  title?: string;
  isCloseModal: () => void;
  titleButton?: string;
  onCloseTitle?: string;
}
