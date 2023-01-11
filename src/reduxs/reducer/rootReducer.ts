import { combineReducers } from 'redux';
import { RootState } from '~/types/reduxs';

const rootReducer = combineReducers<RootState>({
  counter: require('./counter').reducer,
});

export default rootReducer;
