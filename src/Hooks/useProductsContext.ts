import { useContext } from 'react';
import ProductsContext, { IProductsContext } from '../Context/ProductsContext';

const useProductContext = (): IProductsContext => useContext(ProductsContext);

export default useProductContext;
