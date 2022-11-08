import { ReactNode } from 'react';

// Types
type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='wrapper'>
      <div className='container'>{children}</div>
    </div>
  );
};
