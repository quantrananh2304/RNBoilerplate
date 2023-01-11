import { DefaultActionTypes, createActions, createReducer } from 'reduxsauce';
import SeamlessImmutable from 'seamless-immutable';
import { BodyAction } from '~/types/reduxs';
import {
  CounterAction,
  CounterActionCreators,
  CounterState,
} from '~/types/reduxs/counter';

// =========== Create State ===========

const INITIAL_STATE = SeamlessImmutable<CounterState>({
  counter: 0,
});

export interface CounterActionTypes extends DefaultActionTypes {
  INCREMENT: 'INCREMENT';
  RESET: 'RESET';
}

// =========== Create Action ===========
const { Types, Creators } = createActions<
  CounterActionTypes,
  CounterActionCreators
>({
  increment: [''],
  reset: [''],
});

export const CounterTypes = Types;

export default Creators;

const increment: BodyAction = (state) => {
  return {
    ...state,
    counter: ++state.counter,
  };
};

const reset: BodyAction = (state) => {
  return {
    ...INITIAL_STATE,
  };
};

// =========== Create Reducer ===========
export const reducer = createReducer<CounterState, CounterAction>(
  INITIAL_STATE,
  {
    [Types.INCREMENT]: increment,
    [Types.RESET]: reset,
  },
);
