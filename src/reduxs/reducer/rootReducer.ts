import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { RESETTABLE_REDUCER, RootState } from '~/types/reduxs';

const resettable = {
  counter: resettableReducer(RESETTABLE_REDUCER.COUNTER_RESET),
};

const rootReducer = combineReducers<RootState>({
  counter: resettable.counter(require('./counterReducer').reducer),
  fakeStoreApi: require('./fakestoreapiReducer').reducer,
});

export default rootReducer;
