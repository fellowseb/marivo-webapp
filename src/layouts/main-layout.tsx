import type { ReactNode } from 'react';
import { Outlet } from 'react-router';
import Header from './header.component';
import styles from './main-layout.module.css';

interface MainLayoutProps {
  title: ReactNode;
  Menu?: ReactNode;
  PageMenu?: ReactNode;
}

function MainLayout(props: MainLayoutProps) {
  return (
    <div className={styles.mainContainer}>
      <Header
        pageTitle={props.title}
        Menu={props.Menu}
        PageMenu={props.PageMenu}
      />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
