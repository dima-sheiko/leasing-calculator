import styles from './Header.module.css'

// Types
type HeaderProps = {
  children: string;
};

// Logic
export const Header = ({ children }: HeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};
