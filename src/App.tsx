import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { Results } from './components/Results/Results';
import './styles/styles.css';

// Logic
export const App = () => {
  const [carPrice, setCarPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(100000);
  const [leaseTerm, setleaseTerm] = useState(60);

  // Handlers
  const handleCarPrice = (e: number) => {
    if (downPayment < Math.round(e * 0.1)) {
      setDownPayment(carPrice * 0.1);
    }
    if (downPayment > Math.round(e * 0.6)) {
      setDownPayment(carPrice * 0.6);
    }
    setCarPrice(e);
  };

  const handleDownPayment = (e: number) => {
    setDownPayment(e);
  };

  const handleLeaseTerm = (e: number) => {
    setleaseTerm(e);
  };

  // Helpers
  const calculateDPMin = () => {
    const result = Math.round(carPrice * 0.1);
    return result;
  };

  const calculateDPMax = () => {
    const result = Math.round(carPrice * 0.6);
    return result;
  };

  const calculateDPBadge = () => {
    let result = Math.round((downPayment / carPrice) * 100);
    if (result > 60) result = 60;
    if (result < 10) result = 10;
    return result;
  };

  return (
    <div className='wrapper'>
      <main className='container'>
        <div className='header-box'>
          <Header>Calculate the cost of a car lease</Header>
        </div>
        <div className='inputs-box'>
          <Input
            value={carPrice}
            onChange={handleCarPrice}
            label='Car cost'
            min={1000000}
            max={6000000}
            step={5000}
            badge='$'
          />
          <Input
            value={downPayment}
            onChange={handleDownPayment}
            label='Down payment'
            min={calculateDPMin()}
            max={calculateDPMax()}
            step={500}
            badge={`${calculateDPBadge()}%`}
          />
          <Input
            value={leaseTerm}
            onChange={handleLeaseTerm}
            label='Lease term'
            min={1}
            max={60}
            step={1}
            badge={leaseTerm === 1 ? 'mo.' : 'mos.'}
          />
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
