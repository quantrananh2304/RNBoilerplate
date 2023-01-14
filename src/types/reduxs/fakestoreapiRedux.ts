import { AnyAction } from 'redux';
import { DefaultActionCreators } from 'reduxsauce';

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type FakeStoreApiState = {
  products: Array<Product> | any;
  totalProducts: number;
  fetching: boolean;
  categories: Array<String> | any;
};

export interface FetchAllProductsPayload extends AnyAction {
  products: Array<Product> | any;
}

export type FakeStoreApiAction = AnyAction | FetchAllProductsPayload;

export interface FakeStoreApiActionCreators extends DefaultActionCreators {
  fetchAllCategories: () => any;
  fetchAllCategoriesSuccess: (categories: Array<string>) => any;
  fetchAllCategoriesFailure: () => any;

  fetchAllProducts: (payload: { category: string }) => FetchAllProductsPayload;
  fetchAllProductsSuccess: (
    product: Array<Product>,
    totalProducts: number,
  ) => any;
  fetchAllProductsFailure: () => any;
}
