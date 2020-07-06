import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { IProduct } from '../../@types';
import { colors, fonts } from '../../Styles/theme';
import ProductItemActions from '../ProductItemActions';

interface IProductTableItemProps {
  product: IProduct;
}

const ProductTableItem: React.FC<IProductTableItemProps> = ({ product }) => (
  <>
    <DataContainer>
      <b>{product.name}</b>
    </DataContainer>
    <DataContainer>{product.totalCount}</DataContainer>
    <DataContainer>
      <Moment format="M/D/YYYY">{product.validThru}</Moment>
    </DataContainer>
    <DataContainer>
      <ProductItemActions product={product} />
    </DataContainer>
  </>
);

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1rem;
  color: #70706a;
  font-family: ${fonts.sansSerif};
  font-size: 14px;
  letter-spacing: 0;
  line-height: 14px;
  border-bottom: 1px solid ${colors.borderGray};
  b {
    color: ${colors.blue.textDark};
    font-weight: bold;
  }
`;

export default ProductTableItem;
