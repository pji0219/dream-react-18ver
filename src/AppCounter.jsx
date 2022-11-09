import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  const totalCountHandler = () => {
    setTotalCount((prev) => prev + 1);
  };

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {totalCount} {totalCount > 10 ? '🔥' : '❄'}
      </div>
      <Counter totalCount={totalCount} setTotal={totalCountHandler} />
      <Counter totalCount={totalCount} setTotal={totalCountHandler} />
    </div>
  );
}

export default AppCounter;
