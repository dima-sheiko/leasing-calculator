import styles from './Results.module.css';

// Types
type ResultsProps = {
  label: string;
  result: number;
};

// Logic
export const Results = ({ label, result }: ResultsProps) => {
  return (
    <section>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.result}>{result.toLocaleString('USD')} $</p>
    </section>
  );
};
