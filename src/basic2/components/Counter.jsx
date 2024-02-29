import React, { useState } from 'react';

export default function Counter({ count, setCount }) {
  const [conuter, setCounter] = useState(0);

  const onCreaseHandler = () => {
    setCounter((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const onDecreaseHandler = () => {
    if (conuter > 0) {
      setCounter((prev) => prev - 1);
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className='counter'>
      <span className='number'>
        {conuter} / <span className='number__total_num'>{count}</span>
      </span>
      <button className='button' onClick={onCreaseHandler}>
        Add +
      </button>
      <button className='button' onClick={onDecreaseHandler}>
        Minus -
      </button>
    </div>
  );
}
