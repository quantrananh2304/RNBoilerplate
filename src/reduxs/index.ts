import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from '~/saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
