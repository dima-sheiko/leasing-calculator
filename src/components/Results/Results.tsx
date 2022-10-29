import styles from './Results.module.css';

// Types
type ResultsProps = {
  label: string;
  result: number;
};

// Logic
export const Results = ({ label, result }: ResultsProps) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <p className={styles.result}>{result.toLocaleString('USD')} $</p>
    </div>
  );
};
