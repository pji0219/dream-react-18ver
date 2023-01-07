import React from 'react';
import './AppTheme.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { DarkModeProvider } from './context/DarkModeContext';

function AppTheme() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

export default AppTheme;
