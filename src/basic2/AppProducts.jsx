import React, { useState } from 'react';
import Products from './components/Products';

export default function AppProducts() {
  const [showProduct, setShowProduct] = useState(true);

  const onToggleHandler = () => {
    setShowProduct((show) => !show);
  };

  return (
    <div>
      {showProduct && <Products />}
      <button onClick={onToggleHandler}>Toggle</button>
    </div>
  );
}
