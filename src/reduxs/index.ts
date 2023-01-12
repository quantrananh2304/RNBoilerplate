import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from '~/saga';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import { RootState } from '~/types/reduxs';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      thunk: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export const { dispatch } = store;

export const useDispatch = () => useAppDispatch<typeof store.dispatch | any>();

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export default store;
