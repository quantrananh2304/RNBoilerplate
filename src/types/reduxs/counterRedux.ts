import { BodyAction } from '.';
import { DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

export type CounterState = number;
export type CounterPayload = { value: CounterState } & AnyAction;
export type CounterAction = BodyAction<CounterPayload, CounterState>;

export interface CounterActionCreators extends DefaultActionCreators {
  increment: (n: CounterState) => CounterPayload,
  decrement: (n: CounterState) => CounterPayload,
  set: (n: CounterState) => CounterPayload,
}
