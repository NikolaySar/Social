import { IPostMedia } from '@/components/PostMedia/interface';

export interface ITagData {
  tag: string;
}

export interface IDishData {
  image: string;
  text: string;
}

export interface IFilesData {
  file: File;
}

export interface IProductData {
  image: string;
  name: string;
  description: string;
  location: string;
  price: string;
}

export interface ISwipperProps {
  type: 'tag' | 'dishes' | 'product' | 'file';
  data: ITagData[] | IDishData[] | IProductData[] | IPostMedia[];
  scrollArea?: number;
  className?: any;
}
