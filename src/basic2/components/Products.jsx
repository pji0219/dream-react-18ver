import React, { useState } from 'react';
import useProducts from '../../deep2/hooks/use-products';

function Products() {
  const [checked, setChecked] = useState(false);
  const [isLoading, error, products] = useProducts(checked);

  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
