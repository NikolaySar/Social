export interface IUserCardProps {
  id: string;
  fullName: string;
  isVerified: boolean;
  avatar?: string;
  work?: {
    title: string;
    company: string;
  };
  location?: string;
  ahubLink: string;
}
