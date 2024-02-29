import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

export default function AppCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='banner'>
        <h1>
          Total Count: {count} {count > 10 ? '🔥' : '❄'}
        </h1>
      </div>
      <div className='counters'>
        <Counter count={count} setCount={setCount} />
        <Counter count={count} setCount={setCount} />
      </div>
    </div>
  );
}
