import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../../Components/PageLayout';
import { BaseCard, BasePageTitle } from '../../Components/BaseComponents';
import EditProductForm from '../../Components/Forms/EditProductForm';
import { colors, sizes } from '../../Styles/theme';

const EditProductPage: React.FC = () => {
  const { id } = useParams();
  return (
    <PageLayout>
      <BasePageTitle>Editar Producto</BasePageTitle>
      <FormContainer>
        <EditProductForm productId={id} />
      </FormContainer>
    </PageLayout>
  );
};

const FormContainer = styled(BaseCard)`
  background-color: ${colors.white};
  ${sizes.card.horizontalPadding};
  ${sizes.card.verticalPadding};
  max-width: 600px;
`;

export default EditProductPage;
