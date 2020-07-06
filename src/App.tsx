import React from 'react';
import { configure } from 'axios-hooks';
import Axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreateProductPage from './Pages/CreateProductPage';
import EditProductPage from './Pages/EditProductPage';
import ProductsContext from './Context/ProductsContext';
import useProductsContextProvider from './Hooks/useProductsContexProvider';
import DeleteProductModal from './Components/DeleteProductModal';

const App: React.FC = () => {
  const axios = Axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
  configure({ axios });
  const productContextProvider = useProductsContextProvider();
  return (
    <ProductsContext.Provider value={productContextProvider}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/producto/crear" component={CreateProductPage} />
          <Route
            exact
            path="/producto/editar/:id"
            component={EditProductPage}
          />
        </Switch>
      </BrowserRouter>
      <DeleteProductModal />
    </ProductsContext.Provider>
  );
};

export default App;
