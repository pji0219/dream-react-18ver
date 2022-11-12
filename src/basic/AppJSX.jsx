import './App.css';

function AppJSX() {
  const name = '종익';
  const list = ['우유', '딸기', '바나나'];

  return (
    <>
      <h1>{`Hello! ${name}`}</h1>
      <p>{name}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <img
        src='https://image.newsis.com/2020/07/04/NISI20200704_0000557436_web.jpg?rnd=20200704162417'
        alt='연우'
      />
    </>
  );
}

export default AppJSX;
