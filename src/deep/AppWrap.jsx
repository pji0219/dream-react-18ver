import React from 'react';
import Avatar from './components/Avatar';
import Navbar from './components/Navbar';

// props.children은 아래와 같이 Navbar컴포넌트로 감싼 것이 Navbar컴포넌트에 chidren으로 전해진다.
// 이렇게 했을 경우 장점은 정해진 틀이 아닌 다양한 navbar를 만들 수 있다.
function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://image.newsis.com/2020/07/04/NISI20200704_0000557436_web.jpg?rnd=20200704162417'
          name='연우'
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

export default AppWrap;
