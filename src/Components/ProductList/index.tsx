import React from 'react';
import styled from 'styled-components';
import { IProduct } from '../../@types';
import { fonts } from '../../Styles/theme';
import ProductListItem from '../ProductListItem';

interface IProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => (
  <ProductsContainer>
    {products.map((product) => (
      <ProductListItem product={product} key={product.id} />
    ))}
  </ProductsContainer>
);

const ProductsContainer = styled.div`
  font-family: ${fonts.sansSerif};
`;

export default ProductList;
