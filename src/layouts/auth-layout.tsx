import { Outlet } from 'react-router';
import styles from './auth-layout.module.css';

function AuthLayout() {
  return (
    <div className={styles.authlayoutContainer}>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
