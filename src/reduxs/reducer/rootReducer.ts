import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { RESETTABLE_REDUCER, RootState } from '~/types/reduxs';
import { CounterReducer } from './counterReducer';
import { reducer as fakeStoreApi } from './fakestoreapiReducer';

const resettable = {
  counter: resettableReducer(RESETTABLE_REDUCER.COUNTER_RESET),
};

const rootReducer = combineReducers<RootState>({
  counter: resettable.counter(CounterReducer),
  fakeStoreApi,
});

export default rootReducer;
