export interface IPost {
  _id: string;
  author: {
    firstName: string;
    lastName: string;
    _id: string;
    userInfo: {
      avatarUrl?: string;
    };
  };
  createdAt: string;
  description: string;
  images: string[];
  videos: string[];
  documents: string[];
}
