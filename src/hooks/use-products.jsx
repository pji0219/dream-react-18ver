import { useState, useEffect } from 'react';

function useProducts({ salesOnly }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? 'sale_products.json' : 'products.json'}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((err) => {
        setError('에러 발생!');
      })
      .finally(() => setIsLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);

  return [products, error, isLoading];
}

export default useProducts;
