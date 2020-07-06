import React from 'react';
import { AxiosError } from 'axios';
import { IProduct } from '../@types';

export interface IProductsContext {
  products: IProduct[];
  productToDelete?: IProduct | null;
  deleteModalIsOpen: boolean;
  loadingProducts: boolean;
  loadingDelete: boolean;
  loadingUpdate: boolean;
  loadingCreate: boolean;
  productsError?: AxiosError;
  createError?: AxiosError;
  deleteError?: AxiosError;
  updateError?: AxiosError;
  sortProductsByDate(products: IProduct[]): IProduct[];
  deleteProduct(id: string): Promise<any>;
  updateProduct(id: string, data: {}): Promise<any>;
  createProduct(data: {}): Promise<any>;
  openDeleteModal(product: IProduct): void;
  closeDeleteModal(): void;
}

const ProductsContext = React.createContext<IProductsContext>({
  products: [],
  deleteModalIsOpen: false,
  loadingProducts: false,
  loadingCreate: false,
  loadingUpdate: false,
  loadingDelete: false,
  openDeleteModal: () => null,
  closeDeleteModal: () => null,
  sortProductsByDate: () => [],
  createProduct: async () => null,
  updateProduct: async () => null,
  deleteProduct: async () => null,
});

export default ProductsContext;
