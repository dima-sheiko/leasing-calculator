// Types
type ResultsProps = {
  label: string;
  result: number;
};

// Logic
export const Results = ({ label, result }: ResultsProps) => {
  return (
    <div>
      <p>{label}</p>
      <p>{result}</p>
    </div>
  );
};
