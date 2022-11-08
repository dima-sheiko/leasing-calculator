import styles from './Button.module.css';

// Types
type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onButtonClick: () => void
};

// Logic
export const Button = ({ text, type, onButtonClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onButtonClick}>
      {text}
    </button>
  );
};
