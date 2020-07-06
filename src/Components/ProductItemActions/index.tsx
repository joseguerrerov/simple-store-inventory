import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as EditIcon } from '../../Assets/Icons/Create.svg';
import { colors } from '../../Styles/theme';
import { ReactComponent as DeleteIcon } from '../../Assets/Icons/Delete.svg';
import useProductContext from '../../Hooks/useProductsContext';
import { IProduct } from '../../@types';

interface IProductItemActionsProps {
  product: IProduct;
}

const ProductItemActions: React.FC<IProductItemActionsProps> = ({
  product,
}) => {
  const { openDeleteModal } = useProductContext();
  return (
    <ActionsContainer>
      <Link to={`/producto/editar/${product.id}`}>
        <StyledEditIcon />
      </Link>
      <button onClick={() => openDeleteModal(product)}>
        <StyledDeleteIcon />
      </button>
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div`
  justify-content: flex-end;
  button,
  a {
    padding: 0 0 0 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: none;
  }
`;

const StyledEditIcon = styled(EditIcon)`
  height: 24px;
  width: 24px;
  fill: ${colors.purple};
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  height: 24px;
  width: 24px;
  fill: ${colors.error};
`;

export default ProductItemActions;
