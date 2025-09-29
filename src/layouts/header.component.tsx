import classNames from 'classnames';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styles from './header.module.css';

interface HeaderProps {
  pageTitle: ReactNode;
  userNickname: string;
  Menu?: ReactNode;
  PageMenu?: ReactNode;
}

function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoContainer}>
          <NavLink to="/" className={styles.logo} />
        </div>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>{props.pageTitle}</h1>
          {props.Menu}
        </div>
        <div className={styles.userContainer}>
          <div className={styles.user}>{props.userNickname}</div>
          <div className={styles.userActionsMenu}>
            <a
              className={classNames([
                styles.userAction,
                styles.userActionSettings,
              ])}
            ></a>
            <a
              className={classNames([
                styles.userAction,
                styles.userActionNotifications,
              ])}
            ></a>
            <a
              className={classNames([styles.userAction, styles.userActionHelp])}
            ></a>
            <a
              className={classNames([
                styles.userAction,
                styles.userActionLogout,
              ])}
            ></a>
          </div>
        </div>
      </div>
      <div className={styles.pageMenu}>{props.PageMenu}</div>
    </header>
  );
}

export default Header;
