import PageNav from './PageNav/PageNav';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const fethCurrentUser = useSelector(state => state.auth.fethCurrentUser);

  return (
    <header className={styles.header}>
      <PageNav />
      {isLoggedIn ? <UserMenu /> : !fethCurrentUser && <AuthNav />}
    </header>
  );
}
