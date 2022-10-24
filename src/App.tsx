import React from 'react';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { Results } from './components/Results/Results';
import './styles/styles.css';

export const App = () => {
  return (
    <div className='wrapper'>
      <main className='container'>
        <div className='header-box'>
          <Header />
        </div>
        <div className='inputs-box'>
          <Input />
          <Input />
          <Input />
        </div>
        <div className='results-box'>
          <Results />
          <Results />
          <Button />
        </div>
      </main>
    </div>
  );
};
