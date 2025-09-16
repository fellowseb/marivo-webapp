import type { ReactNode } from 'react';
import Header from './Header';
import styles from './mainlayout.module.css';

interface MainLayoutProps {
  children: ReactNode;
  pageTitle: string;
  userNickname: string;
}

function MainLayout(props: MainLayoutProps) {
  return (
    <div className={styles.mainContainer}>
      <Header pageTitle={props.pageTitle} userNickname={props.userNickname} />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default MainLayout;
