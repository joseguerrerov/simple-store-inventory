import React from 'react';
import PageLayout from '../../Components/PageLayout';
import { BasePageTitle } from '../../Components/BaseComponents';
import SummaryProductsList from '../../Components/SummaryProductsList';

const HomePage: React.FC = () => (
  <PageLayout>
    <BasePageTitle>Inventario</BasePageTitle>
    <SummaryProductsList />
  </PageLayout>
);

export default HomePage;
