import { ChangeEvent } from 'react';

// Types
type InputProps = {
  value: number;
  onChange: (e: number) => void;
  label: string;
  min: number;
  max: number;
  step: number;
  badge: string | number;
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
    <div>
      <span>{label}</span>
      <input
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        type='text'
        name='price input'
      />
      <input
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
        type='range'
        name='price slider'
      />
      {badge}
    </div>
  );
};
