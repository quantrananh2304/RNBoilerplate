import axiosInstance from './axios';

export const fetchAllProductsByCategory = ({
  category,
}: {
  category: string;
}) => {
  return axiosInstance.get(`/products/category/${category}`);
};

export const fetchAllCategories = () => {
  return axiosInstance.get(`/products/categories`);
};
