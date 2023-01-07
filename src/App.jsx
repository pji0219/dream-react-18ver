import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import React from 'react';
import './App.css';
import MainProducts from './components/MainProducts';

export default function App() {
  return (
    <QueryClientProvider>
      <MainProducts />;
    </QueryClientProvider>
  );
}
