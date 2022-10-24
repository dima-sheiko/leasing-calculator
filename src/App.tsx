import React from 'react';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { Results } from './components/Results/Results';
import'./styles/styles.css';

export const App = () => {
  return (
    <main>
      <Header />
      <Input />
      <Input />
      <Input />
      <Results />
      <Results />
      <Button />
    </main>
  );
};
