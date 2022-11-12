import React, { useState } from 'react';

function Counter({ totalCount, setTotal }) {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prev) => prev + 1); // 이전 상태 값에 의존해서 상태 값을 변경해야 할 때는 이렇게 하는 것이 안전하다.
    setTotal();
  };

  return (
    <div className='counter'>
      <span className='number'>
        {count}
        <span className='number__total_num'>/ {totalCount}</span>
      </span>
      <button className='button' onClick={countHandler}>
        Add +
      </button>
    </div>
  );
}

export default Counter;
