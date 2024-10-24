import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl text-center pt-10">Store Supply Chain Management Application</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default App;
