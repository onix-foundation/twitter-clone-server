import { Tweet, User } from '@prisma/client';

export type Notification = {
  notificationId: string;
  type: string;
  message: string;
  userId: string;
  createdAt: Date;
  fromUserId?: string | null;
  tweetId?: string | null;
  read: boolean;
  user: User;
  fromUser?: User | null;
  tweet?: Tweet | null;
};
export enum NotificationType {
  LIKE = 'LIKE',
  COMMENT = 'COMMENT',
  FOLLOW = 'FOLLOW',
}

export interface NotificationInput {
  type: NotificationType;
  message: string;
  userId: string;
  fromUserId?: string;
  tweetId?: string;
}
