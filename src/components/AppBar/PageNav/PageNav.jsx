import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

export default function PageNav() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        <Button variant="primary">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          <Button variant="primary">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
}
