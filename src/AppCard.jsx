import React from 'react';
import Card from './components/Card';

function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>
      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>
    </>
  );
}

export default AppCard;
