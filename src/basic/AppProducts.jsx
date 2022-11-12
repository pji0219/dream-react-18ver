import React, { useState } from 'react';
import Products from './components/Products';

function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  const showProductsHandler = () => {
    setShowProducts((show) => !show);
  };

  return (
    <div>
      {showProducts && <Products />}
      <button onClick={showProductsHandler}>Toggle</button>
    </div>
  );
}

export default AppProducts;
