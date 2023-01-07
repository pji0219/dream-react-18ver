import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person';

const initialPerson = {
  name: '박종익',
  title: '개발자',
  mentors: [
    {
      name: '연우',
      title: '시니어 개발자',
    },
    {
      name: '김소현',
      title: '주니어 개발자',
    },
    {
      name: '김유정',
      title: '주니어 개발자',
    },
  ],
};

function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const changeMentorHandler = useCallback(() => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    dispatch({ type: 'updated', prev, current });
  }, []);

  const addMentorHandler = useCallback(() => {
    const name = prompt('이름을 입력하세요.');
    const title = prompt('타이틀을 입력하세요.');
    dispatch({ type: 'added', name, title });
  }, []);

  const deleteMentorHandler = useCallback(() => {
    const name = prompt('이름을 입력하세요.');
    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토의 이름 바꾸기' onClick={changeMentorHandler} />
      <Button text='멘토 추가 하기' onClick={addMentorHandler} />
      <Button text='멘토 삭제 하기' onClick={deleteMentorHandler} />
    </div>
  );
}

export default AppMentorsButton;

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering');
  // 컴포넌트가 렌더링 될 때 한번만 연산하고 연산된 값을 기억해서 재연산을 안하므로 성능 최적화, 무거운 일을 할 때 한번만 연산하고 다음엔 연산된 값을 기억해놔서 연산을 안함
  // 특정 값이 변경될 때만 연산을 해야된다면 디펜던시에 넣어주면 됨
  const result = useMemo(() => calculateSomething(), []);

  /* 
    복잡한 UI가 있기 때문에 이것을 가상돔을 만들어서 비교하는 것이 시간낭비다고 생각될 때 즉 컴포넌트 자체를 최적화 시키고 싶을 때
    컴포넌트 내부에서 사용하는 함수가 있다면 먼저 useCallback으로 컴포넌트가 렌더링될 때 한번만 만들고 재사용하게 하고 
    React.memo 또는 memo로 컴포넌트에서 props가 바뀌지 않았으면 virtual DOM에 새로 렌더링하지 않게 하여 컴포넌트를 최적화
  */

  /* 
    성능 최적화는 무거운 일을 하거나 컴포넌트 트리가 복잡한 경우 성능을 측정해보고 성능에 문제가 있을 때 최적화 작업을 하면 된다.
  */

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😊');
  }
  return 10;
}
