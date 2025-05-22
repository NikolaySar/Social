export interface IEditContactInfoProps {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
  title?: string;
  isCloseModal: () => void;
  titleButton?: string;
  onCloseTitle?: string;
}
