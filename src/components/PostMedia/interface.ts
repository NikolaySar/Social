export interface IPostMedia {
  filePath: string;
  type: string;
  name: string;
}

export interface IPostMediaProps {
  files: IPostMedia[];
  isEditable: boolean;
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileRemove?: () => void;
}
