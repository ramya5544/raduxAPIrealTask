import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Features/mockStore';
import ProductFetchPage from './Components/ProductFetchPage';
import ProductPage from './Components/ProductPage';

const App = () => {
  return (
    <div>
     <Provider store={store}>
       <ProductFetchPage/>
       <ProductPage/>
     </Provider>
    </div>
  );
};

export default App;