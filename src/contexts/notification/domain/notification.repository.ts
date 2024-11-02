import { Notification, NotificationInput } from './notification.entity';

export interface NotificationRepository {
  createNotification(notification: NotificationInput): Promise<Notification>;
  getNotifications(userId: string): Promise<Notification[]>;
  markAsRead(notificationId: string): Promise<Notification>;
  markAllAsRead(userId: string): Promise<void>;
  deleteNotification(notificationId: string): Promise<void>;
}
