import { ChangeEvent, useState, useEffect } from 'react';
import styles from './Input.module.css';

// Types
type Input = {
  value: number;
  onChange: (e: number) => void;
  label: string;
  min: number;
  max: number;
  step: number;
  badge: string;
};

// Logic
export const Input = ({
  value,
  onChange,
  label,
  min,
  max,
  step,
  badge,
}: Input) => {
  const [result, setResult] = useState(value);

  // Effect
  useEffect(() => {
    setResult(value);
  }, [value]);

  // Handlers
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    if (!rawValue) return;
    const num = Number(rawValue);
    setResult(num);
  };

  const rangeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setResult(Number(e.target.value));
    onChange(Number(e.target.value));
  };

  const handleBlur = () => {
    if (result < min) {
      setResult(min);
      return onChange(min);
    }
    if (result > max) {
      setResult(max);
      return onChange(max);
    }
    return onChange(result);
  };


  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        value={result}
        onChange={inputChangeHandler}
        onBlur={handleBlur}
        type='number'
        name='price input'
      />
      <div
        className={badge.includes('%') ? styles.badge_percent : styles.badge}
      >
        {badge}
      </div>
      <input
        className={styles.slider}
        value={result}
        onChange={rangeChangeHandler}
        min={min}
        max={max}
        step={step}
        type='range'
        name='price slider'
      />
    </div>
  );
};
