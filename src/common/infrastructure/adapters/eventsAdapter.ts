import { EventEmitter } from 'events';
import {
  EventEmitterInterface,
  EventMap,
  EventHandler,
} from '../../application';

const eventEmitter = new EventEmitter();

export const NodeEventEmitter: EventEmitterInterface = {
  emit<K extends keyof EventMap>(eventName: K, payload: EventMap[K]): void {
    eventEmitter.emit(eventName, payload);
  },

  on<K extends keyof EventMap>(
    eventName: K,
    handler: EventHandler<EventMap[K]>
  ): void {
    eventEmitter.on(eventName, handler);
  },

  off<K extends keyof EventMap>(
    eventName: K,
    handler: EventHandler<EventMap[K]>
  ): void {
    eventEmitter.off(eventName, handler);
  },

  removeAllListeners<K extends keyof EventMap>(eventName: K): void {
    eventEmitter.removeAllListeners(eventName);
  },
};
