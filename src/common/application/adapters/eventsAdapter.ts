import { EventMap } from '../../domain/events/eventEmmiter';

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
