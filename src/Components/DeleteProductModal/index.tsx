import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import useProductContext from '../../Hooks/useProductsContext';
import { colors, fonts, sizes } from '../../Styles/theme';
import { ReactComponent as CloseIcon } from '../../Assets/Icons/Close.svg';
import { BaseSubmitBtn } from '../BaseComponents';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: `1px solid ${colors.borderGray}`,
    borderRadius: sizes.borderRadius,
    backgroundColor: colors.white,
  },
};

const DeleteProductModal = () => {
  const {
    deleteModalIsOpen,
    productToDelete,
    closeDeleteModal,
    deleteProduct,
  } = useProductContext();

  const handleDelete = async () => {
    if (!productToDelete) return;
    await deleteProduct(productToDelete.id);
    closeDeleteModal();
  };
  return (
    <Modal
      isOpen={deleteModalIsOpen}
      onRequestClose={closeDeleteModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>
        <h1>Eliminar Producto</h1>
        <button onClick={closeDeleteModal}>
          <CloseIcon />
        </button>
      </ModalHeader>
      <ModalContent>
        <p>
          Estás seguro que deseas eliminar el producto: &quot;
          <span>{productToDelete?.name}</span>&quot; de manera definitiva. Esta
          acción no puede deshacerse
        </p>
      </ModalContent>
      <ModalActions>
        <button onClick={closeDeleteModal}>Cancelar</button>
        <BaseSubmitBtn error={true} onClick={handleDelete}>
          Eliminar
        </BaseSubmitBtn>
      </ModalActions>
    </Modal>
  );
};

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colors.borderGray};
  h1 {
    margin: 0;
    color: ${colors.blue.textDark};
    font-family: ${fonts.sansSerif};
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 19px;
    text-align: center;
  }
  button {
    padding: 0;
    border: none;
    background: none;
    margin: 0;
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  p {
    font-family: ${fonts.sansSerif};
    color: ${colors.blue.textDark};
    line-height: 19px;
    margin: 1rem 0 2rem;
    span {
      font-weight: bold;
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button:first-of-type {
    border: none;
    background: none;
    cursor: pointer;
    color: #152150;
    font-family: ${fonts.sansSerif};
    font-size: 12px;
    letter-spacing: 0;
    line-height: 14px;
    margin-right: 1rem;
  }
`;

export default DeleteProductModal;
