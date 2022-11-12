import React, { useState } from 'react';
import './AppXY.css';

function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const pointerHandler = (e) => {
    console.log(e.clientX, e.clientY);
    // setPosition({ x: e.clientX, y: e.clientY });

    // 수평으로만 이동 가능하게, ...prev로 이전 state y값 풀어짐
    setPosition((prev) => ({ ...prev, x: e.clientX }));
  };

  return (
    <div className='container' onPointerMove={pointerHandler}>
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}

export default AppXY;
