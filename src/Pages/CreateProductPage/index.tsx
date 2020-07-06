import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../Components/PageLayout';
import { BaseCard, BasePageTitle } from '../../Components/BaseComponents';
import { colors, sizes } from '../../Styles/theme';
import CreateProductForm from '../../Components/Forms/CreateProductForm';

const EditProductPage: React.FC = () => (
  <PageLayout>
    <BasePageTitle>Crear Producto</BasePageTitle>
    <FormContainer>
      <CreateProductForm />
    </FormContainer>
  </PageLayout>
);

const FormContainer = styled(BaseCard)`
  background-color: ${colors.white};
  ${sizes.card.horizontalPadding};
  ${sizes.card.verticalPadding};
  max-width: 600px;
`;

export default EditProductPage;
