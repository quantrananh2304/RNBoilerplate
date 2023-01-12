import { AnyAction } from 'redux';
import { CounterState } from './counterRedux';
import { FakeStoreApiState } from './fakestoreapiRedux';

export type BodyAction<T = AnyAction, S = any> = (state: S, payload: T) => S;

export interface RootState {
  counter: CounterState;
  fakeStoreApi: FakeStoreApiState;
}

export enum RESETTABLE_REDUCER {
  COUNTER_RESET = 'COUNTER_RESET',
}
