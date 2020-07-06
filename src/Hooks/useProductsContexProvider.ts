import { useEffect, useState } from 'react';
import uid from 'uid';
import useAxios from 'axios-hooks';
import { IProductsContext } from '../Context/ProductsContext';
import { IProduct } from '../@types';

const useProductsContextProvider = (): IProductsContext => {
  // Internal State
  const [products, setProducts] = useState<IProduct[]>([]);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);
  // Fetch Products Hook
  const [
    { data: productsData, loading: loadingProducts, error: productsError },
  ] = useAxios('/products');

  // Create Product Hook
  const [
    { data: createData, loading: loadingCreate, error: createError },
    createProductRequest,
  ] = useAxios({ method: 'POST' }, { manual: true });

  // Update Product Hook
  const [
    { data: updateData, loading: loadingUpdate, error: updateError },
    updateProductRequest,
  ] = useAxios({ method: 'PATCH' }, { manual: true });

  // Delete Product Hook
  const [
    { data: deleteData, loading: loadingDelete, error: deleteError },
    deleteProductRequest,
  ] = useAxios({ method: 'DELETE' }, { manual: true });

  const createProduct = async (product: IProduct) =>
    createProductRequest({
      data: { ...product, id: uid() },
      url: `/products`,
    });

  const updateProduct = async (id: string, product: {}) =>
    updateProductRequest({ data: product, url: `/products/${id}` });

  const deleteProduct = async (id: string) =>
    deleteProductRequest({ url: `/products/${id}` });

  const sortProductsByDate = (products: IProduct[]): IProduct[] =>
    products.sort((a, b) => {
      const dateB = new Date(b.validThru);
      const dateA = new Date(a.validThru);
      return Number(dateB) - Number(dateA);
    });

  const openDeleteModal = (product: IProduct) => {
    setDeleteModalIsOpen(true);
    setProductToDelete(product);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setProductToDelete(null);
  };
  // Update Products every time the products fetch hook is called
  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  // Update Products every time a new product is created
  useEffect(() => {
    const updatedProducts = [...products, createData];
    setProducts(updatedProducts);
  }, [createData]);

  // Update Products every time a new product is edited
  useEffect(() => {
    const updatedProducts = products.map((product) =>
      product.id === updateData.id ? updateData : product
    );
    setProducts(updatedProducts);
  }, [updateData]);

  // Update Products every time a new product is deleted
  useEffect(() => {
    if (productToDelete) {
      const updatedProducts = products.filter(
        (product) => product.id !== productToDelete.id
      );
      setProducts(updatedProducts);
    }
  }, [deleteData]);

  return {
    products,
    deleteModalIsOpen,
    productToDelete,
    loadingProducts,
    loadingCreate,
    loadingUpdate,
    loadingDelete,
    productsError,
    createError,
    updateError,
    deleteError,
    sortProductsByDate,
    createProduct,
    updateProduct,
    deleteProduct,
    openDeleteModal,
    closeDeleteModal,
  };
};

export default useProductsContextProvider;
