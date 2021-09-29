interface User {
  userId: number;
  firstName: string;
  lastName: string;
  subtitle: string;
  email: string;
  avatarUrl: string;
}

interface Note {
  nodeId: number;
  dataUrl: string;
  noteTitle: string;
  createdAt: Date;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  accessStatus: string;
  ownerId: number;
  ownerName: string;
  sharedUsers: Array<User>; // add this field if accessStatus == "owner"; otherwise, leave it as []
  categories: Array<Category>;
}

interface Community {
  communityId: number;
  name: string;
  description: string;
  createdAt: Date;
  photo: string;
  memberCount: number;
  owner: User;
}

interface Category {
  categoryName: string;
}
