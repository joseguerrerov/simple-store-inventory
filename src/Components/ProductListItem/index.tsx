import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { IProduct } from '../../@types';
import { colors, fonts } from '../../Styles/theme';
import ProductItemActions from '../ProductItemActions';

interface IProductListItemProps {
  product: IProduct;
}

const ProductListItem: React.FC<IProductListItemProps> = ({ product }) => (
  <ItemContainer>
    <ItemHeader>
      <DataContainer>
        <b>{product.name}</b>
      </DataContainer>
      <ProductItemActions product={product} />
    </ItemHeader>
    <DataContainer>
      <span>Cantidad: </span>
      {product.totalCount}
    </DataContainer>
    <DataContainer>
      <span>Fecha de Caducidad: </span>
      <Moment format="M/D/YYYY">{product.validThru}</Moment>
    </DataContainer>
  </ItemContainer>
);

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.borderGray};
  border-top: 1px solid ${colors.borderGray};
  padding: 1rem;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DataContainer = styled.div`
  display: flex;
  margin: 0;
  color: #70706a;
  font-family: ${fonts.sansSerif};
  font-size: 14px;
  letter-spacing: 0;
  line-height: 14px;
  b {
    color: ${colors.blue.textDark};
    font-weight: bold;
  }
  span {
    margin-right: 0.25rem;
  }
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export default ProductListItem;
