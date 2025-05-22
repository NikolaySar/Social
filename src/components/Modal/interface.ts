export interface IModalProps {
  children?: JSX.Element | JSX.Element[];
  isCloseModal: () => void;
  title?: string;
  suptitle?: string;
  handleActionButton?: () => void;
  titleButton?: string;
  onCloseTitle?: string;
  image?: string;
  disabled?: boolean;
  link: string;
  linkText?: string;
  isOpenAnotherModal?: () => void;
  isOpenAnotherModalText?: string;
}
