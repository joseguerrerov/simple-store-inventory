import React from 'react';
import SummaryProductListHeader from '../SummaryProductListHeader';
import { BaseCard } from '../BaseComponents';
import LoadingSpinner from '../LoadingSpinner';
import ProductTable from '../ProductTable';
import useMediaQueryDetector from '../../Hooks/useMediaQueryDetector';
import ProductList from '../ProductList';
import useProductContext from '../../Hooks/useProductsContext';

const SummaryProductsList: React.FC = () => {
  const { products, loadingProducts, sortProductsByDate } = useProductContext();
  const { isTablet, isDesktop, isMobile } = useMediaQueryDetector();
  const sortedProducts = sortProductsByDate(products);
  return (
    <BaseCard>
      {loadingProducts && <LoadingSpinner />}
      {sortedProducts && (
        <>
          <SummaryProductListHeader title="Productos" />
          {(isTablet || isDesktop) && (
            <ProductTable products={sortedProducts} />
          )}
          {isMobile && <ProductList products={sortedProducts} />}
        </>
      )}
    </BaseCard>
  );
};

export default SummaryProductsList;
