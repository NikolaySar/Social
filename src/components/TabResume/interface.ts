export interface IResumeItem {
  role?: string;
  company?: string;
  institution?: string;
  duration?: string;
  location?: string;
  description?: string;
}

export interface IResumeSection {
  title?: string;
  items?: IResumeItem[];
}

export interface IResumeProps {
  data?: {
    [key: string]: IResumeSection;
  };
}
