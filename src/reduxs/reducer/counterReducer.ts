import { createActions, createReducer, DefaultActionTypes } from 'reduxsauce';
import SeamlessImmutable from 'seamless-immutable';
import { CounterAction, CounterActionCreators, CounterPayload, CounterState } from '~/types/reduxs/counterRedux';

// =========== Initial State ===========

const INITIAL_STATE = SeamlessImmutable(0);

// =========== Action Types and Creators ===========

interface CounterActionTypes extends DefaultActionTypes {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
  SET: 'counter/set',
}

export const { Types, Creators } = createActions<
  CounterActionTypes,
  CounterActionCreators
>({
  increment: ['value'],
  decrement: ['value'],
  set: ['value'],
});

// =========== Create Reducer ===========

const increment: CounterAction = (state, { value }) => state + value;
const decrement: CounterAction = (state, { value }) => state - value;
const set: CounterAction = (_, { value }) => value;

export const CounterReducer = createReducer<CounterState, CounterPayload>(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
  [Types.SET]: set,
});
