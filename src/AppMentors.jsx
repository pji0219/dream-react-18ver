import React, { useState } from 'react';

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

function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const changeMentorHandler = () => {
    const prevName = prompt('누구의 이름을 바꾸고 싶은가요?');
    const currName = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.map((mentor) => {
        if (mentor.name === prevName) {
          return { ...mentor, name: currName };
        }
        return mentor;
      }),
    }));
  };

  const addMentorHandler = () => {
    const name = prompt('이름을 입력하세요.');
    const title = prompt('타이틀을 입력하세요.');

    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name, title }],
    }));
  };

  const deleteMentorHandler = () => {
    const name = prompt('이름을 입력하세요.');

    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.filter((mentor) => mentor.name !== name),
    }));
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
