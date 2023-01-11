import { AnyAction } from 'redux';
import { DefaultActionCreators } from 'reduxsauce';

export type CounterState = {
  counter: number;
};

export type CounterAction = AnyAction;

export interface DispatchAction {
  increment: () => void;
  reset: () => void;
}

export interface CounterActionCreators extends DefaultActionCreators {
  increment: () => AnyAction;
  reset: () => AnyAction;
}
