import React from 'react';
import styled from 'styled-components';
import { IProduct } from '../../@types';
import { colors, fonts } from '../../Styles/theme';
import ProductTableItem from '../ProductTableItem';

interface IProductTableProps {
  products: IProduct[];
}

const ProductTable: React.FC<IProductTableProps> = ({ products }) => (
  <ProductsContainer>
    <span>Nombre</span>
    <span>Cantidad</span>
    <span>Fecha de Caducidad</span>
    <span />
    {products.map((product) => (
      <ProductTableItem product={product} key={product.id} />
    ))}
  </ProductsContainer>
);

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(50px, 1fr)
    minmax(50px, 70px)
    minmax(50px, 150px)
    minmax(50px, 100px);
  font-family: ${fonts.sansSerif};
  span {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 14px;
    border-bottom: 1px solid ${colors.borderGray};
    color: rgba(21, 33, 80, 0.73);
    background-color: #f9fafb;
    padding: 9px 1rem;
  }
`;

export default ProductTable;
