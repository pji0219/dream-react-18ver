import React from 'react';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
// 동일한 클래스명을 가지고 있으면 나중에 임포트 된 것으로 덮어 씌워진다.

function AppPost() {
  return (
    <>
      <Button1 />
      <Button2 />
    </>
  );
}

export default AppPost;
