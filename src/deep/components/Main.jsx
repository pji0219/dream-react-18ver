import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

function Main() {
  return (
    <div>
      <Profile />
      <Products />
    </div>
  );
}

export default Main;

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      Product Detail
      <p>
        DarkMode:&nbsp;
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark mode
          </span>
        ) : (
          <span>Light mode</span>
        )}
      </p>
      <button onClick={toggleDarkMode}>Toggle</button>
    </div>
  );
}
