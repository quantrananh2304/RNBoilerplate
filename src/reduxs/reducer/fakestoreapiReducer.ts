import { DefaultActionTypes, createActions, createReducer } from 'reduxsauce';
import SeamlessImmutable from 'seamless-immutable';
import { BodyAction } from '~/types/reduxs';
import {
  FakeStoreApiAction,
  FakeStoreApiActionCreators,
  FakeStoreApiState,
  Product,
} from '~/types/reduxs/fakestoreapiRedux';

// =========== Create State ===========

const INITIAL_STATE = SeamlessImmutable<FakeStoreApiState>({
  products: [],
  totalProducts: 0,
  fetching: false,
  categories: [],
});

// =========== Create Action ===========
export interface FakeStoreApiActionTypes extends DefaultActionTypes {
  FETCH_ALL_CATEGORIES: 'FETCH_ALL_CATEGORIES';
  FETCH_ALL_CATEGORIES_SUCCESS: 'FETCH_ALL_CATEGORIES_SUCCESS';
  FETCH_ALL_CATEGORIES_FAILURE: 'FETCH_ALL_CATEGORIES_FAILURE';

  FETCH_ALL_PRODUCTS: 'FETCH_ALL_PRODUCTS';
  FETCH_ALL_PRODUCTS_SUCCESS: 'FETCH_ALL_PRODUCTS_SUCCESS';
  FETCH_ALL_PRODUCTS_FAILURE: 'FETCH_ALL_PRODUCTS_FAILURE';
}

const { Types, Creators } = createActions<
  FakeStoreApiActionTypes,
  FakeStoreApiActionCreators
>({
  fetchAllCategories: [],
  fetchAllCategoriesSuccess: ['categories'],
  fetchAllCategoriesFailure: [],

  fetchAllProducts: [],
  fetchAllProductsSuccess: ['products', 'totalProducts'],
  fetchAllProductsFailure: [],
});

export const FakeStoreApiTypes = Types;

export default Creators;

const fetchAllCategories: BodyAction<{}, FakeStoreApiState> = (
  state,
): FakeStoreApiState => {
  return {
    ...state,
    fetching: true,
  };
};

const fetchAllCategoriesSuccess: BodyAction<
  { categories: Array<string> },
  FakeStoreApiState
> = (state, { categories }): FakeStoreApiState => {
  return {
    ...state,
    categories,
    fetching: false,
  };
};

const fetchAllCategoriesFailure: BodyAction<any, FakeStoreApiState> = (
  state,
): FakeStoreApiState => {
  return {
    ...state,
    fetching: false,
  };
};

const fetchAllProducts: BodyAction<{}, FakeStoreApiState> = (
  state,
): FakeStoreApiState => {
  return {
    ...state,
    fetching: true,
  };
};

const fetchAllProductsSuccess: BodyAction<
  {
    products: Array<Product>;
    totalProducts: number;
  },
  FakeStoreApiState
> = (state, { products, totalProducts }): FakeStoreApiState => {
  return {
    ...state,
    products,
    totalProducts,
    fetching: false,
  };
};

const fetchAllProductsFailure: BodyAction<any, FakeStoreApiState> = (
  state,
): FakeStoreApiState => {
  return {
    ...state,
    fetching: false,
  };
};

// =========== Create Reducer ===========
export const reducer = createReducer<FakeStoreApiState, FakeStoreApiAction>(
  INITIAL_STATE,
  {
    [Types.FETCH_ALL_CATEGORIES]: fetchAllCategories,
    [Types.FETCH_ALL_CATEGORIES_SUCCESS]: fetchAllCategoriesSuccess,
    [Types.FETCH_ALL_CATEGORIES_FAILURE]: fetchAllCategoriesFailure,

    [Types.FETCH_ALL_PRODUCTS]: fetchAllProducts,
    [Types.FETCH_ALL_PRODUCTS_FAILURE]: fetchAllProductsFailure,
    [Types.FETCH_ALL_PRODUCTS_SUCCESS]: fetchAllProductsSuccess,
  },
);
