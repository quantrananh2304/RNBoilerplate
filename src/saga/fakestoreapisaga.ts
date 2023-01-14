import FakeStoreApiActions, {
  FakeStoreApiTypes,
} from '~/reduxs/reducer/fakestoreapiReducer';
import { Effect, put, takeLatest } from 'redux-saga/effects';
import api from '~/services';

function* fetchAllProducts(effect: Effect<string, { category: string }>): any {
  const { category } = effect.payload;

  const response: any = yield api.fakeStoreApi.fetchAllProductsByCategory({
    category,
  });

  if (response.status === 200) {
    const { data } = response;

    yield put(FakeStoreApiActions.fetchAllProductsSuccess(data, data.length));
  } else {
    yield put(FakeStoreApiActions.fetchAllProductsFailure());
  }
}

function* fetchAllCategories(): any {
  const response: any = yield api.fakeStoreApi.fetchAllCategories();

  if (response.status === 200) {
    const { data } = response;

    yield put(FakeStoreApiActions.fetchAllCategoriesSuccess(data));
  } else {
    yield put(FakeStoreApiActions.fetchAllCategoriesFailure());
  }
}

export default function* watchFakeStoreApiSaga() {
  yield takeLatest(FakeStoreApiTypes.FETCH_ALL_PRODUCTS, fetchAllProducts);
  yield takeLatest(FakeStoreApiTypes.FETCH_ALL_CATEGORIES, fetchAllCategories);
}
