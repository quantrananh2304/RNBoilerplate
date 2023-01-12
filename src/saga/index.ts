import { all, fork } from 'redux-saga/effects';
import watchFakeStoreApiSaga from './fakestoreapisaga';

export default function* rootSaga() {
  yield all([fork(watchFakeStoreApiSaga)]);
}
