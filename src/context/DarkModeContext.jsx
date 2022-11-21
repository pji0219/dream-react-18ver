import { createContext, useState } from 'react';

// 데이터를 컨텍스트에 담고 있다고 생각하면 된다.
export const DarkModeContext = createContext();

/* 
  provider는 데이터를 보여주는 역할이라고 생각하면 된다. (이건 정확히 이해한 것인지 모르겠음)
  하위 컴포넌트를 감싸는 부모 컴포넌트이다.
  아래의 코드는 컨텍스트의 프로바이더를 쓰는 것인데 외부 파일에서 사용하기 쉽게 
  DarkModeProvider함수로 만들어서 구현하는 것
  전역적으로 기억하고 싶은 데이터들을 그리고 그것을 처리하는 로직(함수)들을 여기서 구현하면 된다.
  그리고 자식 컴포넌트에 전달하고 싶은 데이터들을 value에 넣어주면 된다.
  이렇게 하면 프로바이더 하위에 있는 자식 컴포넌트는 이 데이터에 접근 가능하다.
*/
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
