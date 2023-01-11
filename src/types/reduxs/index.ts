import { AnyAction } from 'redux';
import { CounterState } from './counter';

export type BodyAction<T = AnyAction, S = any> = (state: S, payload: T) => S;

export interface RootState {
  counter: CounterState;
}
