import styles from './header.module.css';

interface HeaderProps {
  pageTitle: string;
  userNickname: string;
}

function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <h1 className={styles.pageTitle}>{props.pageTitle}</h1>
      <div className={styles.user}>{props.userNickname}</div>
    </header>
  );
}

export default Header;
