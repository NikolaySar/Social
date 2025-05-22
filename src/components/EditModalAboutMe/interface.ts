export interface IEditModalAboutMeProps {
  isCloseModal: () => void;
  title?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  characterCount: number;
  titleButton: string;
  onCloseTitle: string;
}
