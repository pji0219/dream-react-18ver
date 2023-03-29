import React, { useReducer } from 'react';
import personReducer from './reducer/person';

const initialPerson = {
  name: '박종익',
  title: '개발자',
  mentors: [
    {
      name: 'A',
      title: '시니어 개발자',
    },
    {
      name: 'B',
      title: '주니어 개발자',
    },
    {
      name: 'C',
      title: '주니어 개발자',
    },
  ],
};

function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const changeMentorHandler = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    dispatch({ type: 'updated', prev, current });
  };

  const addMentorHandler = () => {
    const name = prompt('이름을 입력하세요.');
    const title = prompt('타이틀을 입력하세요.');
    dispatch({ type: 'added', name, title });
  };

  const deleteMentorHandler = () => {
    const name = prompt('이름을 입력하세요.');
    dispatch({ type: 'deleted', name });
  };

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
      <button onClick={changeMentorHandler}>멘토의 이름 바꾸기</button>
      <button onClick={addMentorHandler}>멘토 추가 하기</button>
      <button onClick={deleteMentorHandler}>멘토 삭제 하기</button>
    </div>
  );
}

export default AppMentors;
