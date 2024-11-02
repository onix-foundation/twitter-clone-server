export interface EventMap {
  accountCreated: { email: string; username: string };
  passwordReset: { email: string };
  tweetCreated: { tweetId: string };
  tweetLiked: { tweetId: string; userId: string };
  tweetUnliked: { tweetId: string; userId: string };
  tweetRetweeted: { tweetId: string; userId: string };
  tweetUnretweeted: { tweetId: string; userId: string };
  commentCreated: { commentId: string };
  commentLiked: { commentId: string; userId: string };
  commentUnliked: { commentId: string; userId: string };
}
export type EventHandler<T = unknown> = (payload: T) => void;

export interface EventEmitterInterface {
  emit<K extends keyof EventMap>(eventName: K, payload: EventMap[K]): void;
  on<K extends keyof EventMap>(
    eventName: K,
    handler: EventHandler<EventMap[K]>
  ): void;
  off<K extends keyof EventMap>(
    eventName: K,
    handler: EventHandler<EventMap[K]>
  ): void;
  removeAllListeners<K extends keyof EventMap>(eventName: K): void;
}
