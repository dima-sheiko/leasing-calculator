import styles from './Button.module.css';

// Types
type ButtonProps = {
  text: string;
};

// Logic
export const Button = ({ text }: ButtonProps) => {
  return (
    <button className={styles.button} type='submit'>
      {text}
    </button>
  );
};
