import React, { useState } from 'react';

function AppMentor() {
  const [person, setPerson] = useState({
    name: '박종익',
    title: '개발자',
    mentor: {
      name: '연우',
      title: '시니어 개발자',
    },
  });

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt('멘토의 이름은 무엇 입니까?');
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, name } }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt('멘토의 타이틀은 무엇 입니까?');
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, title } }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}

export default AppMentor;
