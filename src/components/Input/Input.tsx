import { ChangeEvent } from 'react';
import styles from './Input.module.css';

// Types
type InputProps = {
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
}: InputProps) => {
  // Handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleBlur = () => {
    if (value < min) {
      onChange(min);
    }

    if (value > max) {
      onChange(max);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        value={value}
        onChange={handleInputChange}
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
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
        type='range'
        name='price slider'
      />
    </div>
  );
};
